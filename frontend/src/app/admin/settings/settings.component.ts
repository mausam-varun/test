import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../shared/services/theme.service';
import { APP_CONFIG } from '../../config/app-config';

interface SectionVisibility {
  hero: boolean;
  aiMatch: boolean;
  categories: boolean;
  featured: boolean;
  testimonials: boolean;
  newsletter: boolean;
}

interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  addToCartButtonColor: string;
  addToCartButtonHoverColor: string;
  wishlistButtonHoverColor: string;
  headerMenuHoverColor: string;
}

interface AdminSettings {
  sections: SectionVisibility;
  theme: ThemeSettings;
}

@Component({
  selector: 'app-admin-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {
  private readonly apiUrl = `${APP_CONFIG.API_URL}/settings/admin/settings`;

  sections: SectionVisibility = {
    hero: true,
    aiMatch: true,
    categories: true,
    featured: true,
    testimonials: true,
    newsletter: true
  };

  theme: ThemeSettings = {
    primaryColor: '#2563eb',
    secondaryColor: '#64748b',
    accentColor: '#d97706',
    addToCartButtonColor: '#0f3e7e',
    addToCartButtonHoverColor: '#0a2547',
    wishlistButtonHoverColor: '#fecaca',
    headerMenuHoverColor: '#f3f4f6'
  };

  isLoading = false;
  isSaving = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private readonly http: HttpClient,
    private readonly themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.get<AdminSettings>(this.apiUrl).subscribe({
      next: (data) => {
        this.sections = { ...this.sections, ...data.sections };
        this.theme = { ...this.theme, ...data.theme };
        this.isLoading = false;
        this.themeService.setTheme(this.theme);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Failed to load settings:', error);
        // Continue with defaults if endpoint doesn't exist yet
      }
    });
  }

  toggleSection(sectionKey: keyof SectionVisibility): void {
    this.sections[sectionKey] = !this.sections[sectionKey];
    this.saveSettings();
  }

  onThemeColorChange(colorKey: keyof ThemeSettings): void {
    this.themeService.setTheme(this.theme);
    this.saveSettings();
  }

  saveSettings(): void {
    this.isSaving = true;
    this.errorMessage = '';

    const payload: AdminSettings = {
      sections: this.sections,
      theme: this.theme
    };

    this.http.post<AdminSettings>(this.apiUrl, payload).subscribe({
      next: (data) => {
        this.isSaving = false;
        this.successMessage = 'Settings saved successfully!';
        this.sections = { ...this.sections, ...data.sections };
        this.theme = { ...this.theme, ...data.theme };
        // Apply theme globally
        this.themeService.setTheme(this.theme);
        setTimeout(() => { this.successMessage = ''; }, 3000);
        this.broadcastSettingsChange();
      },
      error: (error) => {
        this.isSaving = false;
        console.error('Settings save error:', error);
        this.errorMessage = error?.error?.error || error?.error?.message || 'Failed to save settings. Please try again.';
      }
    });
  }

  resetToDefaults(): void {
    if (confirm('Are you sure you want to reset all settings to defaults?')) {
      this.sections = {
        hero: true,
        aiMatch: true,
        categories: true,
        featured: true,
        testimonials: true,
        newsletter: true
      };

      this.theme = {
        primaryColor: '#2563eb',
        secondaryColor: '#64748b',
        accentColor: '#d97706',
        addToCartButtonColor: '#0f3e7e',
        addToCartButtonHoverColor: '#0a2547',
        wishlistButtonHoverColor: '#fecaca',
        headerMenuHoverColor: '#f3f4f6'
      };

      this.themeService.setTheme(this.theme);
      this.saveSettings();
    }
  }

  private applyTheme(): void {
    this.themeService.setTheme(this.theme);
  }

  private broadcastSettingsChange(): void {
    // Emit event to refresh component visibility
    window.dispatchEvent(new Event('admin-settings-changed'));
  }
}
