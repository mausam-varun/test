import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
}

type ProductCurrency = 'USD' | 'INR';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private readonly apiBaseUrl = 'http://localhost:5001/api/products';
  private readonly authApiUrl = 'http://localhost:5001/api/auth';

  productName = '';
  productPrice: number | null = null;
  selectedCurrency: ProductCurrency = 'USD';
  productCategory = '';
  productDescription = '';
  selectedImageFile: File | null = null;
  selectedImageName = '';

  // Metadata fields (comma-separated or array format)
  productColors = '';
  productColorHex = '';
  productSize = '';
  productDesigns = '';
  productPatterns = '';
  productStyles = '';
  productMaterials = '';

  isSubmitting = false;
  isLoadingProducts = false;
  isSavingCurrency = false;
  successMessage = '';
  errorMessage = '';
  currencyMessage = '';
  adminId: number | null = null;

  products: Product[] = [];

  readonly currencyOptions: { value: ProductCurrency; label: string }[] = [
    { value: 'USD', label: 'USD ($)' },
    { value: 'INR', label: 'INR (Rs.)' }
  ];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.adminId = this.getAdminIdFromSession();
    this.loadAdminCurrencyPreference();
    this.loadProducts();
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

}
