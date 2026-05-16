import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProductListComponent } from './product-list/product-list.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { UsersComponent } from './users/users.component';
import { SliderSettingsComponent } from './slider-settings/slider-settings.component';
import { HomeCategoryControlComponent } from './home-category-control/home-category-control.component';
import { QueueMonitorComponent } from './queue-monitor/queue-monitor.component';
import { CurrencySettingsComponent } from './currency-settings/currency-settings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AdminSettingsComponent } from './settings/settings.component';
import { AdminBannerManagementComponent } from './admin-banner-management/admin-banner-management.component';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { ProductPerformanceComponent } from './product-performance/product-performance.component';
import { CustomerInsightsComponent } from './customer-insights/customer-insights.component';
import { InventoryReportComponent } from './inventory-report/inventory-report.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { VectorDataComponent } from './vector-data/vector-data.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductListComponent,
    AdminLayoutComponent,
    UsersComponent,
    SliderSettingsComponent,
    HomeCategoryControlComponent,
    QueueMonitorComponent,
    ReviewsComponent,
    CurrencySettingsComponent,
    AdminSettingsComponent,
    AdminBannerManagementComponent,
    SalesOverviewComponent,
    ProductPerformanceComponent,
    CustomerInsightsComponent,
    InventoryReportComponent,
    OrderManagementComponent,
    VectorDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
