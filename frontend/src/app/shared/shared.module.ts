import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AuthSignupPopupComponent } from './auth-signup-popup/auth-signup-popup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthSignupPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxIntlTelInputModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AuthSignupPopupComponent
  ]
})
export class SharedModule { }
