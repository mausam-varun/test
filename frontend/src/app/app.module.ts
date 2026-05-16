import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home3Component } from './home/home3.component';
import { HomeDispatcherComponent } from './home/home-dispatcher.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './shop/shop.module';
import { ContactModule } from './contact/contact.module';
import { LoginComponent } from './login/login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { HeroComponent } from './home/components/hero/hero.component';
import { CategoryCardComponent } from './home/components/category-card/category-card.component';
import { ProductCardComponent } from './home/components/product-card/product-card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { AiMatcherPageComponent } from './pages/ai-matcher-page/ai-matcher-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home3Component,
    HomeDispatcherComponent,
    AboutComponent,
    LoginComponent,
    AdminSignupComponent,
    HeroComponent,
    CategoryCardComponent,
    ProductCardComponent,
    CheckoutComponent,
    ProductDetailComponent,
    WishlistComponent,
    ProfileComponent,
    OrderTrackingComponent,
    AiMatcherPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShopModule,
    ContactModule,
    NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }