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
      { path: 'settings', component: AdminSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
