import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { APP_CONFIG, isGoogleOAuthConfigured } from '../config/app-config';
import { AuthSessionService } from '../services/auth-session.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

declare global {
  interface Window { google: any; }
}

type OtpStep = 'input' | 'otp';
type InputType = 'unknown' | 'email' | 'phone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly apiUrl = APP_CONFIG.AUTH_API_URL;

  // Expose enums to template
  readonly SearchCountryField = SearchCountryField;
  readonly CountryISO = CountryISO;
  readonly PhoneNumberFormat = PhoneNumberFormat;

  // OTP flow
  step: OtpStep = 'input';
  inputType: InputType = 'unknown';
  identifier = '';
  phoneControl = new FormControl(undefined);
  fullName = '';
  otpDigits: string[] = ['', '', '', '', '', ''];
  resendCountdown = 0;
  private resendTimer?: ReturnType<typeof setInterval>;

  // Admin login
  email = '';
  password = '';

  isSignupMode = false;
  isLoading = false;
  isGoogleLoading = false;
  errorMessage = '';
  successMessage = '';
  readonly currentYear = new Date().getFullYear();

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly authSession: AuthSessionService
  ) {}

  ngOnInit(): void {
    this.isSignupMode = this.router.url.startsWith('/signup') || this.router.url.startsWith('/register');
  }

  ngOnDestroy(): void {
    clearInterval(this.resendTimer);
  }

  get isAdminLogin(): boolean {
    return this.router.url.startsWith('/admin/login');
  }

  get pageTitle(): string {
    if (this.isAdminLogin) return 'DivaraCraft';
    if (this.step === 'otp') return 'Verify OTP';
    return this.isSignupMode ? 'Create Your Account' : 'Welcome Back';
  }

  get pageSubtitle(): string {
    if (this.isAdminLogin) return 'Admin Panel Login';
    if (this.step === 'otp') {
      return `Code sent to ${this.identifier}`;
    }
    return this.isSignupMode ? 'Join Divara Craft to shop faster' : 'Login to continue shopping';
  }

  get otpComplete(): boolean {
    return this.otpDigits.every(d => !!d);
  }

  get canSendOtp(): boolean {
    return !!this.identifier.trim();
  }

  // ── Smart identifier detection ────────────────────────────────────────────

  onIdentifierInput(): void {
    const val = this.identifier.trim();
    if (!val) { this.inputType = 'unknown'; return; }
    this.inputType = /^[\d+]/.test(val) ? 'phone' : 'email';
  }

  setInputType(type: 'email' | 'phone'): void {
    this.inputType = type;
    this.identifier = '';
    this.phoneControl.reset();
    this.errorMessage = '';
  }

  // ── OTP send ──────────────────────────────────────────────────────────────

  sendOtp(): void {
    this.errorMessage = '';

    if (this.isSignupMode && !this.fullName.trim()) {
      this.errorMessage = 'Please enter your full name.';
      return;
    }

    let identifier: string;
    identifier = this.identifier.trim();
    if (!identifier) {
      this.errorMessage = 'Please enter your email or mobile number.';
      return;
    }
    // Basic validation: if it looks like a phone, check it has enough digits
    if (this.inputType === 'phone') {
      const digits = identifier.replace(/\D/g, '');
      if (digits.length < 7) {
        this.errorMessage = 'Please enter a valid mobile number.';
        return;
      }
    } else if (this.inputType === 'email') {
      if (!this.isValidEmail(identifier)) {
        this.errorMessage = 'Please enter a valid email address.';
        return;
      }
    }

    this.isLoading = true;
    this.http.post<any>(`${this.apiUrl}/send-otp`, { identifier }).subscribe({
      next: () => {
        this.isLoading = false;
        this.step = 'otp';
        this.startResendCountdown();
        setTimeout(() => {
          (document.getElementById('otp-0') as HTMLInputElement)?.focus();
        }, 100);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Failed to send OTP. Please try again.';
      }
    });
  }

  // ── OTP input handling ────────────────────────────────────────────────────

  onOtpInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '');
    this.otpDigits[index] = val.slice(-1);
    input.value = this.otpDigits[index];

    if (this.otpDigits[index] && index < 5) {
      (document.getElementById(`otp-${index + 1}`) as HTMLInputElement)?.focus();
    }
    if (this.otpDigits.every(d => !!d)) { this.verifyOtp(); }
  }

  onOtpKeydown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      (document.getElementById(`otp-${index - 1}`) as HTMLInputElement)?.focus();
    }
  }

  onOtpPaste(event: ClipboardEvent): void {
    const text = event.clipboardData?.getData('text') || '';
    const digits = text.replace(/\D/g, '').slice(0, 6).split('');
    digits.forEach((d, i) => { if (i < 6) this.otpDigits[i] = d; });
    event.preventDefault();
    if (digits.length === 6) { setTimeout(() => this.verifyOtp(), 50); }
  }

  verifyOtp(): void {
    const code = this.otpDigits.join('');
    if (code.length < 6) return;

    const identifier = this.identifier.trim();

    this.isLoading = true;
    this.errorMessage = '';

    this.http.post<any>(`${this.apiUrl}/verify-otp`, {
      identifier, code, name: this.fullName.trim() || undefined
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.handleAuthSuccess(response, 'Signed in successfully!');
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Invalid OTP. Please try again.';
        this.otpDigits = ['', '', '', '', '', ''];
        setTimeout(() => (document.getElementById('otp-0') as HTMLInputElement)?.focus(), 50);
      }
    });
  }

  resendOtp(): void {
    if (this.resendCountdown > 0) return;
    this.otpDigits = ['', '', '', '', '', ''];
    this.errorMessage = '';
    this.sendOtp();
  }

  goBack(): void {
    this.step = 'input';
    this.otpDigits = ['', '', '', '', '', ''];
    this.errorMessage = '';
    clearInterval(this.resendTimer);
    this.resendCountdown = 0;
  }

  private startResendCountdown(): void {
    this.resendCountdown = 30;
    clearInterval(this.resendTimer);
    this.resendTimer = setInterval(() => {
      this.resendCountdown--;
      if (this.resendCountdown <= 0) clearInterval(this.resendTimer);
    }, 1000);
  }

  private handleAuthSuccess(response: any, message: string): void {
    if (!response?.token) {
      this.errorMessage = 'Authentication failed. Invalid response from server.';
      return;
    }
    this.authSession.setSession(response.token, response.user || {});
    this.successMessage = message;
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    setTimeout(() => this.router.navigateByUrl(returnUrl), 800);
  }

  // ── Google Sign-In ────────────────────────────────────────────────────────

  continueWithGoogle(): void {
    if (this.isAdminLogin) return;
    this.errorMessage = '';

    if (!isGoogleOAuthConfigured()) {
      this.errorMessage = 'Google Sign-In is not configured yet.';
      return;
    }
    if (!window.google?.accounts?.oauth2) {
      this.errorMessage = 'Google Sign-In library is still loading. Please try again.';
      return;
    }

    this.isGoogleLoading = true;
    try {
      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: APP_CONFIG.GOOGLE_CLIENT_ID,
        scope: 'openid email profile',
        callback: (response: any) => {
          if (!response?.access_token) {
            this.isGoogleLoading = false;
            this.errorMessage = 'Google sign-in failed. Access token not received.';
            return;
          }
          this.handleGoogleAccessToken(response.access_token);
        },
        error_callback: () => {
          this.isGoogleLoading = false;
          this.errorMessage = 'Google sign-in was cancelled or blocked.';
        }
      });
      tokenClient.requestAccessToken({ prompt: 'select_account' });
    } catch {
      this.isGoogleLoading = false;
      this.errorMessage = 'Failed to start Google Sign-In. Please try again.';
    }
  }

  private handleGoogleAccessToken(accessToken: string): void {
    this.http.get<any>('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).subscribe({
      next: (googleProfile) => {
        this.http.post<any>(`${this.apiUrl}/google-signin-profile`, {
          email: googleProfile?.email,
          name: googleProfile?.name,
          picture: googleProfile?.picture || null
        }).subscribe({
          next: (backendResponse) => {
            this.isGoogleLoading = false;
            this.handleAuthSuccess(backendResponse, 'Signed in with Google successfully.');
          },
          error: (error) => {
            this.isGoogleLoading = false;
            this.errorMessage = error?.error?.error || 'Google sign-in failed on server.';
          }
        });
      },
      error: () => {
        this.isGoogleLoading = false;
        this.errorMessage = 'Failed to fetch Google profile. Please try again.';
      }
    });
  }

  // ── Admin login ───────────────────────────────────────────────────────────

  onSubmit(): void {
    if (!this.validateAdminForm()) return;
    this.isLoading = true;
    this.errorMessage = '';

    this.http.post<any>(`${this.apiUrl}/login`, {
      email: this.email.trim(),
      password: this.password
    }).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('admin_token', response.token);
          localStorage.setItem('admin_user', JSON.stringify(response.user));
          this.successMessage = 'Login successful. Redirecting...';
          setTimeout(() => this.router.navigate(['/admin']), 1000);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Login failed. Please try again.';
      }
    });
  }

  // ── Tab switching ─────────────────────────────────────────────────────────

  showCustomerLogin(): void {
    this.isSignupMode = false;
    this.step = 'input';
    this.resetForm();
    if (!this.router.url.startsWith('/login')) {
      this.router.navigate(['/login'], { queryParamsHandling: 'preserve' });
    }
  }

  showCustomerSignup(): void {
    this.isSignupMode = true;
    this.step = 'input';
    this.resetForm();
    if (!this.router.url.startsWith('/signup')) {
      this.router.navigate(['/signup'], { queryParamsHandling: 'preserve' });
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private resetForm(): void {
    this.identifier = '';
    this.phoneControl.reset();
    this.inputType = 'unknown';
    this.fullName = '';
    this.otpDigits = ['', '', '', '', '', ''];
    this.errorMessage = '';
    this.successMessage = '';
    clearInterval(this.resendTimer);
    this.resendCountdown = 0;
  }

  private validateAdminForm(): boolean {
    if (!this.email.trim()) { this.errorMessage = 'Email is required'; return false; }
    if (!this.password) { this.errorMessage = 'Password is required'; return false; }
    if (!this.isValidEmail(this.email)) { this.errorMessage = 'Invalid email format'; return false; }
    return true;
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  clearError(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }
}
