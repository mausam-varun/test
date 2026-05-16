import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChartConfiguration } from 'chart.js';
import { CustomerDashboardService, CustomerSummary, NewVsReturning, TopCustomer } from '../../services/customer-dashboard.service';

type DateFilterType = '7days' | '30days' | 'custom';

@Component({
  selector: 'app-customer-insights',
  templateUrl: './customer-insights.component.html',
  styleUrls: ['./customer-insights.component.scss']
})
export class CustomerInsightsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Date filter
  selectedDateFilter: DateFilterType = '30days';
  daysMapping: Record<DateFilterType, number> = {
    '7days': 7,
    '30days': 30,
    'custom': 30
  };

  // Data
  customerSummary: CustomerSummary | null = null;
  newVsReturning: NewVsReturning | null = null;
  topCustomers: TopCustomer[] = [];

  // Loading states
  isLoadingSummary = false;
  isLoadingChart = false;
  isLoadingTable = false;

  // Error states
  errorSummary: string | null = null;
  errorChart: string | null = null;
  errorTable: string | null = null;

  // Chart
  newVsReturningChartConfig: ChartConfiguration<'pie'> | null = null;

  constructor(private customerDashboardService: CustomerDashboardService) {}

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
    this.fetchCustomerSummary();
    this.fetchNewVsReturning();
    this.fetchTopCustomers();
  }

  fetchCustomerSummary(): void {
    this.isLoadingSummary = true;
    this.errorSummary = null;

    this.customerDashboardService
      .getCustomerSummary(this.daysMapping[this.selectedDateFilter])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.customerSummary = data;
          this.isLoadingSummary = false;
        },
        error: (err) => {
          this.errorSummary = 'Failed to load customer summary';
          this.isLoadingSummary = false;
          console.error('Error fetching customer summary:', err);
        }
      });
  }

  fetchNewVsReturning(): void {
    this.isLoadingChart = true;
    this.errorChart = null;

    this.customerDashboardService
      .getNewVsReturning(this.daysMapping[this.selectedDateFilter])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.newVsReturning = data;
          this.buildNewVsReturningChart();
          this.isLoadingChart = false;
        },
        error: (err) => {
          this.errorChart = 'Failed to load customer breakdown';
          this.isLoadingChart = false;
          console.error('Error fetching new vs returning:', err);
        }
      });
  }

  fetchTopCustomers(): void {
    this.isLoadingTable = true;
    this.errorTable = null;

    this.customerDashboardService
      .getTopCustomers(this.daysMapping[this.selectedDateFilter])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.topCustomers = data || [];
          this.isLoadingTable = false;
        },
        error: (err) => {
          this.errorTable = 'Failed to load top customers';
          this.isLoadingTable = false;
          console.error('Error fetching top customers:', err);
        }
      });
  }

  buildNewVsReturningChart(): void {
    if (!this.newVsReturning) return;

    const { newCustomers, returningCustomers } = this.newVsReturning;
    const total = newCustomers + returningCustomers;

    this.newVsReturningChartConfig = {
      type: 'pie',
      data: {
        labels: ['New Customers', 'Returning Customers'],
        datasets: [
          {
            data: [newCustomers, returningCustomers],
            backgroundColor: ['#6366f1', '#10b981'],
            borderColor: ['#ffffff', '#ffffff'],
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
                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
                return `${ctx.label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      }
    };
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  retryFetch(section: 'summary' | 'chart' | 'table'): void {
    if (section === 'summary') this.fetchCustomerSummary();
    if (section === 'chart') this.fetchNewVsReturning();
    if (section === 'table') this.fetchTopCustomers();
  }
}
