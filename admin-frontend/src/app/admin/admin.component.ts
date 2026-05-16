import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeSectionsService } from '../services/home-sections.service';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
}

interface ThemeSettings {
  primaryGradientStart: string;
  primaryGradientEnd: string;
  primaryPurple: string;
  deepPurple: string;
  pink: string;
  gold: string;
  textMain: string;
  textSecondary: string;
  textBody: string;
  textLight: string;
  borderLight: string;
  bgLight: string;
}

type ProductCurrency = 'USD' | 'INR';

interface InventoryProduct {
  id: number;
  name: string;
  image_url: string;
  category: string;
  total_added_quantity: number;
  current_stock: number;
  sold_quantity: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private readonly apiBaseUrl = 'http://localhost:5002/api/products';
  private readonly authApiUrl = 'http://localhost:5002/api/auth';
  private readonly settingsApiUrl = 'http://localhost:5002/api/settings';

  productName = '';
  productPrice: number | null = null;
  selectedCurrency: ProductCurrency = 'USD';
  productCategory = '';
  productDescription = '';
  selectedImageFile: File | null = null;
  selectedImageName = '';

  // Metadata fields (comma-separated or array format)
  productQuantity: number | null = null;
  productColors = '';
  productColorHex = '';
  productSize = '';
  productDesigns = '';
  productPatterns = '';
  productStyles = '';
  productMaterials = '';

  // Inventory management
  inventoryProducts: InventoryProduct[] = [];
  isLoadingInventory = false;
  inventoryError = '';
  showInventorySection = false;

  isSubmitting = false;
  isLoadingProducts = false;
  isSavingCurrency = false;
  isSavingTheme = false;
  successMessage = '';
  errorMessage = '';
  currencyMessage = '';
  themeMessage = '';
  adminId: number | null = null;
  adminToken: string | null = null;

  // Theme settings
  showThemePanel = false;
  themeSettings: ThemeSettings = {
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

  products: Product[] = [];

  readonly currencyOptions: { value: ProductCurrency; label: string }[] = [
    { value: 'USD', label: 'USD ($)' },
    { value: 'INR', label: 'INR (Rs.)' }
  ];

  readonly themeColorLabels: { [key in keyof ThemeSettings]: string } = {
    primaryGradientStart: 'Primary Gradient Start',
    primaryGradientEnd: 'Primary Gradient End',
    primaryPurple: 'Primary Purple',
    deepPurple: 'Deep Purple',
    pink: 'Pink Accent',
    gold: 'Gold Accent',
    textMain: 'Main Text Color',
    textSecondary: 'Secondary Text Color',
    textBody: 'Body Text Color',
    textLight: 'Light Text Color',
    borderLight: 'Border Color',
    bgLight: 'Light Background'
  };

  get themeColorKeys(): (keyof ThemeSettings)[] {
    return Object.keys(this.themeSettings) as (keyof ThemeSettings)[];
  }

  // Price Multiplier Settings
  showPriceMultiplierPanel = false;
  priceMultiplier: number = 1;
  priceMultiplierMessage = '';
  isSavingMultiplier = false;
  readonly multiplierOptions = [1, 2, 3, 4, 5, 6];

  // New Arrivals Section Properties
  showNewArrivalsPanel = false;
  newArrivalsTopLabel = 'NEW ARRIVALS';
  newArrivalsTitle = 'Celebrate Craftsmanship';
  newArrivalsDescription = 'Discover the latest additions to our handmade collection';
  newArrivalsButtonText = 'VIEW ALL BANGLES';
  newArrivalsButtonLink = '/shop';
  newArrivalsImageFile: File | null = null;
  newArrivalsImageName = '';
  newArrivalsImage = '';
  isSavingNewArrivals = false;
  newArrivalsMessage = '';
  newArrivalsError = '';

  constructor(
    private readonly http: HttpClient,
    private homeSectionsService: HomeSectionsService
  ) {}

  ngOnInit(): void {
    this.adminId = this.getAdminIdFromSession();
    this.adminToken = this.getAdminTokenFromSession();
    this.loadAdminCurrencyPreference();
    this.loadPriceMultiplier();
    this.loadProducts();
    this.loadThemeSettings();
  }

  onHeaderCurrencyChange(): void {
    this.currencyMessage = '';
    if (!this.adminId) {
      this.currencyMessage = 'Admin ID not found in session. Currency change is local only.';
      return;
    }

    this.isSavingCurrency = true;
    this.http.put<{ status: string; adminId: number; preferred_currency: ProductCurrency }>(
      `${this.authApiUrl}/admins/${this.adminId}/currency`,
      { currency: this.selectedCurrency }
    ).subscribe({
      next: (response) => {
        this.isSavingCurrency = false;
        this.selectedCurrency = response.preferred_currency || this.selectedCurrency;
        this.currencyMessage = `Saved for admin #${this.adminId}: ${this.selectedCurrency}`;
      },
      error: (error: { error?: { error?: string } }) => {
        this.isSavingCurrency = false;
        this.currencyMessage = error?.error?.error || 'Could not save currency preference.';
      }
    });
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    if (!file) {
      this.selectedImageFile = null;
      this.selectedImageName = '';
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      this.errorMessage = 'Only JPG and PNG images are allowed.';
      this.selectedImageFile = null;
      this.selectedImageName = '';
      input.value = '';
      return;
    }

    this.errorMessage = '';
    this.selectedImageFile = file;
    this.selectedImageName = file.name;
  }

  uploadProduct(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (!this.productName.trim() || !this.productCategory.trim() || this.productPrice === null || this.productPrice <= 0 || !this.selectedImageFile) {
      this.errorMessage = 'Name, category, positive price, and image are required.';
      return;
    }

    const payload = new FormData();
    payload.append('name', this.productName.trim());
    payload.append('price', String(this.productPrice));
    payload.append('currency', this.selectedCurrency);
    if (this.adminId) {
      payload.append('admin_id', String(this.adminId));
    }
    payload.append('category', this.productCategory.trim());
    payload.append('description', this.productDescription.trim());
    payload.append('image', this.selectedImageFile);

    if (this.productQuantity !== null && this.productQuantity > 0) {
      payload.append('quantity', String(this.productQuantity));
    }

    // Append metadata fields (comma-separated strings that will be parsed on backend)
    if (this.productColors.trim()) payload.append('colors', this.productColors.trim());
    if (this.productColorHex.trim()) payload.append('color_hex', this.productColorHex.trim());
    if (this.productSize.trim()) payload.append('size', this.productSize.trim());
    if (this.productDesigns.trim()) payload.append('designs', this.productDesigns.trim());
    if (this.productPatterns.trim()) payload.append('patterns', this.productPatterns.trim());
    if (this.productStyles.trim()) payload.append('styles', this.productStyles.trim());
    if (this.productMaterials.trim()) payload.append('materials', this.productMaterials.trim());

    this.isSubmitting = true;
    this.http.post<{ message: string; data: Product }>(this.apiBaseUrl, payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = 'Product uploaded successfully.';
        this.resetForm();
        this.loadProducts();
      },
      error: (error: { error?: { message?: string } }) => {
        this.isSubmitting = false;
        this.errorMessage = error?.error?.message || 'Upload failed. Please try again.';
      }
    });
  }

  private loadProducts(): void {
    this.isLoadingProducts = true;
    this.http.get<{ data: Product[] }>(this.apiBaseUrl).subscribe({
      next: (response: { data: Product[] }) => {
        this.products = response?.data ?? [];
        this.isLoadingProducts = false;
      },
      error: () => {
        this.isLoadingProducts = false;
        this.errorMessage = 'Could not load products from backend.';
      }
    });
  }

  private resetForm(): void {
    this.productName = '';
    this.productPrice = null;
    this.productQuantity = null;
    this.productCategory = '';
    this.productDescription = '';
    this.selectedImageFile = null;
    this.selectedImageName = '';
    this.productColors = '';
    this.productColorHex = '';
    this.productSize = '';
    this.productDesigns = '';
    this.productPatterns = '';
    this.productStyles = '';
    this.productMaterials = '';
  }

  loadInventory(): void {
    this.showInventorySection = true;
    this.isLoadingInventory = true;
    this.inventoryError = '';
    const token = this.adminToken || localStorage.getItem('admin_token') || '';
    this.http.get<{ total: number; products: InventoryProduct[] }>(
      'http://localhost:5002/api/inventory/all-products',
      { headers: { Authorization: `Bearer ${token}` } }
    ).subscribe({
      next: (res) => {
        this.inventoryProducts = res.products || [];
        this.isLoadingInventory = false;
      },
      error: () => {
        this.inventoryError = 'Failed to load inventory data.';
        this.isLoadingInventory = false;
      }
    });
  }

  get pricePreviewInUsd(): number | null {
    if (this.productPrice === null || this.productPrice <= 0) {
      return null;
    }

    if (this.selectedCurrency === 'USD') {
      return Number(this.productPrice.toFixed(2));
    }

    const inrToUsdRate = 1 / 83;
    return Number((this.productPrice * inrToUsdRate).toFixed(2));
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

  private loadAdminCurrencyPreference(): void {
    if (!this.adminId) {
      return;
    }

    this.http.get<{ preferred_currency?: ProductCurrency }>(`${this.authApiUrl}/admins/${this.adminId}/currency`).subscribe({
      next: (response) => {
        if (response?.preferred_currency === 'USD' || response?.preferred_currency === 'INR') {
          this.selectedCurrency = response.preferred_currency;
        }
      },
      error: () => {
        this.currencyMessage = 'Could not load saved currency. Using USD.';
      }
    });
  }

  private getAdminTokenFromSession(): string | null {
    try {
      const raw = localStorage.getItem('admin_token');
      return raw ? String(raw).trim() : null;
    } catch {
      return null;
    }
  }

  loadThemeSettings(): void {
    this.http.get<{ theme: ThemeSettings }>(`${this.settingsApiUrl}/theme/public`).subscribe({
      next: (response) => {
        if (response?.theme) {
          this.themeSettings = { ...this.themeSettings, ...response.theme };
        }
      },
      error: () => {
        this.themeMessage = 'Could not load current theme settings';
      }
    });
  }

  saveThemeSettings(): void {
    if (!this.adminToken) {
      this.themeMessage = 'Admin token not found. Please log in again.';
      return;
    }

    this.isSavingTheme = true;
    this.themeMessage = '';

    this.http.put<{ theme: ThemeSettings; message: string }>(
      `${this.settingsApiUrl}/theme`,
      { theme: this.themeSettings },
      { headers: { 'Authorization': `Bearer ${this.adminToken}` } }
    ).subscribe({
      next: (response) => {
        this.isSavingTheme = false;
        this.themeMessage = response.message || 'Theme saved successfully and applied to frontend!';
        this.themeSettings = response.theme;
      },
      error: (error: { error?: { error?: string } }) => {
        this.isSavingTheme = false;
        this.themeMessage = error?.error?.error || 'Could not save theme settings';
      }
    });
  }

  resetTheme(): void {
    this.themeSettings = {
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
    this.themeMessage = 'Theme reset to default. Click "Save Theme" to apply.';
  }

  toggleThemePanel(): void {
    this.showThemePanel = !this.showThemePanel;
  }

  togglePriceMultiplierPanel(): void {
    this.showPriceMultiplierPanel = !this.showPriceMultiplierPanel;
    if (this.showPriceMultiplierPanel && this.priceMultiplier === 1) {
      this.loadPriceMultiplier();
    }
  }

  loadPriceMultiplier(): void {
    // Try to load from localStorage or use default
    try {
      const stored = localStorage.getItem('usd_display_multiplier');
      this.priceMultiplier = stored ? Number(stored) : 1;
    } catch {
      this.priceMultiplier = 1;
    }
  }

  savePriceMultiplier(): void {
    this.priceMultiplierMessage = '';

    if (!Number.isInteger(this.priceMultiplier) || this.priceMultiplier < 1 || this.priceMultiplier > 6) {
      this.priceMultiplierMessage = 'Multiplier must be between 1 and 6.';
      return;
    }

    this.isSavingMultiplier = true;

    try {
      // Save to localStorage (synced with frontend)
      localStorage.setItem('usd_display_multiplier', String(this.priceMultiplier));
      
      this.isSavingMultiplier = false;
      this.priceMultiplierMessage = `✓ Price multiplier set to ${this.priceMultiplier}x. Frontend will display prices multiplied by ${this.priceMultiplier}.`;
      
      // Clear message after 3 seconds
      setTimeout(() => {
        this.priceMultiplierMessage = '';
      }, 3000);
    } catch (error) {
      this.isSavingMultiplier = false;
      this.priceMultiplierMessage = 'Error saving multiplier. Please try again.';
    }
  }

  getMultiplierPreview(basePrice: number = 10): string {
    return `$${(basePrice * this.priceMultiplier).toFixed(2)}`;
  }

  toggleNewArrivalsPanel(): void {
    this.showNewArrivalsPanel = !this.showNewArrivalsPanel;
  }

  onNewArrivalsImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.newArrivalsImageFile = input.files[0];
      this.newArrivalsImageName = this.newArrivalsImageFile.name;
    }
  }

  saveNewArrivals(): void {
    if (!this.newArrivalsTitle.trim()) {
      this.newArrivalsError = 'Title is required';
      return;
    }

    this.isSavingNewArrivals = true;
    this.newArrivalsError = '';
    this.newArrivalsMessage = '';

    const data = {
      top_label: this.newArrivalsTopLabel,
      main_title: this.newArrivalsTitle,
      description: this.newArrivalsDescription,
      button_text: this.newArrivalsButtonText,
      button_link: this.newArrivalsButtonLink,
      is_active: true
    };

    this.homeSectionsService.updateNewArrivals(data, this.newArrivalsImageFile || undefined).subscribe({
      next: (response) => {
        this.isSavingNewArrivals = false;
        this.newArrivalsMessage = response.message || 'New Arrivals section updated successfully!';
        if (response.data && response.data.image_url) {
          this.newArrivalsImage = response.data.image_url;
        }
        this.newArrivalsImageFile = null;
        this.newArrivalsImageName = '';
      },
      error: (error: any) => {
        this.isSavingNewArrivals = false;
        this.newArrivalsError = error?.error?.message || error?.error?.error || 'Failed to update New Arrivals section';
      }
    });
  }

  loadNewArrivals(): void {
    this.homeSectionsService.getNewArrivals().subscribe({
      next: (section) => {
        if (section) {
          this.newArrivalsTopLabel = section.top_label || 'NEW ARRIVALS';
          this.newArrivalsTitle = section.main_title || 'Celebrate Craftsmanship';
          this.newArrivalsDescription = section.description || '';
          this.newArrivalsButtonText = section.button_text || 'VIEW ALL BANGLES';
          this.newArrivalsButtonLink = section.button_link || '/shop';
          this.newArrivalsImage = section.image_url || '';
        }
      },
      error: (error) => {
        console.error('Error loading New Arrivals:', error);
      }
    });
  }

}

