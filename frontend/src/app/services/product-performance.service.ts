import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APP_CONFIG } from '../config/app-config';

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProductPerformance {
  id: number;
  title: string;
  totalQuantity: number;
  totalRevenue: number;
}

export interface LowSellingProduct {
  id: number;
  title: string;
  totalQuantity: number;
  totalRevenue: number;
}

export interface InventoryItem {
  id: number;
  title: string;
  stock: number;
}

export interface InventoryStatus {
  outOfStock: InventoryItem[];
  lowStock: InventoryItem[];
  threshold: number;
}

export type DateFilterType = '7days' | '30days' | 'custom';

// ─── Service ──────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class ProductPerformanceService {

  private readonly baseUrl = `${APP_CONFIG.API_URL}/dashboard/product`;

  constructor(private readonly http: HttpClient) {}

  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('admin_token') ?? '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  /**
   * GET /api/dashboard/product/top-selling?days=30
   */
  getTopSellingProducts(days: number = 30): Observable<ProductPerformance[]> {
    const params = new HttpParams().set('days', days.toString());
    return this.http
      .get<ProductPerformance[]>(`${this.baseUrl}/top-selling`, {
        headers: this.authHeaders(),
        params
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * GET /api/dashboard/product/low-selling?days=30
   */
  getLowSellingProducts(days: number = 30): Observable<LowSellingProduct[]> {
    const params = new HttpParams().set('days', days.toString());
    return this.http
      .get<LowSellingProduct[]>(`${this.baseUrl}/low-selling`, {
        headers: this.authHeaders(),
        params
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * GET /api/dashboard/product/revenue?days=30
   */
  getProductRevenue(days: number = 30): Observable<ProductPerformance[]> {
    const params = new HttpParams().set('days', days.toString());
    return this.http
      .get<ProductPerformance[]>(`${this.baseUrl}/revenue`, {
        headers: this.authHeaders(),
        params
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * GET /api/dashboard/product/inventory-status
   */
  getInventoryStatus(): Observable<InventoryStatus> {
    return this.http
      .get<InventoryStatus>(`${this.baseUrl}/inventory-status`, {
        headers: this.authHeaders()
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
