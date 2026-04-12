import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    AdminSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
