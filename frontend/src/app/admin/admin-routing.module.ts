import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminProductListComponent } from './product-list/product-list.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { UsersComponent } from './users/users.component';
import { SliderSettingsComponent } from './slider-settings/slider-settings.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'add-product', pathMatch: 'full' },
      { path: 'add-product', component: AdminComponent },
      { path: 'products', component: AdminProductListComponent },
      { path: 'users', component: UsersComponent },
      { path: 'slider-settings', component: SliderSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
