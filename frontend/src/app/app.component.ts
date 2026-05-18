import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ReviewService } from './services/review.service';
import { AuthSessionService } from './services/auth-session.service';
import { WishlistService } from './services/wishlist.service';
import { ThemeService } from './shared/services/theme.service';
import { CurrencyPreferenceService } from './shared/services/currency-preference.service';
import { ScrollRestorationService } from './services/scroll-restoration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Divara Craft';
  isAdminRoute = false;
  isAuthenticated = false;
  isAccountMenuOpen = false;
  currentUserName = 'Guest';
  currentUserEmail = '';
  wishlistShortcutCount = 0;
  readonly showRatingTestButton = this.isLocalEnvironment();
  private readonly subscriptions = new Subscription();

  constructor(
    private readonly router: Router,
    private readonly reviewService: ReviewService,
    private readonly authSessionService: AuthSessionService,
    private readonly wishlistService: WishlistService,
    private readonly themeService: ThemeService,
    private readonly currencyPreferenceService: CurrencyPreferenceService,
    // Injecting activates the service — it wires up router event listeners
    private readonly scrollRestorationService: ScrollRestorationService
  ) {
    // Initialize currency detection and multiplier loading on app startup
    console.log('🚀 App initializing... Syncing currency with system timezone');
    this.currencyPreferenceService.syncFrontendCurrencyWithSystem();
    
    // Also ensure multiplier is loaded from localStorage
    try {
      const multiplier = localStorage.getItem('usd_display_multiplier');
      if (multiplier) {
        const parsed = Number(multiplier);
        if (Number.isInteger(parsed) && parsed >= 1 && parsed <= 10) {
          this.currencyPreferenceService.setUsdMultiplier(parsed);
          console.log('📊 Price multiplier loaded:', parsed + 'x');
        }
      }
    } catch { /* ignore */ }

    this.subscriptions.add(
      this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(e => {
          this.isAdminRoute = (e as NavigationEnd).urlAfterRedirects.startsWith('/admin');
          this.closeAccountMenu();
        })
    );

    this.subscriptions.add(
      this.authSessionService.user$.subscribe((user) => {
        this.isAuthenticated = Boolean(user);
        this.currentUserName = user?.name?.trim() || 'Guest';
        this.currentUserEmail = user?.email?.trim() || '';
      })
    );

    this.subscriptions.add(
      this.wishlistService.wishlistItems$.subscribe((items) => {
        this.wishlistShortcutCount = items.length;
      })
    );
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeAccountMenu();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openRatingTestPopup(): void {
    this.reviewService.triggerPreviewPopup();
  }

  toggleAccountMenu(event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.isAccountMenuOpen = !this.isAccountMenuOpen;
  }

  closeAccountMenu(): void {
    this.isAccountMenuOpen = false;
  }

  navigateFromAccountMenu(path: string, fragment?: string): void {
    this.closeAccountMenu();
    void this.router.navigate([path], fragment ? { fragment } : undefined);
  }

  logoutFromAccountMenu(): void {
    this.authSessionService.clearSession();
    this.closeAccountMenu();
    void this.router.navigate(['/']);
  }

  get accountInitial(): string {
    return this.currentUserName.trim().charAt(0).toUpperCase() || 'G';
  }

  private isLocalEnvironment(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }
}