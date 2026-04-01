import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SessionUser {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {
  private readonly tokenStorageKey = 'user_token';
  private readonly profileStorageKey = 'user_profile';

  private readonly userSubject = new BehaviorSubject<SessionUser | null>(this.loadUserFromStorage());

  readonly user$ = this.userSubject.asObservable();

  getCurrentUser(): SessionUser | null {
    return this.userSubject.value;
  }

  isAuthenticated(): boolean {
    return Boolean(this.getToken() && this.userSubject.value);
  }

  setSession(token: string, user: unknown): void {
    const normalizedUser = this.normalizeUser(user);
    if (!token || !normalizedUser) {
      return;
    }

    this.saveToken(token);
    this.saveProfile(normalizedUser);
    this.userSubject.next(normalizedUser);
  }

  updateProfile(user: unknown): void {
    const normalizedUser = this.normalizeUser(user);
    if (!normalizedUser) {
      return;
    }

    this.saveProfile(normalizedUser);
    this.userSubject.next(normalizedUser);
  }

  clearSession(): void {
    this.removeItem(this.tokenStorageKey);
    this.removeItem(this.profileStorageKey);
    this.userSubject.next(null);
  }

  private getToken(): string {
    try {
      return localStorage.getItem(this.tokenStorageKey) || '';
    } catch {
      return '';
    }
  }

  private loadUserFromStorage(): SessionUser | null {
    try {
      const raw = localStorage.getItem(this.profileStorageKey);
      if (!raw) {
        return null;
      }

      const parsed = JSON.parse(raw);
      return this.normalizeUser(parsed);
    } catch {
      return null;
    }
  }

  private normalizeUser(user: unknown): SessionUser | null {
    const candidate = (user && typeof user === 'object') ? (user as Record<string, unknown>) : {};

    const id = typeof candidate['id'] === 'number' ? candidate['id'] : undefined;
    const email = typeof candidate['email'] === 'string' ? candidate['email'] : undefined;
    const phone = typeof candidate['phone'] === 'string' ? candidate['phone'] : undefined;
    const avatarUrl = [
      candidate['avatarUrl'],
      candidate['avatar_url'],
      candidate['profileImage'],
      candidate['profile_image']
    ].find((value) => typeof value === 'string' && String(value).trim().length > 0) as string | undefined;

    const rawName = [
      candidate['name'],
      candidate['fullName'],
      candidate['username'],
      email ? String(email).split('@')[0] : ''
    ].find((value) => typeof value === 'string' && String(value).trim().length > 0);

    if (!rawName || typeof rawName !== 'string') {
      return null;
    }

    return {
      id,
      name: rawName.trim(),
      email,
      phone,
      avatarUrl: avatarUrl ? avatarUrl.trim() : undefined
    };
  }

  private saveToken(token: string): void {
    try {
      localStorage.setItem(this.tokenStorageKey, token);
    } catch {
      // Ignore storage errors and keep in-memory state.
    }
  }

  private saveProfile(user: SessionUser): void {
    try {
      localStorage.setItem(this.profileStorageKey, JSON.stringify(user));
    } catch {
      // Ignore storage errors and keep in-memory state.
    }
  }

  private removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // Ignore storage errors and keep in-memory state.
    }
  }
}
