import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APP_CONFIG } from '../config/app-config';

// ─── Response interfaces ──────────────────────────────────────────────────────

export interface SalesSummary {
  todayRevenue: number;
  monthlyRevenue: number;
  totalOrders: number;
  aov: number;
}

export interface DailyTrendPoint {
  date: string;    // 'YYYY-MM-DD'
  revenue: number;
}

export interface MonthlyTrendPoint {
  month: string;   // 'Jan', 'Feb', ...
  revenue: number;
}

export type TrendPoint = DailyTrendPoint | MonthlyTrendPoint;
export type TrendType = 'daily' | 'monthly';

// ─── Service ─────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class DashboardService {

  private readonly baseUrl = `${APP_CONFIG.API_URL}/dashboard`;

  constructor(private readonly http: HttpClient) {}

  /** Build Authorization header from localStorage token */
  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('admin_token') ?? '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  /**
   * GET /api/dashboard/sales-summary
   * Returns today's revenue, monthly revenue, total orders, and AOV.
   */
  getSalesSummary(): Observable<SalesSummary> {
    return this.http
      .get<SalesSummary>(`${this.baseUrl}/sales-summary`, {
        headers: this.authHeaders()
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * GET /api/dashboard/sales-trend?type=daily|monthly
   * Returns grouped revenue trend data.
   */
  getSalesTrend(type: TrendType): Observable<TrendPoint[]> {
    return this.http
      .get<TrendPoint[]>(`${this.baseUrl}/sales-trend`, {
        headers: this.authHeaders(),
        params: { type }
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    const message =
      error?.error?.error ??
      error?.message ??
      'An unexpected error occurred';
    return throwError(() => new Error(message));
  }
}
