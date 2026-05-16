import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ReviewService } from './services/review.service';
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
  readonly showRatingTestButton = this.isLocalEnvironment();

  constructor(
    private readonly router: Router,
    private readonly reviewService: ReviewService,
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

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        this.isAdminRoute = (e as NavigationEnd).urlAfterRedirects.startsWith('/admin');
      });
  }

  openRatingTestPopup(): void {
    this.reviewService.triggerPreviewPopup();
  }

  private isLocalEnvironment(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }
}