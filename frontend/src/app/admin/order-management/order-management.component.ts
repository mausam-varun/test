import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChartConfiguration } from 'chart.js';
import { OrderManagementService, OrderSummary, Order } from '../../services/order-management.service';

type DateFilterType = '7days' | '30days' | 'custom';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Date filter
  selectedDateFilter: DateFilterType = '30days';
  daysMapping: Record<DateFilterType, number> = {
    '7days': 7,
    '30days': 30,
    'custom': 30
  };

  // Data
  summary: OrderSummary | null = null;
  recentOrders: Order[] = [];

  // Loading states
  isLoadingSummary = false;
  isLoadingChart = false;
  isLoadingTable = false;

  // Error states
  errorSummary: string | null = null;
  errorChart: string | null = null;
  errorTable: string | null = null;

  // Chart
  orderStatusChartConfig: ChartConfiguration<'doughnut'> | null = null;

  // Status colors
  statusColorMap: Record<string, { bg: string; badge: string }> = {
    pending: { bg: '#FCD34D', badge: '#FEF3C7' },
    shipped: { bg: '#60A5FA', badge: '#DBEAFE' },
    delivered: { bg: '#34D399', badge: '#D1FAE5' },
    cancelled: { bg: '#F87171', badge: '#FEE2E2' }
  };

  displayedColumns: string[] = ['id', 'customer_name', 'total_amount', 'status', 'created_at'];

  constructor(private orderManagementService: OrderManagementService) {}

  ngOnInit(): void {
    this.loadAllData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setDateFilter(filter: DateFilterType): void {
    this.selectedDateFilter = filter;
    this.loadAllData();
  }

  loadAllData(): void {
    this.fetchOrderSummary();
    this.fetchOrdersChart();
    this.fetchRecentOrders();
  }

  fetchOrderSummary(): void {
    this.isLoadingSummary = true;
    this.errorSummary = null;

    this.orderManagementService
      .getOrderSummary()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.summary = data;
          this.isLoadingSummary = false;
        },
        error: (err) => {
          this.errorSummary = 'Failed to load order summary';
          this.isLoadingSummary = false;
          console.error('Error fetching order summary:', err);
        }
      });
  }

  fetchOrdersChart(): void {
    this.isLoadingChart = true;
    this.errorChart = null;

    this.orderManagementService
      .getOrdersByStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.buildOrderStatusChart(data);
          this.isLoadingChart = false;
        },
        error: (err) => {
          this.errorChart = 'Failed to load order status chart';
          this.isLoadingChart = false;
          console.error('Error fetching orders by status:', err);
        }
      });
  }

  fetchRecentOrders(): void {
    this.isLoadingTable = true;
    this.errorTable = null;

    this.orderManagementService
      .getRecentOrders(this.daysMapping[this.selectedDateFilter])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.recentOrders = data || [];
          this.isLoadingTable = false;
        },
        error: (err) => {
          this.errorTable = 'Failed to load recent orders';
          this.isLoadingTable = false;
          console.error('Error fetching recent orders:', err);
        }
      });
  }

  buildOrderStatusChart(data: any[]): void {
    const labels = data.map(d => this.capitalizeStatus(d.status));
    const counts = data.map(d => d.count);
    const colors = data.map(d => this.statusColorMap[d.status]?.bg || '#CBD5E1');

    this.orderStatusChartConfig = {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data: counts,
            backgroundColor: colors,
            borderColor: '#ffffff',
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { size: 13, weight: 500 },
              padding: 15,
              color: '#475569'
            }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const value = ctx.parsed;
                const total = counts.reduce((a, b) => a + b, 0);
                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
                return `${ctx.label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      }
    };
  }

  capitalizeStatus(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  getStatusBadgeColor(status: string): string {
    return this.statusColorMap[status]?.badge || '#F1F5F9';
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  retryFetch(section: 'summary' | 'chart' | 'table'): void {
    if (section === 'summary') this.fetchOrderSummary();
    if (section === 'chart') this.fetchOrdersChart();
    if (section === 'table') this.fetchRecentOrders();
  }
}
