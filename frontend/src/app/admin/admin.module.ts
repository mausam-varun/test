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

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductListComponent,
    AdminLayoutComponent,
    UsersComponent,
    SliderSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
