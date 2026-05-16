import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../../config/app-config';
import { CurrencyPreferenceService, DisplayCurrency } from '../../shared/services/currency-preference.service';

interface SidebarItem {
  label: string;
  route?: string;
  icon: string; // inline SVG path data
  children?: SidebarItem[]; // For groups with nested items
}

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  sidebarOpen = true;
  private readonly authApiUrl = APP_CONFIG.AUTH_API_URL;

  selectedCurrency: DisplayCurrency = 'USD';
  adminId: number | null = null;
  adminUserType: string = '';
  isSavingCurrency = false;
  currencyMessage = '';
  isProfileMenuOpen = false;
  expandedGroups: Set<string> = new Set(['Reports']); // Track expanded groups

  readonly currencyOptions: { value: DisplayCurrency; label: string }[] = [
    { value: 'USD', label: 'USD ($)' },
    { value: 'INR', label: 'INR (Rs.)' }
  ];

  readonly navItems: SidebarItem[] = [
    {
      label: 'Add Product',
      route: '/admin/add-product',
      icon: 'M12 5v14M5 12h14'
    },
    {
      label: 'Products',
      route: '/admin/products',
      icon: 'M4 6h16M4 10h16M4 14h16M4 18h16'
    },
    {
      label: 'Users',
      route: '/admin/users',
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M29 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
    },
    {
      label: 'Slider Settings',
      route: '/admin/slider-settings',
      icon: 'M4 19h16M4 12h10M4 5h16M16 12l4-3v6l-4-3z'
    },
    {
      label: 'Home Category Control',
      route: '/admin/home-category-control',
      icon: 'M4 6h16v12H4zM8 10h8M8 14h5'
    },
    {
      label: 'Reports',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      children: [
        {
          label: 'Sales Overview',
          route: '/admin/sales-overview',
          icon: 'M23 6L13.5 15.5 8.5 10.5 1 18M17 6h6v6'
        },
        {
          label: 'Product Performance',
          route: '/admin/product-performance',
          icon: 'M12 6v12M6 12h12'
        },
        {
          label: 'Customer Insights',
          route: '/admin/customer-insights',
          icon: 'M17 20h5v-2a3 3 0 00-5.856-1.487M16 10a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
        },
        {
          label: 'Inventory Report',
          route: '/admin/inventory-report',
          icon: 'M20 7l-8-4-8 4m0 0l-2 1v6l10 5 10-5V8l-2-1m0 0l8-4 8 4m0 0v6l-10 5-10-5V8'
        },
        {
          label: 'Order Management',
          route: '/admin/order-management',
          icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm0 2c-1.33 0-4 .67-4 2v3h8v-3c0-1.33-2.67-2-4-2zm-8 0c-1.33 0-4 .67-4 2v3h8v-3c0-1.33-2.67-2-4-2zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-1.33 0-4 .67-4 2v3h8v-3c0-1.33-2.67-2-4-2z'
        }
      ]
    },
    {
      label: 'Manage Banners',
      route: '/admin/manage-banners',
      icon: 'M4 6h16v4H4zM4 12h16v4H4zM4 18h16v2H4z'
    },
    {
      label: 'AI Queue',
      route: '/admin/ai-queue',
      icon: 'M3 6h18M3 12h18M3 18h12M17 16l4 2-4 2v-4z'
    },
    {
      label: 'Vector Data',
      route: '/admin/vector-data',
      icon: 'M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm0 0v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5'
    },
    {
      label: 'Reviews',
      route: '/admin/reviews',
      icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'
    },
    {
      label: 'Frontend Settings',
      route: '/admin/settings',
      icon: 'M12 9v2m0 4v2m0 4v2m0-16v2M8.34 3.66l1.41 1.41m2.83 2.83l1.41 1.41m2.83 2.83l1.41 1.41M3.66 8.34l1.41-1.41m2.83-2.83l1.41-1.41m2.83-2.83l1.41-1.41'
    }
  ];

  get superAdminNavItem(): SidebarItem {
    return {
      label: 'Currency Settings',
      route: '/admin/currency-settings',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
    };
  }

  get isSuperAdmin(): boolean {
    return this.adminUserType === 'super_admin';
  }

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly currencyPreferenceService: CurrencyPreferenceService
  ) {}

  ngOnInit(): void {
    this.selectedCurrency = this.currencyPreferenceService.getCurrency();
    this.adminId = this.getAdminIdFromSession();
    this.adminUserType = this.getAdminUserTypeFromSession();
    this.loadAdminCurrencyPreference();
    this.loadGlobalMultiplier();
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  onHeaderCurrencyChange(): void {
    this.currencyMessage = '';
    this.currencyPreferenceService.setCurrency(this.selectedCurrency);

    if (!this.adminId) {
      this.currencyMessage = 'Admin ID not found in session. Applied locally.';
      return;
    }

    this.isSavingCurrency = true;
    this.http.put<{ preferred_currency?: DisplayCurrency }>(
      `${this.authApiUrl}/admins/${this.adminId}/currency`,
      { currency: this.selectedCurrency }
    ).subscribe({
      next: (response) => {
        this.isSavingCurrency = false;
        if (response?.preferred_currency === 'USD' || response?.preferred_currency === 'INR') {
          this.selectedCurrency = response.preferred_currency;
          this.currencyPreferenceService.setCurrency(this.selectedCurrency);
        }
        this.currencyMessage = `Currency set to ${this.selectedCurrency}`;
      },
      error: (error: { error?: { error?: string } }) => {
        this.isSavingCurrency = false;
        this.currencyMessage = error?.error?.error || 'Could not save currency preference.';
      }
    });
  }

  toggleProfileMenu(event: Event): void {
    event.stopPropagation();
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu(): void {
    this.isProfileMenuOpen = false;
  }

  onLogout(event: Event): void {
    event.stopPropagation();
    this.closeProfileMenu();

    try {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
    } catch {
      // Ignore storage errors and continue logout flow.
    }

    this.adminId = null;
    this.currencyMessage = '';
    this.router.navigate(['/admin/login']);
  }

  toggleGroupExpand(groupLabel: string): void {
    if (this.expandedGroups.has(groupLabel)) {
      this.expandedGroups.delete(groupLabel);
    } else {
      this.expandedGroups.add(groupLabel);
    }
  }

  isGroupExpanded(groupLabel: string): boolean {
    return this.expandedGroups.has(groupLabel);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth <= 768) {
      this.sidebarOpen = false;
    } else {
      this.sidebarOpen = true;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (!event.target.closest('.admin-profile-menu')) {
      this.closeProfileMenu();
    }
  }

  private getAdminIdFromSession(): number | null {
    try {
      const raw = localStorage.getItem('admin_user');
      if (!raw) {
        return null;
      }

      const parsed = JSON.parse(raw) as { id?: number | string };
      const numericId = Number(parsed?.id);
      return Number.isInteger(numericId) && numericId > 0 ? numericId : null;
    } catch {
      return null;
    }
  }

  private getAdminUserTypeFromSession(): string {
    try {
      const raw = localStorage.getItem('admin_user');
      if (!raw) return '';
      const parsed = JSON.parse(raw) as { userType?: string; user_type?: string };
      return String(parsed?.userType || parsed?.user_type || '');
    } catch {
      return '';
    }
  }

  private loadGlobalMultiplier(): void {
    this.http.get<{ multiplier: number }>(`${APP_CONFIG.API_URL}/settings/currency-multiplier`).subscribe({
      next: (res) => {
        const val = Number(res?.multiplier);
        if (Number.isFinite(val) && val >= 1) {
          this.currencyPreferenceService.setUsdMultiplier(val);
        }
      },
      error: () => { /* non-fatal */ }
    });
  }

  private loadAdminCurrencyPreference(): void {
    if (!this.adminId) {
      return;
    }

    this.http.get<{ preferred_currency?: DisplayCurrency }>(`${this.authApiUrl}/admins/${this.adminId}/currency`).subscribe({
      next: (response) => {
        if (response?.preferred_currency === 'USD' || response?.preferred_currency === 'INR') {
          this.selectedCurrency = response.preferred_currency;
          this.currencyPreferenceService.setCurrency(this.selectedCurrency);
        }
      },
      error: () => {
        this.currencyMessage = 'Could not load saved currency. Using local preference.';
      }
    });
  }
}
