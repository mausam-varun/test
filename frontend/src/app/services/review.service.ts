import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API_ENDPOINTS } from '../config/app-config';

export interface RatingEligibilityResponse {
  eligible: boolean;
  alreadyRated: boolean;
  showPopup: boolean;
  orderId?: number;
  orderNumber?: string;
  deliveredAt?: string | null;
  eligibleAt?: string | null;
  delayHours?: number;
}

export interface PendingReviewOrder {
  id: number;
  orderNumber: string;
  customerName: string;
  deliveredAt: string | null;
  eligibleAt: string | null;
  totalAmount: number;
}

export interface PendingReviewResponse {
  eligible: boolean;
  alreadyRated: boolean;
  showPopup: boolean;
  order: PendingReviewOrder | null;
}

export interface SubmitReviewPayload {
  order_id: number;
  overall_rating: number;
  material_quality?: number | null;
  design_rating?: number | null;
  craftsmanship?: number | null;
  comfort?: number | null;
  value_for_money?: number | null;
  emotion: 'Loved it' | 'Happy' | 'Okay' | 'Disappointed';
  review_text?: string;
  images?: string[];
}

export interface SubmitReviewResponse {
  message: string;
  orderId: number;
  orderNumber: string;
  coupon?: {
    code: string;
    reward: string;
    description: string;
    expiresInDays: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private readonly remindPrefix = 'rating_popup_remind_until_';
  private readonly previewPopupSubject = new Subject<void>();

  readonly previewPopup$ = this.previewPopupSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  getPendingReview(): Observable<PendingReviewResponse> {
    return this.http.get<PendingReviewResponse>(API_ENDPOINTS.pendingReview, this.getAuthOptions());
  }

  getRatingEligibility(orderId: number | string): Observable<RatingEligibilityResponse> {
    return this.http.get<RatingEligibilityResponse>(
      API_ENDPOINTS.orderRatingEligibility(orderId),
      this.getAuthOptions()
    );
  }

  uploadImages(files: File[]): Observable<{ images: string[] }> {
    const formData = new FormData();
    files.slice(0, 4).forEach((file) => formData.append('images', file));
    return this.http.post<{ images: string[] }>(API_ENDPOINTS.reviewUploads, formData, this.getAuthOptions());
  }

  submitReview(payload: SubmitReviewPayload): Observable<SubmitReviewResponse> {
    return this.http.post<SubmitReviewResponse>(API_ENDPOINTS.reviews, payload, this.getAuthOptions());
  }

  setRemindLater(orderId: number | string, hours = 6): void {
    try {
      const remindUntil = Date.now() + (hours * 60 * 60 * 1000);
      localStorage.setItem(`${this.remindPrefix}${orderId}`, String(remindUntil));
    } catch {
      // Ignore storage failures.
    }
  }

  shouldSuppressPopup(orderId: number | string): boolean {
    try {
      const raw = localStorage.getItem(`${this.remindPrefix}${orderId}`);
      const remindUntil = Number(raw);
      return Number.isFinite(remindUntil) && remindUntil > Date.now();
    } catch {
      return false;
    }
  }

  clearReminder(orderId: number | string): void {
    try {
      localStorage.removeItem(`${this.remindPrefix}${orderId}`);
    } catch {
      // Ignore storage failures.
    }
  }

  triggerPreviewPopup(): void {
    this.previewPopupSubject.next();
  }

  private getAuthOptions(): { headers?: HttpHeaders } {
    const token = this.readUserToken();
    return token
      ? { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) }
      : {};
  }

  private readUserToken(): string {
    try {
      return localStorage.getItem('user_token') || '';
    } catch {
      return '';
    }
  }
}
