import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'add-product', pathMatch: 'full' },
      { path: 'add-product', component: AdminComponent },
      { path: 'products', component: AdminProductListComponent },
      { path: 'users', component: UsersComponent },
      { path: 'slider-settings', component: SliderSettingsComponent },
      { path: 'home-category-control', component: HomeCategoryControlComponent },
      { path: 'ai-queue', component: QueueMonitorComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'currency-settings', component: CurrencySettingsComponent },
      { path: 'settings', component: AdminSettingsComponent },
      { path: 'manage-banners', component: AdminBannerManagementComponent },
      { path: 'sales-overview', component: SalesOverviewComponent },
      { path: 'product-performance', component: ProductPerformanceComponent },
      { path: 'customer-insights', component: CustomerInsightsComponent },
      { path: 'inventory-report', component: InventoryReportComponent },
      { path: 'order-management', component: OrderManagementComponent },
      { path: 'vector-data', component: VectorDataComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
