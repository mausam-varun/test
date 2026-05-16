import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChartData, ChartOptions } from 'chart.js';
import {
  DashboardService,
  SalesSummary,
  TrendPoint,
  TrendType,
  DailyTrendPoint,
  MonthlyTrendPoint
} from '../../services/dashboard.service';

export interface KpiCard {
  title: string;
  value: string;
  subtitle: string;
  iconClass: string;
  colorClass: string;
}

@Component({
  selector: 'app-sales-overview',
  templateUrl: './sales-overview.component.html',
  styleUrls: ['./sales-overview.component.scss']
})
export class SalesOverviewComponent implements OnInit, OnDestroy {

  // ── State ──────────────────────────────────────────────────────────────────
  loadingKpi   = true;
  loadingChart = true;
  kpiError     = '';
  chartError   = '';

  summary: SalesSummary | null = null;
  trendType: TrendType = 'daily';
  trendPoints: TrendPoint[] = [];

  // ── Chart ──────────────────────────────────────────────────────────────────
  lineChartData: ChartData<'line'> = { labels: [], datasets: [] };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#94a3b8',
        bodyColor: '#f8fafc',
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (ctx) => `  ₹${(ctx.parsed.y ?? 0).toLocaleString('en-IN')}`
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8', font: { size: 11 } }
      },
      y: {
        grid: { color: '#f1f5f9' },
        beginAtZero: true,
        ticks: {
          color: '#94a3b8',
          font: { size: 11 },
          callback: (value) => `₹${(Number(value) / 1000).toFixed(0)}k`
        }
      }
    }
  };

  private readonly destroy$ = new Subject<void>();

  // ── KPI formatter ──────────────────────────────────────────────────────────
  private readonly inrFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchSummary();
    this.fetchTrend();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── KPI Cards ──────────────────────────────────────────────────────────────
  get kpiCards(): KpiCard[] {
    if (!this.summary) {
      return [
        { title: 'Revenue Today',      value: '—', subtitle: 'Paid orders today',           iconClass: 'icon-sun',    colorClass: 'kpi-amber'  },
        { title: 'Revenue This Month', value: '—', subtitle: 'Current calendar month',      iconClass: 'icon-trend',  colorClass: 'kpi-indigo' },
        { title: 'Orders This Month',  value: '—', subtitle: 'Paid orders',                 iconClass: 'icon-bag',    colorClass: 'kpi-teal'   },
        { title: 'Avg. Order Value',   value: '—', subtitle: 'Monthly revenue ÷ orders',    iconClass: 'icon-coin',   colorClass: 'kpi-rose'   }
      ];
    }

    const { todayRevenue, monthlyRevenue, totalOrders, aov } = this.summary;
    return [
      {
        title: 'Revenue Today',
        value: this.inrFormatter.format(todayRevenue),
        subtitle: 'Paid orders today',
        iconClass: 'icon-sun',
        colorClass: 'kpi-amber'
      },
      {
        title: 'Revenue This Month',
        value: this.inrFormatter.format(monthlyRevenue),
        subtitle: 'Current calendar month',
        iconClass: 'icon-trend',
        colorClass: 'kpi-indigo'
      },
      {
        title: 'Orders This Month',
        value: totalOrders.toLocaleString('en-IN'),
        subtitle: 'Paid orders',
        iconClass: 'icon-bag',
        colorClass: 'kpi-teal'
      },
      {
        title: 'Avg. Order Value',
        value: this.inrFormatter.format(aov),
        subtitle: 'Monthly revenue ÷ orders',
        iconClass: 'icon-coin',
        colorClass: 'kpi-rose'
      }
    ];
  }

  // ── Growth badge ───────────────────────────────────────────────────────────
  get growthPercent(): number | null {
    const revenues = this.trendPoints.map((p) => p.revenue);
    if (revenues.length < 2) return null;
    const prev = revenues[revenues.length - 2];
    const curr = revenues[revenues.length - 1];
    if (!prev) return null;
    return ((curr - prev) / prev) * 100;
  }

  get hasChartData(): boolean {
    return this.trendPoints.some((p) => p.revenue > 0);
  }

  // ── Toggle trend type ──────────────────────────────────────────────────────
  setTrendType(type: TrendType): void {
    if (this.trendType === type) return;
    this.trendType = type;
    this.fetchTrend();
  }

  // ── Retry handlers ─────────────────────────────────────────────────────────
  retryKpi(): void    { this.fetchSummary(); }
  retryChart(): void  { this.fetchTrend();   }

  // ── Data fetching ──────────────────────────────────────────────────────────
  private fetchSummary(): void {
    this.loadingKpi = true;
    this.kpiError   = '';

    this.dashboardService.getSalesSummary()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next:  (data) => { this.summary = data; this.loadingKpi = false; },
        error: (err)  => { this.kpiError = err.message; this.loadingKpi = false; }
      });
  }

  private fetchTrend(): void {
    this.loadingChart = true;
    this.chartError   = '';

    this.dashboardService.getSalesTrend(this.trendType)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.trendPoints = data;
          this.buildChartData(data);
          this.loadingChart = false;
        },
        error: (err) => {
          this.chartError = err.message;
          this.loadingChart = false;
        }
      });
  }

  private buildChartData(points: TrendPoint[]): void {
    const labels  = points.map((p) =>
      this.trendType === 'daily'
        ? (p as DailyTrendPoint).date.slice(5)        // 'MM-DD'
        : (p as MonthlyTrendPoint).month              // 'Jan 2026'
    );
    const revenues = points.map((p) => p.revenue);

    this.lineChartData = {
      labels,
      datasets: [
        {
          label: 'Revenue (₹)',
          data: revenues,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.08)',
          borderWidth: 2.5,
          pointBackgroundColor: '#6366f1',
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.4,
          fill: true
        }
      ]
    };
  }

  trackByTitle(_: number, card: KpiCard): string {
    return card.title;
  }
}
