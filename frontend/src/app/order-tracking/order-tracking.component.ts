import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService, OrderTrackingResponse } from '../services/order.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss']
})
export class OrderTrackingComponent implements OnInit {
  orderNumber = '';
  searchInput = '';
  tracking: OrderTrackingResponse | null = null;
  isLoading = false;
  errorMessage = '';

  readonly statusSteps = ['placed', 'processing', 'shipped', 'delivered'];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const num = params.get('orderNumber');
      if (num) {
        this.orderNumber = num;
        this.searchInput = num;
        this.loadTracking(num);
      }
    });
  }

  search(): void {
    const trimmed = this.searchInput.trim();
    if (!trimmed) return;
    this.router.navigate(['/track-order', trimmed]);
  }

  loadTracking(orderNumber: string): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.tracking = null;

    this.orderService.getOrderTracking(orderNumber).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.tracking = data;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Order not found. Please check your order number.';
      }
    });
  }

  get currentStepIndex(): number {
    if (!this.tracking) return -1;
    return this.statusSteps.indexOf(this.tracking.order_status);
  }

  get statusLabel(): string {
    const map: Record<string, string> = {
      placed: 'Order Placed',
      processing: 'Processing & Assigned to Courier',
      shipped: 'Shipped',
      delivered: 'Delivered',
      cancelled: 'Cancelled'
    };
    return map[this.tracking?.order_status || ''] || (this.tracking?.order_status || '');
  }

  get liveActivities(): any[] {
    const acts = this.tracking?.live_tracking?.tracking_data?.shipment_track_activities;
    return Array.isArray(acts) ? acts : [];
  }
}
