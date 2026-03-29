import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { AuthPopupService } from '../../services/auth-popup.service';
import { AuthSessionService } from '../../services/auth-session.service';

@Component({
  selector: 'app-auth-signup-popup',
  templateUrl: './auth-signup-popup.component.html',
  styleUrls: ['./auth-signup-popup.component.scss']
})
export class AuthSignupPopupComponent implements OnInit, OnDestroy {
  private readonly apiUrl = 'http://localhost:5001/api/auth';
  private readonly authSessionService = inject(AuthSessionService);

  readonly countryCodeOptions = [
    { code: '+91', label: 'India (+91)' },
    { code: '+1', label: 'United State (+1)' },
    { code: '+971', label: 'Dubai (+971)' },
    { code: '+44', label: 'United Kingdon (+44)' },
    { code: '+7', label: 'RU (+7)' },
    { code: '+20', label: 'EG (+20)' },
    { code: '+27', label: 'ZA (+27)' },
    { code: '+30', label: 'GR (+30)' },
    { code: '+31', label: 'NL (+31)' },
    { code: '+32', label: 'BE (+32)' },
    { code: '+33', label: 'FR (+33)' },
    { code: '+34', label: 'ES (+34)' },
    { code: '+36', label: 'HU (+36)' },
    { code: '+39', label: 'IT (+39)' },
    { code: '+40', label: 'RO (+40)' },
    { code: '+41', label: 'CH (+41)' },
    { code: '+43', label: 'AT (+43)' },
    { code: '+45', label: 'DK (+45)' },
    { code: '+46', label: 'SE (+46)' },
    { code: '+47', label: 'NO (+47)' },
    { code: '+49', label: 'DE (+49)' },
    { code: '+52', label: 'MX (+52)' },
    { code: '+54', label: 'AR (+54)' },
    { code: '+55', label: 'BR (+55)' },
    { code: '+60', label: 'MY (+60)' },
    { code: '+61', label: 'AU (+61)' },
    { code: '+62', label: 'ID (+62)' },
    { code: '+63', label: 'PH (+63)' },
    { code: '+64', label: 'NZ (+64)' },
    { code: '+65', label: 'SG (+65)' },
    { code: '+66', label: 'TH (+66)' },
    { code: '+81', label: 'JP (+81)' },
    { code: '+82', label: 'KR (+82)' },
    { code: '+84', label: 'VN (+84)' },
    { code: '+86', label: 'CN (+86)' },
    { code: '+90', label: 'TR (+90)' },
    { code: '+92', label: 'PK (+92)' },
    { code: '+94', label: 'LK (+94)' },
    { code: '+98', label: 'IR (+98)' },
    { code: '+212', label: 'MA (+212)' },
    { code: '+213', label: 'DZ (+213)' },
    { code: '+216', label: 'TN (+216)' },
    { code: '+218', label: 'LY (+218)' },
    { code: '+234', label: 'NG (+234)' },
    { code: '+254', label: 'KE (+254)' },
    { code: '+255', label: 'TZ (+255)' },
    { code: '+256', label: 'UG (+256)' },
    { code: '+260', label: 'ZM (+260)' },
    { code: '+263', label: 'ZW (+263)' },
    { code: '+351', label: 'PT (+351)' },
    { code: '+353', label: 'IE (+353)' },
    { code: '+358', label: 'FI (+358)' },
    { code: '+359', label: 'BG (+359)' },
    { code: '+380', label: 'UA (+380)' },
    { code: '+385', label: 'HR (+385)' },
    { code: '+420', label: 'CZ (+420)' },
    { code: '+421', label: 'SK (+421)' },
    { code: '+852', label: 'HK (+852)' },
    { code: '+853', label: 'MO (+853)' },
    { code: '+855', label: 'KH (+855)' },
    { code: '+880', label: 'BD (+880)' },
    { code: '+886', label: 'TW (+886)' },
    { code: '+962', label: 'JO (+962)' },
    { code: '+964', label: 'IQ (+964)' },
    { code: '+965', label: 'KW (+965)' },
    { code: '+966', label: 'SA (+966)' },
    { code: '+968', label: 'OM (+968)' },
    { code: '+970', label: 'PS (+970)' },
    { code: '+972', label: 'IL (+972)' },
    { code: '+973', label: 'BH (+973)' },
    { code: '+974', label: 'QA (+974)' },
    { code: '+975', label: 'BT (+975)' },
    { code: '+976', label: 'MN (+976)' },
    { code: '+977', label: 'NP (+977)' },
    { code: '+998', label: 'UZ (+998)' }
  ];

  readonly SearchCountryField = SearchCountryField;
  readonly CountryISO = CountryISO;
  readonly PhoneNumberFormat = PhoneNumberFormat;
  readonly preferredCountries: CountryISO[] = [
    CountryISO.India,
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
    CountryISO.UnitedArabEmirates
  ];

  isOpen = false;
  isLoginView = false;
  fullName = '';
  email = '';
  selectedCountryCode = '+91';
  mobile = '';
  mobileNumber: any = null;
  password = '';
  confirmPassword = '';
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly authPopupService: AuthPopupService,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.authPopupService.isOpen$.subscribe((isOpen) => {
        this.isOpen = isOpen;
        document.body.style.overflow = isOpen ? 'hidden' : '';

        if (isOpen) {
          // Always open this global modal in signup mode so mobile field is visible.
          this.isLoginView = false;
          this.resetMessages();
        }
      })
    );
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    this.subscriptions.unsubscribe();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen) {
      this.close();
    }
  }

  close(): void {
    this.authPopupService.close();
  }

  showSignup(): void {
    this.isLoginView = false;
    this.resetMessages();
  }

  showLogin(): void {
    this.isLoginView = true;
    this.resetMessages();
  }

  continueWithGoogle(): void {
    this.resetMessages();
    this.successMessage = 'Google sign-in button is ready for frontend wiring.';
  }

  submit(): void {
    if (this.isLoginView) {
      this.login();
      return;
    }

    this.resetMessages();

    if (!this.fullName.trim()) {
      this.errorMessage = 'Full name is required.';
      return;
    }

    if (!this.email.trim()) {
      this.errorMessage = 'Email is required.';
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Enter a valid email address.';
      return;
    }

    const normalizedMobile = this.getNormalizedMobile();

    if (!normalizedMobile) {
      this.errorMessage = 'Mobile number is required.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.isSubmitting = true;

    this.http.post<any>(`${this.apiUrl}/signup`, {
      name: this.fullName.trim(),
      email: this.email.trim(),
      phone: normalizedMobile,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response?.token) {
          this.authSessionService.setSession(response.token, response.user || {
            name: this.fullName.trim(),
            email: this.email.trim()
          });
        }
        this.successMessage = 'Account created successfully.';
        this.password = '';
        this.confirmPassword = '';
        this.mobile = '';
        this.mobileNumber = null;
        this.close();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error?.error?.error || 'Signup failed. Please try again.';
      }
    });
  }

  private login(): void {
    this.resetMessages();

    if (!this.email.trim()) {
      this.errorMessage = 'Email is required.';
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Enter a valid email address.';
      return;
    }

    if (!this.password) {
      this.errorMessage = 'Password is required.';
      return;
    }

    this.isSubmitting = true;

    this.http.post<any>(`${this.apiUrl}/user-login`, {
      email: this.email.trim(),
      password: this.password
    }).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response?.token) {
          this.authSessionService.setSession(response.token, response.user || {
            name: this.email.trim().split('@')[0],
            email: this.email.trim()
          });
        }
        this.successMessage = 'Logged in successfully.';
        this.close();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error?.error?.error || 'Login failed. Please try again.';
      }
    });
  }

  private resetMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  private getNormalizedMobile(): string {
    if (this.mobileNumber?.e164Number) {
      return this.mobileNumber.e164Number;
    }

    const digitsOnly = String(this.mobile || '').replace(/\D/g, '');
    if (!digitsOnly) {
      return '';
    }

    const codeDigits = this.selectedCountryCode.replace('+', '');
    if (digitsOnly.startsWith(codeDigits)) {
      return `+${digitsOnly}`;
    }

    return `${this.selectedCountryCode}${digitsOnly}`;
  }
}
