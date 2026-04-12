import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ThemeSettings {
  primaryGradientStart: string;    // #D946EF
  primaryGradientEnd: string;      // #9333EA
  primaryPurple: string;           // #9333EA
  deepPurple: string;              // #7E22CE
  pink: string;                    // #D946EF
  gold: string;                    // #C9A45C
  textMain: string;                // #111827
  textSecondary: string;           // #1F2937
  textBody: string;                // #6B7280
  textLight: string;               // #9CA3AF
  borderLight: string;             // #E5E7EB
  bgLight: string;                 // #F9FAFB
}

export const DEFAULT_THEME: ThemeSettings = {
  primaryGradientStart: '#D946EF',
  primaryGradientEnd: '#9333EA',
  primaryPurple: '#9333EA',
  deepPurple: '#7E22CE',
  pink: '#D946EF',
  gold: '#C9A45C',
  textMain: '#111827',
  textSecondary: '#1F2937',
  textBody: '#6B7280',
  textLight: '#9CA3AF',
  borderLight: '#E5E7EB',
  bgLight: '#F9FAFB'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private apiUrl = 'http://localhost:5002/api/settings';
  private themeSubject = new BehaviorSubject<ThemeSettings>(DEFAULT_THEME);
  public theme$ = this.themeSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTheme();
  }

  loadTheme(): void {
    this.http.get<{ theme: ThemeSettings }>(`${this.apiUrl}/theme/public`).subscribe({
      next: (response) => {
        if (response?.theme) {
          const theme = { ...DEFAULT_THEME, ...response.theme };
          this.applyTheme(theme);
          this.themeSubject.next(theme);
        }
      },
      error: () => {
        // Use default theme on error
        this.applyTheme(DEFAULT_THEME);
      }
    });
  }

  saveTheme(theme: Partial<ThemeSettings>, adminToken?: string): Observable<{ theme: ThemeSettings }> {
    const headers = adminToken ? { 'Authorization': `Bearer ${adminToken}` } : {};
    return new Observable((observer) => {
      this.http.put<{ theme: ThemeSettings }>(`${this.apiUrl}/theme`, { theme }, { headers }).subscribe({
        next: (response) => {
          const updatedTheme = { ...this.themeSubject.value, ...response.theme };
          this.applyTheme(updatedTheme);
          this.themeSubject.next(updatedTheme);
          observer.next(response);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  getTheme(): ThemeSettings {
    return this.themeSubject.value;
  }

  private applyTheme(theme: ThemeSettings): void {
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
      const cssVarName = `--theme-${this.camelToKebab(key)}`;
      root.style.setProperty(cssVarName, theme[key as keyof ThemeSettings]);
    });
  }

  private camelToKebab(str: string): string {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  }

  resetToDefault(): void {
    this.applyTheme(DEFAULT_THEME);
    this.themeSubject.next(DEFAULT_THEME);
  }
}
