import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AuthSignupPopupComponent } from './auth-signup-popup/auth-signup-popup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayCurrencyPipe } from './pipes/display-currency.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthSignupPopupComponent,
    DisplayCurrencyPipe
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
    AuthSignupPopupComponent,
    DisplayCurrencyPipe
  ]
})
export class SharedModule { }
