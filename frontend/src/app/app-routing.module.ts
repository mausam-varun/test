import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home3Component } from './home/home3.component';
import { HomeDispatcherComponent } from './home/home-dispatcher.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { AiMatcherPageComponent } from './pages/ai-matcher-page/ai-matcher-page.component';

const routes: Routes = [
  { path: '', component: HomeDispatcherComponent, pathMatch: 'full' },
  { path: 'home', component: HomeDispatcherComponent },
  { path: 'home1', component: HomeComponent },
  { path: 'home3', component: Home3Component },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/signup', component: AdminSignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'track-order', component: OrderTrackingComponent },
  { path: 'track-order/:orderNumber', component: OrderTrackingComponent },
  { path: 'ai-matcher', component: AiMatcherPageComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
