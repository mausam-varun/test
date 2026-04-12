import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthSessionService } from '../../services/auth-session.service';
import {
  PendingReviewOrder,
  ReviewService,
  SubmitReviewPayload,
  SubmitReviewResponse
} from '../../services/review.service';

type ReviewMetricKey = 'material_quality' | 'design_rating' | 'craftsmanship' | 'comfort' | 'value_for_money';

interface ReviewMetric {
  key: ReviewMetricKey;
  label: string;
}

@Component({
  selector: 'app-rating-popup',
  templateUrl: './rating-popup.component.html',
  styleUrls: ['./rating-popup.component.scss']
})
export class RatingPopupComponent implements OnInit, OnDestroy {
  readonly stars = [1, 2, 3, 4, 5];
  readonly emotions: Array<{ label: string; value: SubmitReviewPayload['emotion'] }> = [
    { label: '😍 Loved it', value: 'Loved it' },
    { label: '😊 Happy', value: 'Happy' },
    { label: '😐 Okay', value: 'Okay' },
    { label: '😕 Disappointed', value: 'Disappointed' }
  ];
  readonly detailedMetrics: ReviewMetric[] = [
    { key: 'material_quality', label: 'Material Quality' },
    { key: 'design_rating', label: 'Design & Aesthetic' },
    { key: 'craftsmanship', label: 'Craftsmanship' },
    { key: 'comfort', label: 'Comfort / Fit' },
    { key: 'value_for_money', label: 'Value for Money' }
  ];

  isOpen = false;
  isLoading = false;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  couponCode = '';
  pendingOrder: PendingReviewOrder | null = null;
  isPreviewMode = false;

  overallRating = 0;
  material_quality = 5;
  design_rating = 5;
  craftsmanship = 5;
  comfort = 5;
  value_for_money = 5;
  emotion: SubmitReviewPayload['emotion'] | '' = '';
  reviewText = '';
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly authSessionService: AuthSessionService,
    private readonly reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.authSessionService.user$.subscribe((user) => {
        if (!user) {
          this.close(true);
          return;
        }

        this.checkForPendingReview();
      })
    );

    this.subscriptions.add(
      this.reviewService.previewPopup$.subscribe(() => {
        this.pendingOrder = {
          id: -1,
          orderNumber: 'TEST-RATING-001',
          customerName: this.authSessionService.getCurrentUser()?.name || 'Test Customer',
          deliveredAt: new Date().toISOString(),
          eligibleAt: new Date().toISOString(),
          totalAmount: 1499
        };
        this.isPreviewMode = true;
        this.resetForm();
        this.isOpen = true;
      })
    );
  }

  ngOnDestroy(): void {
    this.revokeImagePreviews();
    this.subscriptions.unsubscribe();
  }

  get shouldShowDetailedMetrics(): boolean {
    return this.overallRating >= 3;
  }

  get isLowRating(): boolean {
    return this.overallRating > 0 && this.overallRating <= 2;
  }

  get canSubmit(): boolean {
    if (!this.pendingOrder || !this.overallRating || !this.emotion || this.isSubmitting) {
      return false;
    }

    if (this.isLowRating && !this.reviewText.trim()) {
      return false;
    }

    return true;
  }

  checkForPendingReview(): void {
    if (this.isLoading || this.isOpen) {
      return;
    }

    this.isLoading = true;
    this.subscriptions.add(
      this.reviewService.getPendingReview().subscribe({
        next: (response) => {
          this.isLoading = false;
          if (!response?.showPopup || !response.order) {
            return;
          }

          if (this.reviewService.shouldSuppressPopup(response.order.id)) {
            return;
          }

          this.isPreviewMode = false;
          this.pendingOrder = response.order;
          this.resetForm();
          this.isOpen = true;
        },
        error: () => {
          this.isLoading = false;
        }
      })
    );
  }

  selectOverallRating(star: number): void {
    this.overallRating = star;
    if (star >= 3 && !this.emotion) {
      this.emotion = 'Happy';
    }
  }

  setMetricValue(key: ReviewMetricKey, star: number): void {
    (this as unknown as Record<string, number>)[key] = star;
  }

  getMetricValue(key: ReviewMetricKey): number {
    return Number((this as unknown as Record<string, number>)[key] || 0);
  }

  selectEmotion(value: SubmitReviewPayload['emotion']): void {
    this.emotion = value;
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    const existingFiles = [...this.selectedFiles];
    const incomingFiles = Array.from(input?.files || []);
    const files = [...existingFiles, ...incomingFiles].slice(0, 4);

    this.revokeImagePreviews();
    this.selectedFiles = files;
    this.imagePreviews = files.map((file) => URL.createObjectURL(file));

    if (input) {
      input.value = '';
    }
  }

  removeSelectedImage(index: number): void {
    if (index < 0 || index >= this.selectedFiles.length) {
      return;
    }

    this.selectedFiles = this.selectedFiles.filter((_, fileIndex) => fileIndex !== index);
    this.revokeImagePreviews();
    this.imagePreviews = this.selectedFiles.map((file) => URL.createObjectURL(file));
  }

  remindLater(): void {
    if (this.pendingOrder && !this.isPreviewMode) {
      this.reviewService.setRemindLater(this.pendingOrder.id, 6);
    }

    this.close();
  }

  close(forceReset = false): void {
    this.isOpen = false;
    this.isPreviewMode = false;
    if (forceReset) {
      this.pendingOrder = null;
    }
    this.resetForm();
  }

  submit(): void {
    if (!this.pendingOrder || !this.canSubmit) {
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';
    this.couponCode = '';

    if (this.isPreviewMode) {
      this.successMessage = 'Preview mode only — this test submission is not saved to Admin Reviews. Use a delivered order for a real saved review.';
      setTimeout(() => this.close(true), 1800);
      return;
    }

    this.isSubmitting = true;

    const upload$ = this.selectedFiles.length
      ? this.reviewService.uploadImages(this.selectedFiles)
      : of({ images: [] as string[] });

    const payloadBase: Omit<SubmitReviewPayload, 'images'> = {
      order_id: this.pendingOrder.id,
      overall_rating: this.overallRating,
      material_quality: this.shouldShowDetailedMetrics ? this.material_quality : null,
      design_rating: this.shouldShowDetailedMetrics ? this.design_rating : null,
      craftsmanship: this.shouldShowDetailedMetrics ? this.craftsmanship : null,
      comfort: this.shouldShowDetailedMetrics ? this.comfort : null,
      value_for_money: this.shouldShowDetailedMetrics ? this.value_for_money : null,
      emotion: this.emotion || 'Happy',
      review_text: this.reviewText.trim()
    };

    this.subscriptions.add(
      upload$
        .pipe(
          switchMap((uploadResponse) => {
            const payload: SubmitReviewPayload = {
              ...payloadBase,
              images: uploadResponse.images || []
            };
            return this.reviewService.submitReview(payload);
          })
        )
        .subscribe({
          next: (response: SubmitReviewResponse) => {
            this.isSubmitting = false;
            this.successMessage = response.message || 'Thanks for rating your order!';
            this.couponCode = response.coupon?.code || '';
            this.reviewService.clearReminder(this.pendingOrder!.id);

            setTimeout(() => {
              this.pendingOrder = null;
              this.isOpen = false;
              this.resetForm();
            }, 1800);
          },
          error: (error) => {
            this.isSubmitting = false;
            this.errorMessage = error?.error?.error || error?.error?.message || 'Unable to submit your rating right now.';
          }
        })
    );
  }

  private resetForm(clearMessages = true): void {
    this.overallRating = 0;
    this.material_quality = 5;
    this.design_rating = 5;
    this.craftsmanship = 5;
    this.comfort = 5;
    this.value_for_money = 5;
    this.emotion = '';
    this.reviewText = '';
    this.selectedFiles = [];
    this.revokeImagePreviews();

    if (clearMessages) {
      this.errorMessage = '';
      this.successMessage = '';
      this.couponCode = '';
    }
  }

  private revokeImagePreviews(): void {
    this.imagePreviews.forEach((previewUrl) => URL.revokeObjectURL(previewUrl));
    this.imagePreviews = [];
  }
}
