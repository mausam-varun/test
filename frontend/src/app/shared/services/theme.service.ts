import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
export class ThemeService {
  private themeSubject = new BehaviorSubject<ThemeSettings>({
    primaryColor: '#2563eb',
    secondaryColor: '#64748b',
    accentColor: '#d97706',
    addToCartButtonColor: '#0f3e7e',
    addToCartButtonHoverColor: '#0a2547',
    wishlistButtonHoverColor: '#fecaca',
    headerMenuHoverColor: '#f3f4f6'
  });

  theme$ = this.themeSubject.asObservable();

  private readonly defaultTheme: ThemeSettings = {
    primaryColor: '#2563eb',
    secondaryColor: '#64748b',
    accentColor: '#d97706',
    addToCartButtonColor: '#0f3e7e',
    addToCartButtonHoverColor: '#0a2547',
    wishlistButtonHoverColor: '#fecaca',
    headerMenuHoverColor: '#f3f4f6'
  };

  constructor(private readonly http: HttpClient) {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Try to load from API first
    this.http.get<{ sections: any; theme: ThemeSettings }>(`${APP_CONFIG.API_URL}/settings/admin/settings`).subscribe({
      next: (data) => {
        if (data?.theme) {
          this.applyTheme(data.theme);
          this.themeSubject.next(data.theme);
        }
      },
      error: () => {
        // Fall back to localStorage or defaults
        const saved = this.getFromLocalStorage();
        if (saved) {
          this.applyTheme(saved);
          this.themeSubject.next(saved);
        } else {
          this.applyTheme(this.defaultTheme);
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

  resetToDefaults(): void {
    this.setTheme(this.defaultTheme);
  }
}
