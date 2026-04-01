import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../config/app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly apiUrl = APP_CONFIG.AUTH_API_URL;

  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  onSubmit(): void {
    if (!this.validateForm()) { return; }

    this.isLoading = true;
    this.errorMessage = '';

    this.http.post<any>(`${this.apiUrl}/login`, {
      email: this.email.trim(),
      password: this.password
    }).subscribe({
      next: (response) => {
        if (response.token) {
          // Store token in localStorage (in production, use httpOnly cookies)
          localStorage.setItem('admin_token', response.token);
          localStorage.setItem('admin_user', JSON.stringify(response.user));
          this.successMessage = 'Login successful. Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 1000);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Login failed. Please try again.';
      }
    });
  }

  private validateForm(): boolean {
    if (!this.email.trim()) {
      this.errorMessage = 'Email is required';
      return false;
    }
    if (!this.password) {
      this.errorMessage = 'Password is required';
      return false;
    }
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Invalid email format';
      return false;
    }
    return true;
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  clearError(): void {
    this.errorMessage = '';
  }
}
