import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../shared/services/theme.service';
import { HomepageService, HomepageLayout } from '../../shared/services/homepage.service';
import { APP_CONFIG } from '../../config/app-config';

interface SectionVisibility {
  hero: boolean;
  aiMatch: boolean;
  categories: boolean;
  featured: boolean;
  testimonials: boolean;
  newsletter: boolean;
  flashDeals: boolean;
  recommendedProducts: boolean;
  recentlyViewed: boolean;
}

interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  addToCartButtonColor: string;
  addToCartButtonHoverColor: string;
  wishlistButtonHoverColor: string;
  headerMenuHoverColor: string;
  fontFamily: string;
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
    newsletter: true,
    flashDeals: true,
    recommendedProducts: true,
    recentlyViewed: true
  };

  theme: ThemeSettings = {
    primaryColor: '#2563eb',
    secondaryColor: '#64748b',
    accentColor: '#d97706',
    addToCartButtonColor: '#0f3e7e',
    addToCartButtonHoverColor: '#0a2547',
    wishlistButtonHoverColor: '#fecaca',
    headerMenuHoverColor: '#f3f4f6',
    fontFamily: 'Poppins'
  };

  readonly fontFamilyOptions: { value: string; label: string }[] = [
    { value: 'Poppins', label: 'Poppins (Default)' },
    { value: 'Inter', label: 'Inter' },
    { value: 'Montserrat', label: 'Montserrat' },
    { value: 'Manrope', label: 'Manrope' },
    { value: 'DM Sans', label: 'DM Sans' },
    { value: 'Lora', label: 'Lora' },
    { value: 'Merriweather', label: 'Merriweather' },
    { value: 'Playfair Display', label: 'Playfair Display' },
    { value: 'Segoe UI', label: 'Segoe UI (System)' }
  ];

  isLoading = false;
  isSaving = false;
  successMessage = '';
  errorMessage = '';

  // Homepage layout selector
  activeHomepage: HomepageLayout = 'home1';
  homepageLayoutOptions: { value: HomepageLayout; label: string; description: string; previewBg: string; accentColor: string }[] = [
    {
      value: 'home1',
      label: 'Home 1 — Default',
      description: 'Classic grid layout with sidebar categories, top flash deals and featured sections.',
      previewBg: '#F8F8FF',
      accentColor: '#E8174B'
    },
    {
      value: 'home3',
      label: 'Home 3 — Noura Theme',
      description: 'Organic luxury minimal design: warm cream palette, serif headings, full-width editorial sections.',
      previewBg: '#FAF7F2',
      accentColor: '#C4956A'
    }
  ];

  constructor(
    private readonly http: HttpClient,
    private readonly themeService: ThemeService,
    private readonly homepageService: HomepageService
  ) {}

  ngOnInit(): void {
    this.activeHomepage = this.homepageService.layout;
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

  setHomepageLayout(layout: HomepageLayout): void {
    this.activeHomepage = layout;
    this.homepageService.setLayout(layout);
    this.successMessage = `Homepage switched to ${layout === 'home3' ? 'Noura Theme' : 'Default'}.`;
    setTimeout(() => { this.successMessage = ''; }, 3000);
  }

  onThemeColorChange(colorKey: keyof ThemeSettings): void {
    if (colorKey === 'addToCartButtonColor') {
      this.theme.addToCartButtonHoverColor = this.darkenHexColor(this.theme.addToCartButtonColor, 20);
    }
    this.themeService.setTheme(this.theme);
    this.saveSettings();
  }

  onFontFamilyChange(): void {
    this.themeService.setTheme(this.theme);
    this.saveSettings();
  }

  private darkenHexColor(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.max(0, (num >> 16) - Math.round(2.55 * percent));
    const g = Math.max(0, ((num >> 8) & 0xff) - Math.round(2.55 * percent));
    const b = Math.max(0, (num & 0xff) - Math.round(2.55 * percent));
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
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
        newsletter: true,
        flashDeals: true,
        recommendedProducts: true,
        recentlyViewed: true
      };

      this.theme = {
        primaryColor: '#2563eb',
        secondaryColor: '#64748b',
        accentColor: '#d97706',
        addToCartButtonColor: '#0f3e7e',
        addToCartButtonHoverColor: '#0a2547',
        wishlistButtonHoverColor: '#fecaca',
        headerMenuHoverColor: '#f3f4f6',
        fontFamily: 'Poppins'
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
