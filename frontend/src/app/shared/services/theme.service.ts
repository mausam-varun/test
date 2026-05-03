import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, interval, Subscription } from 'rxjs';
import { startWith, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { APP_CONFIG } from '../../config/app-config';

export interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  addToCartButtonColor: string;
  addToCartButtonHoverColor: string;
  wishlistButtonHoverColor: string;
  headerMenuHoverColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private themeSubject = new BehaviorSubject<ThemeSettings>({
    primaryColor: '#E8174B',
    secondaryColor: '#64748b',
    accentColor: '#d97706',
    addToCartButtonColor: '#0f3e7e',
    addToCartButtonHoverColor: '#0a2547',
    wishlistButtonHoverColor: '#fecaca',
    headerMenuHoverColor: '#f3f4f6'
  });

  theme$ = this.themeSubject.asObservable();

  private readonly defaultTheme: ThemeSettings = {
    primaryColor: '#E8174B',
    secondaryColor: '#64748b',
    accentColor: '#d97706',
    addToCartButtonColor: '#0f3e7e',
    addToCartButtonHoverColor: '#0a2547',
    wishlistButtonHoverColor: '#fecaca',
    headerMenuHoverColor: '#f3f4f6'
  };

  private pollSubscription: Subscription | null = null;
  private readonly POLL_INTERVAL = 30000; // Poll every 30 seconds

  constructor(private readonly http: HttpClient) {
    this.initializeTheme();
    this.startPolling();
  }

  private initializeTheme(): void {
    // Load from localStorage FIRST (synchronous) to avoid flash of default colors
    const saved = this.getFromLocalStorage();
    if (saved) {
      this.applyTheme(saved);
      this.themeSubject.next(saved);
    } else {
      this.applyTheme(this.defaultTheme);
    }

    // Then fetch latest from API in background
    this.http.get<{ sections: any; theme: ThemeSettings }>(`${APP_CONFIG.API_URL}/settings/admin/settings`).subscribe({
      next: (data) => {
        if (data?.theme) {
          const currentTheme = this.themeSubject.value;
          if (JSON.stringify(currentTheme) !== JSON.stringify(data.theme)) {
            this.applyTheme(data.theme);
            this.themeSubject.next(data.theme);
            this.saveToLocalStorage(data.theme);
          }
        }
      },
      error: () => {
        // Failed to fetch from API, but we already have theme from localStorage
      }
    });
  }

  private startPolling(): void {
    // Poll the API every 30 seconds for theme updates
    this.pollSubscription = interval(this.POLL_INTERVAL)
      .pipe(
        startWith(0),
        switchMap(() =>
          this.http.get<{ sections: any; theme: ThemeSettings }>(`${APP_CONFIG.API_URL}/settings/admin/settings`).pipe(
            catchError(() => of(null))
          )
        )
      )
      .subscribe((data) => {
        if (data?.theme) {
          const currentTheme = this.themeSubject.value;
          // Only update if theme has actually changed
          if (JSON.stringify(currentTheme) !== JSON.stringify(data.theme)) {
            this.applyTheme(data.theme);
            this.themeSubject.next(data.theme);
            this.saveToLocalStorage(data.theme);
            console.log('🎨 Theme updated from server');
          }
        }
      });
  }

  getTheme(): ThemeSettings {
    return this.themeSubject.value;
  }

  setTheme(theme: ThemeSettings): void {
    this.applyTheme(theme);
    this.themeSubject.next(theme);
    this.saveToLocalStorage(theme);
  }

  applyTheme(theme: ThemeSettings): void {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.primaryColor);
    root.style.setProperty('--color-secondary', theme.secondaryColor);
    root.style.setProperty('--color-accent', theme.accentColor);
    root.style.setProperty('--button-add-to-cart', theme.addToCartButtonColor);
    root.style.setProperty('--button-add-to-cart-hover', theme.addToCartButtonHoverColor);
    root.style.setProperty('--button-wishlist-hover', theme.wishlistButtonHoverColor);
    root.style.setProperty('--menu-hover', theme.headerMenuHoverColor);
  }

  private saveToLocalStorage(theme: ThemeSettings): void {
    try {
      localStorage.setItem('divaracraft-theme', JSON.stringify(theme));
    } catch (e) {
      // localStorage might be disabled
    }
  }

  private getFromLocalStorage(): ThemeSettings | null {
    try {
      const saved = localStorage.getItem('divaracraft-theme');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  }

  ngOnDestroy(): void {
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
