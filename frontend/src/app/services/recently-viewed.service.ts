import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APP_CONFIG } from '../config/app-config';
import { AuthSessionService } from './auth-session.service';

const LS_KEY = 'dc_recently_viewed'; // stores array of product IDs (most recent first)
const MAX_LOCAL = 20;

@Injectable({ providedIn: 'root' })
export class RecentlyViewedService {
  private readonly baseUrl = APP_CONFIG.API_URL;

  constructor(
    private readonly http: HttpClient,
    private readonly authSession: AuthSessionService
  ) {}

  /** Called when a user opens a product page */
  recordView(productId: number): void {
    // Always update localStorage (used as fallback / guest state)
    this.pushToLocalStorage(productId);

    // If logged in, also sync to backend (fire-and-forget)
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      this.http
        .post(`${this.baseUrl}/users/recently-viewed`, { product_id: productId }, { headers })
        .pipe(catchError(() => of(null)))
        .subscribe();
    }
  }

  /**
   * Fetch products to display in "Recent Products" section.
   * - Logged in  → backend API
   * - Guest      → localStorage IDs → products/by-ids API
   */
  getRecentProducts(limit: number = 10): Observable<any[]> {
    const token = this.getToken();

    if (token) {
      // Authenticated: fetch from server
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http
        .get<any[]>(`${this.baseUrl}/users/recently-viewed?limit=${limit}`, { headers })
        .pipe(catchError(() => of([])));
    }

    // Guest: read IDs from localStorage, then fetch product details
    const ids = this.getLocalStorageIds().slice(0, limit);
    if (ids.length === 0) {
      return of([]);
    }

    return this.http
      .get<any[]>(`${this.baseUrl}/products/by-ids?ids=${ids.join(',')}`)
      .pipe(catchError(() => of([])));
  }

  // ── Local storage helpers ──────────────────────────────────

  private pushToLocalStorage(productId: number): void {
    try {
      const ids = this.getLocalStorageIds().filter((id) => id !== productId);
      ids.unshift(productId);
      localStorage.setItem(LS_KEY, JSON.stringify(ids.slice(0, MAX_LOCAL)));
    } catch {
      // localStorage unavailable (private mode etc.) — silently ignore
    }
  }

  getLocalStorageIds(): number[] {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed)
        ? parsed.filter((n) => Number.isInteger(n) && n > 0)
        : [];
    } catch {
      return [];
    }
  }

  private getToken(): string {
    try {
      return localStorage.getItem('user_token') || '';
    } catch {
      return '';
    }
  }
}
