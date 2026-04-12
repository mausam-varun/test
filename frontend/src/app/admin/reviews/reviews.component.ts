import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../config/app-config';

interface AdminReviewSummary {
  totalReviews: number;
  averageRating: number;
  lowRatings: number;
  supportFollowUps: number;
}

interface AdminReviewItem {
  id: number;
  order_id: number;
  order_number: string;
  customer_name: string;
  customer_email: string;
  user_name: string | null;
  overall_rating: number;
  material_quality: number | null;
  design_rating: number | null;
  craftsmanship: number | null;
  comfort: number | null;
  value_for_money: number | null;
  emotion: string;
  review_text: string | null;
  images: string[];
  support_follow_up_required: boolean;
  created_at: string;
  delivered_at: string | null;
  total_amount: number;
}

@Component({
  selector: 'app-admin-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  private readonly reviewsUrl = `${APP_CONFIG.API_URL}/admin/reviews`;

  summary: AdminReviewSummary = {
    totalReviews: 0,
    averageRating: 0,
    lowRatings: 0,
    supportFollowUps: 0
  };

  reviews: AdminReviewItem[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  searchTerm = '';
  selectedRatingFilter = 'all';
  supportOnly = false;
  updatingReviewId: number | null = null;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    const token = this.getAdminToken();
    if (!token) {
      this.errorMessage = 'Admin token not found. Please log in again.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const params = new URLSearchParams();
    if (this.selectedRatingFilter !== 'all') {
      params.set('rating', this.selectedRatingFilter);
    }
    if (this.supportOnly) {
      params.set('supportOnly', 'true');
    }
    params.set('limit', '150');

    const url = params.toString() ? `${this.reviewsUrl}?${params.toString()}` : this.reviewsUrl;

    this.http.get<{ summary: AdminReviewSummary; reviews: AdminReviewItem[] }>(url, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (response) => {
        this.summary = response?.summary || this.summary;
        this.reviews = response?.reviews || [];
        this.isLoading = false;
      },
      error: (error: { error?: { error?: string; message?: string } }) => {
        this.errorMessage = error?.error?.error || error?.error?.message || 'Failed to load review insights.';
        this.isLoading = false;
      }
    });
  }

  onFilterChange(): void {
    this.loadReviews();
  }

  toggleSupport(review: AdminReviewItem): void {
    const token = this.getAdminToken();
    if (!token || this.updatingReviewId === review.id) {
      return;
    }

    this.updatingReviewId = review.id;
    const nextValue = !review.support_follow_up_required;

    this.http.patch<{ message: string; review: AdminReviewItem }>(
      `${this.reviewsUrl}/${review.id}/support`,
      { supportRequired: nextValue },
      { headers: { Authorization: `Bearer ${token}` } }
    ).subscribe({
      next: (response) => {
        review.support_follow_up_required = response.review.support_follow_up_required;
        this.successMessage = response.message;
        this.updatingReviewId = null;
        this.loadReviews();
        setTimeout(() => { this.successMessage = ''; }, 2500);
      },
      error: (error: { error?: { error?: string; message?: string } }) => {
        this.errorMessage = error?.error?.error || error?.error?.message || 'Could not update support follow-up.';
        this.updatingReviewId = null;
      }
    });
  }

  get filteredReviews(): AdminReviewItem[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.reviews;
    }

    return this.reviews.filter((review) => {
      const haystack = [
        review.order_number,
        review.customer_name,
        review.customer_email,
        review.user_name,
        review.emotion,
        review.review_text
      ].join(' ').toLowerCase();

      return haystack.includes(term);
    });
  }

  buildStars(value: number): string {
    const safeValue = Math.max(0, Math.min(5, Math.round(Number(value) || 0)));
    return '★'.repeat(safeValue) + '☆'.repeat(5 - safeValue);
  }

  formatDate(value: string | null): string {
    if (!value) {
      return '—';
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? '—'
      : `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }

  private getAdminToken(): string | null {
    try {
      const directToken = localStorage.getItem('admin_token');
      if (directToken) {
        return directToken;
      }

      const raw = localStorage.getItem('admin_user');
      if (!raw) {
        return null;
      }

      const parsed = JSON.parse(raw) as { id?: number | string };
      const id = Number(parsed?.id);
      return Number.isInteger(id) && id > 0 ? `admin-token-${id}` : null;
    } catch {
      return null;
    }
  }
}
