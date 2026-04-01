import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../config/app-config';

interface AdminUser {
  id: number;
  email: string;
  user_type: 'super_admin' | 'admin' | 'partner';
  created_at: string;
  last_login: string | null;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private readonly apiUrl = APP_CONFIG.AUTH_API_URL;

  users: AdminUser[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  confirmDeleteId: number | null = null;

  newUserEmail = '';
  newUserPassword = '';
  newUserType: 'super_admin' | 'admin' | 'partner' = 'admin';
  isCreating = false;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.get<AdminUser[]>(`${this.apiUrl}/users`).subscribe({
      next: (data) => {
        this.users = data || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load users.';
        this.isLoading = false;
      }
    });
  }

  createUser(): void {
    if (!this.newUserEmail.trim() || !this.newUserPassword) {
      this.errorMessage = 'Email and password are required';
      return;
    }

    this.isCreating = true;
    this.errorMessage = '';

    this.http.post<any>(`${this.apiUrl}/register`, {
      email: this.newUserEmail.trim(),
      password: this.newUserPassword,
      userType: this.newUserType
    }).subscribe({
      next: () => {
        this.successMessage = 'User created successfully';
        this.newUserEmail = '';
        this.newUserPassword = '';
        this.newUserType = 'admin';
        this.isCreating = false;
        this.loadUsers();
        setTimeout(() => { this.successMessage = ''; }, 3000);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Failed to create user';
        this.isCreating = false;
      }
    });
  }

  requestDelete(id: number): void {
    this.confirmDeleteId = id;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
  }

  confirmDelete(id: number): void {
    this.http.delete(`${this.apiUrl}/users/${id}`).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
        this.confirmDeleteId = null;
        this.successMessage = 'User deleted successfully';
        setTimeout(() => { this.successMessage = ''; }, 3000);
      },
      error: () => {
        this.errorMessage = 'Failed to delete user';
        this.confirmDeleteId = null;
      }
    });
  }

  formatDate(dateString: string | null): string {
    if (!dateString) { return 'Never'; }
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  clearError(): void {
    this.errorMessage = '';
  }
}
