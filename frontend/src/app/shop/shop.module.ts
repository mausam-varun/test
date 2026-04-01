import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class ShopModule { }
