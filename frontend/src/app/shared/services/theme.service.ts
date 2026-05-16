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
  fontFamily: string;
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
    headerMenuHoverColor: '#f3f4f6',
    fontFamily: 'Poppins'
  });

  theme$ = this.themeSubject.asObservable();

  private readonly defaultTheme: ThemeSettings = {
    primaryColor: '#E8174B',
    secondaryColor: '#64748b',
    accentColor: '#d97706',
    addToCartButtonColor: '#0f3e7e',
    addToCartButtonHoverColor: '#0a2547',
    wishlistButtonHoverColor: '#fecaca',
    headerMenuHoverColor: '#f3f4f6',
    fontFamily: 'Poppins'
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
          const normalizedTheme = this.normalizeTheme(data.theme);
          const currentTheme = this.themeSubject.value;
          if (JSON.stringify(currentTheme) !== JSON.stringify(normalizedTheme)) {
            this.applyTheme(normalizedTheme);
            this.themeSubject.next(normalizedTheme);
            this.saveToLocalStorage(normalizedTheme);
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
          const normalizedTheme = this.normalizeTheme(data.theme);
          const currentTheme = this.themeSubject.value;
          // Only update if theme has actually changed
          if (JSON.stringify(currentTheme) !== JSON.stringify(normalizedTheme)) {
            this.applyTheme(normalizedTheme);
            this.themeSubject.next(normalizedTheme);
            this.saveToLocalStorage(normalizedTheme);
            console.log('🎨 Theme updated from server');
          }
        }
      });
  }

  getTheme(): ThemeSettings {
    return this.themeSubject.value;
  }

  setTheme(theme: ThemeSettings): void {
    const normalizedTheme = this.normalizeTheme(theme);
    this.applyTheme(normalizedTheme);
    this.themeSubject.next(normalizedTheme);
    this.saveToLocalStorage(normalizedTheme);
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
    root.style.setProperty('--app-font-family', this.resolveFontStack(theme.fontFamily));
  }

  private normalizeTheme(theme: Partial<ThemeSettings>): ThemeSettings {
    return {
      ...this.defaultTheme,
      ...theme,
      fontFamily: this.resolveAllowedFont(theme.fontFamily)
    };
  }

  private resolveAllowedFont(fontFamily?: string): string {
    const allowedFonts = [
      'Poppins',
      'Inter',
      'Montserrat',
      'Manrope',
      'DM Sans',
      'Lora',
      'Merriweather',
      'Playfair Display',
      'Segoe UI'
    ];
    return allowedFonts.includes(String(fontFamily || '')) ? String(fontFamily) : this.defaultTheme.fontFamily;
  }

  private resolveFontStack(fontFamily: string): string {
    const stacks: Record<string, string> = {
      'Poppins': "'Poppins', 'Segoe UI', sans-serif",
      'Inter': "'Inter', 'Segoe UI', sans-serif",
      'Montserrat': "'Montserrat', 'Segoe UI', sans-serif",
      'Manrope': "'Manrope', 'Segoe UI', sans-serif",
      'DM Sans': "'DM Sans', 'Segoe UI', sans-serif",
      'Lora': "'Lora', Georgia, serif",
      'Merriweather': "'Merriweather', Georgia, serif",
      'Playfair Display': "'Playfair Display', Georgia, serif",
      'Segoe UI': "'Segoe UI', sans-serif"
    };

    return stacks[fontFamily] || stacks['Poppins'];
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
