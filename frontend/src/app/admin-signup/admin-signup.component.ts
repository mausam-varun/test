import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../config/app-config';

type AdminUserType = 'admin' | 'super_admin' | 'partner';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent {
  private readonly apiUrl = APP_CONFIG.AUTH_API_URL;

  email = '';
  password = '';
  confirmPassword = '';
  userType: AdminUserType = 'admin';
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  readonly userTypeOptions: { value: AdminUserType; label: string }[] = [
    { value: 'admin', label: 'Admin' },
    { value: 'super_admin', label: 'Super Admin' },
    { value: 'partner', label: 'Partner' }
  ];

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post(`${this.apiUrl}/register`, {
      email: this.email.trim(),
      password: this.password,
      userType: this.userType
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Account created successfully. Redirecting to admin login...';
        setTimeout(() => {
          this.router.navigate(['/admin/login']);
        }, 1200);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Could not create admin account.';
      }
    });
  }

  clearError(): void {
    this.errorMessage = '';
  }

  private validateForm(): boolean {
    const trimmedEmail = this.email.trim();

    if (!trimmedEmail) {
      this.errorMessage = 'Email is required';
      return false;
    }

    if (!this.isValidEmail(trimmedEmail)) {
      this.errorMessage = 'Invalid email format';
      return false;
    }

    if (!this.password) {
      this.errorMessage = 'Password is required';
      return false;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters';
      return false;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return false;
    }

    return true;
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}