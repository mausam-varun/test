import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthSessionService, SessionUser } from '../services/auth-session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private readonly apiUrl = 'http://localhost:5001/api/auth';
  private readonly subscriptions = new Subscription();

  user: SessionUser | null = null;

  name = '';
  email = '';
  phone = '';

  isSaving = false;
  isVerifyingEmail = false;
  isRequestingVerification = false;
  verificationCodeSent = false;
  emailVerified = false;
  verificationCode = '';
  pendingPayload: { name: string; email: string; phone: string } | null = null;
  successMessage = '';
  errorMessage = '';

  get isEmailChanged(): boolean {
    return this.email.trim().toLowerCase() !== String(this.user?.email || '').trim().toLowerCase();
  }

  get isEmailValid(): boolean {
    return this.isValidEmail(this.email);
  }

  get showVerifyBtn(): boolean {
    return this.isEmailChanged && this.isEmailValid && !this.verificationCodeSent && !this.emailVerified;
  }

  get showEmailFormatError(): boolean {
    return this.isEmailChanged && this.email.length > 0 && !this.isEmailValid;
  }

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly authSessionService: AuthSessionService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.authSessionService.user$.subscribe((user) => {
        this.user = user;

        if (!user) {
          this.router.navigate(['/']);
          return;
        }

        this.name = user.name || '';
        this.email = user.email || '';
        this.phone = user.phone || '';
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onNameInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.name = target?.value || '';
  }

  onEmailInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.email = target?.value || '';
    // Reset verification state whenever the email field changes
    this.verificationCodeSent = false;
    this.emailVerified = false;
    this.verificationCode = '';
    this.pendingPayload = null;
    this.resetMessages();
  }

  onPhoneInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.phone = target?.value || '';
  }

  onVerificationCodeInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.verificationCode = target?.value || '';
  }

  submit(): void {
    this.resetMessages();

    if (!this.user?.id) {
      this.errorMessage = 'User session not found. Please login again.';
      return;
    }

    if (!this.name.trim()) {
      this.errorMessage = 'Name is required.';
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

    const payload = {
      name: this.name.trim(),
      email: this.email.trim(),
      phone: this.phone.trim()
    };

    const currentEmail = String(this.user.email || '').trim().toLowerCase();
    const nextEmail = String(payload.email || '').trim().toLowerCase();

    if (nextEmail && currentEmail && nextEmail !== currentEmail && !this.emailVerified) {
      this.errorMessage = 'Please verify your new email address before saving.';
      return;
    }

    this.isSaving = true;

    this.http.put<any>(`${this.apiUrl}/profile/${this.user.id}`, {
      name: payload.name,
      email: payload.email,
      phone: payload.phone
    }).subscribe({
      next: (response) => {
        this.isSaving = false;

        const updatedUser = response?.user || {
          id: this.user?.id,
          name: this.name.trim(),
          email: this.email.trim(),
          phone: this.phone.trim()
        };

        this.authSessionService.updateProfile(updatedUser);
        this.successMessage = 'Profile updated successfully.';
      },
      error: (error) => {
        this.isSaving = false;
        this.errorMessage = error?.error?.error || 'Failed to update profile.';
      }
    });
  }

  verifyAndUpdateEmail(): void {
    this.resetMessages();

    if (!this.user?.id) {
      this.errorMessage = 'User session not found. Please login again.';
      return;
    }

    if (!this.pendingPayload) {
      this.errorMessage = 'No pending email update. Request verification first.';
      return;
    }

    if (!this.verificationCode.trim()) {
      this.errorMessage = 'Enter the verification code sent to your new email.';
      return;
    }

    this.isVerifyingEmail = true;

    this.http.post<any>(`${this.apiUrl}/profile/${this.user.id}/verify-email-update`, {
      code: this.verificationCode.trim()
    }).subscribe({
      next: (response) => {
        this.isVerifyingEmail = false;

        const updatedUser = response?.user || {
          id: this.user?.id,
          name: this.pendingPayload?.name,
          email: this.pendingPayload?.email,
          phone: this.pendingPayload?.phone
        };

        this.authSessionService.updateProfile(updatedUser);
        this.successMessage = response?.message || 'Email verified and profile updated successfully.';
        this.verificationCodeSent = false;
        this.emailVerified = true;
        this.pendingPayload = null;
        this.verificationCode = '';
      },
      error: (error) => {
        this.isVerifyingEmail = false;
        this.errorMessage = error?.error?.error || 'Verification failed. Please try again.';
      }
    });
  }

  requestVerificationFromBtn(): void {
    this.resetMessages();

    if (!this.name.trim()) {
      this.errorMessage = 'Please fill in your name before verifying email.';
      return;
    }

    const payload = {
      name: this.name.trim(),
      email: this.email.trim(),
      phone: this.phone.trim()
    };

    this.requestEmailVerification(payload);
  }

  private requestEmailVerification(payload: { name: string; email: string; phone: string }): void {
    if (!this.user?.id) {
      this.errorMessage = 'User session not found. Please login again.';
      return;
    }

    this.isRequestingVerification = true;

    this.http.post<any>(`${this.apiUrl}/profile/${this.user.id}/request-email-verification`, payload)
      .subscribe({
        next: (response) => {
          this.isRequestingVerification = false;
          this.verificationCodeSent = true;
          this.pendingPayload = payload;
          this.successMessage = response?.message || 'Verification code sent. Enter code to confirm email update.';
        },
        error: (error) => {
          this.isRequestingVerification = false;
          this.errorMessage = error?.error?.error || 'Failed to send verification code.';
        }
      });
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
  }

  private resetMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
