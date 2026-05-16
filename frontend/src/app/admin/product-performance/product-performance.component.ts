import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  ProductPerformanceService,
  ProductPerformance,
  LowSellingProduct,
  InventoryStatus,
  DateFilterType
} from '../../services/product-performance.service';

@Component({
  selector: 'app-product-performance',
  templateUrl: './product-performance.component.html',
  styleUrls: ['./product-performance.component.scss']
})
export class ProductPerformanceComponent implements OnInit, OnDestroy {

  // ── Filter state ───────────────────────────────────────────────────────────
  selectedDateFilter: DateFilterType = '30days';
  daysMapping = { '7days': 7, '30days': 30, 'custom': 30 };

  // ── Top Selling Products ───────────────────────────────────────────────────
  topSellingLoading   = false;
  topSellingError     = '';
  topSellingProducts: ProductPerformance[] = [];
  topSellingColumns   = ['rank', 'productName', 'quantity', 'revenue'];

  // ── Low Selling Products ───────────────────────────────────────────────────
  lowSellingLoading   = false;
  lowSellingError     = '';
  lowSellingProducts: LowSellingProduct[] = [];
  lowSellingColumns   = ['rank', 'productName', 'quantity', 'revenue'];

  // ── Product Revenue ───────────────────────────────────────────────────────
  revenueLoading      = false;
  revenueError        = '';
  revenueChartData: any = { labels: [], datasets: [] };
  revenueChartOptions: any = {};

  // ── Inventory Status ───────────────────────────────────────────────────────
  inventoryLoading    = false;
  inventoryError      = '';
  inventoryStatus: InventoryStatus | null = null;
  outOfStockColumns   = ['productName', 'stock'];
  lowStockColumns     = ['productName', 'stock'];

  private readonly destroy$ = new Subject<void>();

  private readonly inrFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  constructor(private readonly service: ProductPerformanceService) {
    this.setupRevenueChartOptions();
  }

  ngOnInit(): void {
    this.loadAllData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Public methods ─────────────────────────────────────────────────────────

  setDateFilter(filter: DateFilterType): void {
    if (this.selectedDateFilter === filter) return;
    this.selectedDateFilter = filter;
    this.loadAllData();
  }

  retryTopSelling(): void    { this.fetchTopSelling(); }
  retryLowSelling(): void    { this.fetchLowSelling(); }
  retryRevenue(): void       { this.fetchRevenue(); }
  retryInventory(): void     { this.fetchInventory(); }

  formatCurrency(value: number): string {
    return this.inrFormatter.format(value);
  }

  // ── Getters ────────────────────────────────────────────────────────────────

  get hasTopSelling(): boolean {
    return this.topSellingProducts.length > 0;
  }

  get hasLowSelling(): boolean {
    return this.lowSellingProducts.length > 0;
  }

  get hasRevenue(): boolean {
    return this.revenueChartData.datasets.length > 0 &&
           this.revenueChartData.datasets[0].data.length > 0;
  }

  get hasOutOfStock(): boolean {
    return (this.inventoryStatus?.outOfStock.length ?? 0) > 0;
  }

  get hasLowStock(): boolean {
    return (this.inventoryStatus?.lowStock.length ?? 0) > 0;
  }

  // ── Data loading ───────────────────────────────────────────────────────────

  private loadAllData(): void {
    this.fetchTopSelling();
    this.fetchLowSelling();
    this.fetchRevenue();
    this.fetchInventory();
  }

  private fetchTopSelling(): void {
    this.topSellingLoading = true;
    this.topSellingError   = '';

    const days = this.daysMapping[this.selectedDateFilter];
    this.service.getTopSellingProducts(days)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.topSellingProducts = data;
          this.topSellingLoading = false;
        },
        error: (err) => {
          this.topSellingError = err.message;
          this.topSellingLoading = false;
        }
      });
  }

  private fetchLowSelling(): void {
    this.lowSellingLoading = true;
    this.lowSellingError   = '';

    const days = this.daysMapping[this.selectedDateFilter];
    this.service.getLowSellingProducts(days)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.lowSellingProducts = data;
          this.lowSellingLoading = false;
        },
        error: (err) => {
          this.lowSellingError = err.message;
          this.lowSellingLoading = false;
        }
      });
  }

  private fetchRevenue(): void {
    this.revenueLoading = true;
    this.revenueError   = '';

    const days = this.daysMapping[this.selectedDateFilter];
    this.service.getProductRevenue(days)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.buildRevenueChart(data);
          this.revenueLoading = false;
        },
        error: (err) => {
          this.revenueError = err.message;
          this.revenueLoading = false;
        }
      });
  }

  private fetchInventory(): void {
    this.inventoryLoading = true;
    this.inventoryError   = '';

    this.service.getInventoryStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.inventoryStatus = data;
          this.inventoryLoading = false;
        },
        error: (err) => {
          this.inventoryError = err.message;
          this.inventoryLoading = false;
        }
      });
  }

  // ── Chart building ────────────────────────────────────────────────────────

  private buildRevenueChart(products: ProductPerformance[]): void {
    const labels  = products.map((p) => p.title);
    const revenues = products.map((p) => p.totalRevenue);

    this.revenueChartData = {
      labels,
      datasets: [
        {
          label: 'Revenue (₹)',
          data: revenues,
          backgroundColor: [
            '#6366f1', '#ec4899', '#8b5cf6', '#0ea5e9',
            '#10b981', '#f59e0b', '#ef4444', '#06b6d4',
            '#14b8a6', '#f97316'
          ],
          borderColor: 'rgba(0,0,0,0.1)',
          borderWidth: 1,
          borderRadius: 6
        }
      ]
    };
  }

  private setupRevenueChartOptions(): void {
    this.revenueChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y' as const,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1e293b',
          titleColor: '#94a3b8',
          bodyColor: '#f8fafc',
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (ctx: any) => `  ₹${(ctx.parsed.x ?? 0).toLocaleString('en-IN')}`
          }
        }
      },
      scales: {
        x: {
          grid: { color: '#f1f5f9' },
          ticks: {
            color: '#94a3b8',
            font: { size: 11 },
            callback: (value: any) => `₹${(Number(value) / 1000).toFixed(0)}k`
          },
          beginAtZero: true
        },
        y: {
          grid: { display: false },
          ticks: { color: '#94a3b8', font: { size: 11 } }
        }
      }
    };
  }

  trackByTitle(_: number, item: any): string {
    return item.title;
  }

  trackByRank(index: number): number {
    return index;
  }
}
