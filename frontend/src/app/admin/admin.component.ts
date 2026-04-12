import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { API_ENDPOINTS } from '../config/app-config';
import { CurrencyPreferenceService, DisplayCurrency } from '../shared/services/currency-preference.service';

interface ProductImage {
  id: number;
  image_url: string;
  is_primary_image: boolean;
}

interface ProductAttributes {
  product_type?: string;
  category?: string;
  sub_category?: string;
  primary_color?: string;
  secondary_colors?: string[];
  color_family?: string[];
  material_estimated?: string[];
  finish?: string;
  style?: string[];
  occasion?: string[];
  pattern?: string[];
  design_elements?: string[];
  embellishments?: string[];
  craft_type?: string[];
  texture?: string;
  visual_density?: string;
  shape?: string;
  usage?: string[];
  aesthetic_tags?: string[];
  cultural_inference?: string;
  quality_inference?: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  product_category_id?: number | null;
  attributes?: ProductAttributes;
  seo_title?: string | null;
  seo_meta_description?: string | null;
  tags?: string | null;
  colors?: string[];
  color_details?: Array<{ name: string; hex?: string | null; code?: string | null; is_primary_color?: boolean }>;
  image_url: string;
  primary_image_id: number | null;
  images: ProductImage[];
}

interface AiIndexingStatus {
  attempted: boolean;
  stored: boolean;
  mode?: 'off' | 'async' | 'sync' | string;
  message: string;
}

interface ProductMutationResponse extends Product {
  ai_indexing?: AiIndexingStatus;
}

interface SelectedImage {
  file: File;
  previewUrl: string;
  isPrimary: boolean;
}

interface AiIndexingModeResponse {
  mode: 'off' | 'async' | 'sync';
  source: 'env' | 'runtime' | string;
  message?: string;
}

interface AiProviderResponse {
  provider?: 'openai' | 'gemini' | string;
  source?: 'env' | 'runtime' | string;
  message?: string;
}

interface GenerateDescriptionResponse {
  title?: string;
  description: string;
  tags?: string[];
  seo_title?: string;
  seo_meta_description?: string;
  ai_analysis?: {
    colors?: string[];
    category?: string;
    size?: string;
    design?: string[];
    pattern?: string[];
    style?: string[];
    material?: string[];
  };
  ai_analysis_raw?: ProductAttributes;
}

interface ProductCategory {
  id: number;
  name: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  private readonly apiBaseUrl = API_ENDPOINTS.products;
  private readonly categoryApiBaseUrl = API_ENDPOINTS.categories;

  // Form fields
  productName = '';
  productPrice: number | null = null;
  productCategoryId: number | null = null;
  productDescription = '';
  productSeoTitle = '';
  productSeoMetaDescription = '';
  productTags = '';
  productType = '';
  productSubCategory = '';
  productPrimaryColor = '';
  productColor = '';
  productColorFamily = '';
  productSize = '';
  productDesign = '';
  productPattern = '';
  productStyle = '';
  productMaterial = '';
  productFinish = '';
  productOccasion = '';
  productEmbellishments = '';
  productCraftType = '';
  productTexture = '';
  productVisualDensity = '';
  productShape = '';
  productUsage = '';
  productAestheticTags = '';
  productCulturalInference = '';
  productQualityInference = '';
  selectedImages: SelectedImage[] = [];
  selectedAiProvider: 'openai' | 'gemini' = 'gemini';

  // Mode
  editMode = false;
  editingProductId: number | null = null;
  editExistingImages: ProductImage[] = []; // images already saved on the product

  // UI state
  isSubmitting = false;
  isLoadingProducts = false;
  isUpdatingAiMode = false;
  isGeneratingDescription = false;
  confirmDeleteId: number | null = null;
  successMessage = '';
  errorMessage = '';
  aiIndexingMessage = '';
  aiIndexingState: 'success' | 'info' | 'error' = 'info';
  selectedAiMode: 'off' | 'async' | 'sync' = 'async';
  activeAiMode: 'off' | 'async' | 'sync' = 'async';
  aiModeSource = 'env';
  adminId: number | null = null;

  products: Product[] = [];
  productCategories: ProductCategory[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute,
    private readonly currencyPreferenceService: CurrencyPreferenceService
  ) {}

  ngOnInit(): void {
    this.adminId = this.getAdminIdFromSession();
    this.loadAiIndexingMode();
    this.loadAiProviderPreference();
    this.loadProducts();
    this.loadProductCategories();

    // Check for edit mode via query parameters
    this.route.queryParamMap.subscribe((params) => {
      const productId = params.get('id');
      if (productId) {
        const id = parseInt(productId, 10);
        if (!isNaN(id)) {
          this.loadProductForEdit(id);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.revokeAllPreviews();
  }

  onImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    const allowedTypes = ['image/jpeg', 'image/png'];
    const invalid = files.filter(f => !allowedTypes.includes(f.type));

    if (invalid.length) {
      this.errorMessage = 'Only JPG and PNG images are allowed.';
      input.value = '';
      return;
    }

    this.errorMessage = '';
    const newImages: SelectedImage[] = files.map(f => ({
      file: f,
      previewUrl: URL.createObjectURL(f),
      isPrimary: false
    }));

    this.selectedImages = [...this.selectedImages, ...newImages];

    // Ensure at least one primary is set
    if (this.selectedImages.length > 0 && !this.selectedImages.some(img => img.isPrimary)) {
      this.selectedImages[0].isPrimary = true;
    }

    input.value = ''; // reset so same file can be re-added later
  }

  setPrimaryImage(index: number): void {
    this.selectedImages = this.selectedImages.map((img, i) => ({
      ...img,
      isPrimary: i === index
    }));
  }

  removeSelectedImage(index: number): void {
    const removed = this.selectedImages[index];
    URL.revokeObjectURL(removed.previewUrl);
    this.selectedImages = this.selectedImages.filter((_, i) => i !== index);

    // Restore primary if the removed one was primary
    if (removed.isPrimary && this.selectedImages.length > 0) {
      this.selectedImages[0].isPrimary = true;
    }
  }

  saveProduct(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.aiIndexingMessage = '';
    this.aiIndexingState = 'info';

    if (this.editMode) {
      this.submitUpdate();
    } else {
      this.submitCreate();
    }
  }

  onDescriptionEditorInput(event: Event): void {
    const editor = event.target as HTMLDivElement | null;
    this.productDescription = this.normalizeDescriptionHtml(editor?.innerHTML || '');
  }

  formatDescription(command: 'bold' | 'italic' | 'insertUnorderedList' | 'insertOrderedList'): void {
    const editor = document.querySelector('.description-editor') as HTMLDivElement | null;
    editor?.focus();
    document.execCommand(command, false);
    this.productDescription = this.normalizeDescriptionHtml(editor?.innerHTML || this.productDescription);
  }

  clearDescriptionFormatting(): void {
    const editor = document.querySelector('.description-editor') as HTMLDivElement | null;
    editor?.focus();
    document.execCommand('removeFormat', false);
    this.productDescription = this.normalizeDescriptionHtml(editor?.innerHTML || this.productDescription);
  }

  generateDescription(): void {
    if (this.isGeneratingDescription || this.isSubmitting) {
      return;
    }

    if (!this.selectedImages.length) {
      this.errorMessage = 'Upload at least one product image before generating AI content.';
      return;
    }

    const primaryImage = this.selectedImages.find((img) => img.isPrimary)?.file || this.selectedImages[0]?.file;
    if (!primaryImage) {
      this.errorMessage = 'Select a primary image before generating AI content.';
      return;
    }

    const selectedCat = this.productCategories.find(c => c.id === this.productCategoryId);
    const categoryName = selectedCat?.name || '';

    const payload = new FormData();
    payload.append('name', this.productName.trim());
    payload.append('category', categoryName);
    payload.append('description', this.productDescription.trim());
    payload.append('color', this.productColor.trim());
    payload.append('product_type', this.productType.trim());
    payload.append('sub_category', this.productSubCategory.trim());
    payload.append('primary_color', this.productPrimaryColor.trim());
    payload.append('secondary_colors', this.productColor.trim());
    payload.append('color_family', this.productColorFamily.trim());
    payload.append('size', this.productSize.trim());
    payload.append('design', this.productDesign.trim());
    payload.append('design_elements', this.productDesign.trim());
    payload.append('pattern', this.productPattern.trim());
    payload.append('style', this.productStyle.trim());
    payload.append('material', this.productMaterial.trim());
    payload.append('material_estimated', this.productMaterial.trim());
    payload.append('finish', this.productFinish.trim());
    payload.append('occasion', this.productOccasion.trim());
    payload.append('embellishments', this.productEmbellishments.trim());
    payload.append('craft_type', this.productCraftType.trim());
    payload.append('texture', this.productTexture.trim());
    payload.append('visual_density', this.productVisualDensity.trim());
    payload.append('shape', this.productShape.trim());
    payload.append('usage', this.productUsage.trim());
    payload.append('aesthetic_tags', this.productAestheticTags.trim());
    payload.append('cultural_inference', this.productCulturalInference.trim());
    payload.append('quality_inference', this.productQualityInference.trim());
    payload.append('ai_provider', this.selectedAiProvider);

    payload.append('image', primaryImage);

    this.isGeneratingDescription = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post<GenerateDescriptionResponse>(`${this.apiBaseUrl}/generate-description`, payload).subscribe({
      next: (response) => {
        this.isGeneratingDescription = false;
        this.productName = response?.title?.trim() || this.productName;
        this.setProductDescription(response?.description || this.productDescription);
        this.productSeoTitle = response?.seo_title || response?.title || this.productSeoTitle || this.productName;
        this.productSeoMetaDescription = response?.seo_meta_description || this.productSeoMetaDescription;
        this.productTags = Array.isArray(response?.tags) ? response.tags.join(', ') : this.productTags;
        this.applyAiHints(response?.ai_analysis);
        this.applyDetailedAiAttributes(response?.ai_analysis_raw);
        this.successMessage = 'AI product content generated successfully.';
      },
      error: (error: { error?: { message?: string } }) => {
        this.isGeneratingDescription = false;
        this.errorMessage = error?.error?.message || 'AI could not generate the description right now.';
      }
    });
  }

  startEdit(product: Product): void {
    this.editMode = true;
    this.editingProductId = product.id;
    this.productName = product.name;
    this.productPrice = product.price;
    this.productCategoryId = product.product_category_id ?? null;
    const attrs = product.attributes || {};
    this.productType = attrs.product_type || '';
    this.productSubCategory = attrs.sub_category || '';
    this.productPrimaryColor = attrs.primary_color || '';
    this.productColor = Array.isArray(attrs.secondary_colors)
      ? attrs.secondary_colors.join(', ')
      : (Array.isArray(product.colors) ? product.colors.join(', ') : '');
    this.productColorFamily = Array.isArray(attrs.color_family) ? attrs.color_family.join(', ') : '';
    this.productStyle = Array.isArray(attrs.style) ? attrs.style.join(', ') : '';
    this.productPattern = Array.isArray(attrs.pattern) ? attrs.pattern.join(', ') : '';
    this.productDesign = Array.isArray(attrs.design_elements) ? attrs.design_elements.join(', ') : '';
    this.productMaterial = Array.isArray(attrs.material_estimated) ? attrs.material_estimated.join(', ') : '';
    this.productFinish = attrs.finish || '';
    this.productOccasion = Array.isArray(attrs.occasion) ? attrs.occasion.join(', ') : '';
    this.productEmbellishments = Array.isArray(attrs.embellishments) ? attrs.embellishments.join(', ') : '';
    this.productCraftType = Array.isArray(attrs.craft_type) ? attrs.craft_type.join(', ') : '';
    this.productTexture = attrs.texture || '';
    this.productVisualDensity = attrs.visual_density || '';
    this.productShape = attrs.shape || '';
    this.productUsage = Array.isArray(attrs.usage) ? attrs.usage.join(', ') : '';
    this.productAestheticTags = Array.isArray(attrs.aesthetic_tags) ? attrs.aesthetic_tags.join(', ') : '';
    this.productCulturalInference = attrs.cultural_inference || '';
    this.productQualityInference = attrs.quality_inference || '';
    this.setProductDescription(product.description);
    this.productSeoTitle = product.seo_title || '';
    this.productSeoMetaDescription = product.seo_meta_description || '';
    this.productTags = product.tags || '';
    this.revokeAllPreviews();
    this.selectedImages = [];
    this.editExistingImages = product.images ? [...product.images] : [];
    this.successMessage = '';
    this.errorMessage = '';
    this.aiIndexingMessage = '';
    this.aiIndexingState = 'info';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editingProductId = null;
    this.resetForm();
  }

  requestDelete(productId: number): void {
    this.confirmDeleteId = productId;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
  }

  confirmDelete(productId: number): void {
    this.confirmDeleteId = null;
    this.http.delete(`${this.apiBaseUrl}/${productId}`).subscribe({
      next: () => {
        this.successMessage = 'Product deleted.';
        this.loadProducts();
        if (this.editingProductId === productId) {
          this.cancelEdit();
        }
      },
      error: (error: { error?: { message?: string } }) => {
        this.errorMessage = error?.error?.message || 'Delete failed. Please try again.';
      }
    });
  }

  updateAiIndexingMode(): void {
    this.isUpdatingAiMode = true;
    this.http.patch<AiIndexingModeResponse>(`${this.apiBaseUrl}/ai-indexing-mode`, { mode: this.selectedAiMode }).subscribe({
      next: (response) => {
        this.isUpdatingAiMode = false;
        this.activeAiMode = response.mode;
        this.selectedAiMode = response.mode;
        this.aiModeSource = response.source || 'runtime';
        this.successMessage = response.message || `AI indexing mode set to ${response.mode}.`;
        this.errorMessage = '';
      },
      error: (error: { error?: { message?: string } }) => {
        this.isUpdatingAiMode = false;
        this.errorMessage = error?.error?.message || 'Could not update AI indexing mode.';
      }
    });
  }

  private submitCreate(): void {
    if (!this.productName.trim() || this.productCategoryId === null || this.productPrice === null || this.productPrice <= 0 || this.selectedImages.length === 0) {
      this.errorMessage = 'Name, category, positive price, and at least one image are required.';
      return;
    }

    const payload = this.buildFormData();
    this.isSubmitting = true;

    this.http.post<ProductMutationResponse>(this.apiBaseUrl, payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Product uploaded successfully.';
        this.setAiIndexingStatus(response?.ai_indexing);
        this.resetForm();
        this.loadProducts();
      },
      error: (error: { error?: { message?: string } }) => {
        this.isSubmitting = false;
        this.errorMessage = error?.error?.message || 'Upload failed. Please try again.';
      }
    });
  }

  private submitUpdate(): void {
    if (!this.productName.trim() || this.productCategoryId === null || this.productPrice === null || this.productPrice <= 0) {
      this.errorMessage = 'Name, category, and positive price are required.';
      return;
    }

    const payload = this.buildFormData();
    this.isSubmitting = true;

    this.http.put<ProductMutationResponse>(`${this.apiBaseUrl}/${this.editingProductId}`, payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Product updated successfully.';
        this.setAiIndexingStatus(response?.ai_indexing);
        this.cancelEdit();
        this.loadProducts();
      },
      error: (error: { error?: { message?: string } }) => {
        this.isSubmitting = false;
        this.errorMessage = error?.error?.message || 'Update failed. Please try again.';
      }
    });
  }

  private buildFormData(): FormData {
    const selectedCat = this.productCategories.find(c => c.id === this.productCategoryId);
    const categoryName = selectedCat?.name || '';

    const payload = new FormData();
    payload.append('name', this.productName.trim());
    payload.append('price', String(this.productPrice));
    payload.append('currency', this.selectedCurrency);
    if (this.adminId) {
      payload.append('admin_id', String(this.adminId));
    }
    payload.append('category', categoryName);
    if (this.productCategoryId !== null) {
      payload.append('product_category_id', String(this.productCategoryId));
    }
    payload.append('ai_provider', this.selectedAiProvider);
    payload.append('description', this.productDescription.trim());
    payload.append('seo_title', this.productSeoTitle.trim());
    payload.append('seo_meta_description', this.productSeoMetaDescription.trim());
    payload.append('tags', this.productTags.trim());
    payload.append('color', this.productColor.trim());
    payload.append('product_type', this.productType.trim());
    payload.append('sub_category', this.productSubCategory.trim());
    payload.append('primary_color', this.productPrimaryColor.trim());
    payload.append('secondary_colors', this.productColor.trim());
    payload.append('color_family', this.productColorFamily.trim());
    payload.append('size', this.productSize.trim());
    payload.append('design', this.productDesign.trim());
    payload.append('design_elements', this.productDesign.trim());
    payload.append('pattern', this.productPattern.trim());
    payload.append('style', this.productStyle.trim());
    payload.append('material', this.productMaterial.trim());
    payload.append('material_estimated', this.productMaterial.trim());
    payload.append('finish', this.productFinish.trim());
    payload.append('occasion', this.productOccasion.trim());
    payload.append('embellishments', this.productEmbellishments.trim());
    payload.append('craft_type', this.productCraftType.trim());
    payload.append('texture', this.productTexture.trim());
    payload.append('visual_density', this.productVisualDensity.trim());
    payload.append('shape', this.productShape.trim());
    payload.append('usage', this.productUsage.trim());
    payload.append('aesthetic_tags', this.productAestheticTags.trim());
    payload.append('cultural_inference', this.productCulturalInference.trim());
    payload.append('quality_inference', this.productQualityInference.trim());

    // Put the primary image first — controller marks index 0 as primary
    const sorted = [
      ...this.selectedImages.filter(img => img.isPrimary),
      ...this.selectedImages.filter(img => !img.isPrimary)
    ];
    for (const img of sorted) {
      payload.append('images', img.file);
    }
    return payload;
  }

  loadProductCategories(): void {
    this.http.get<ProductCategory[]>(API_ENDPOINTS.productCategories).subscribe({
      next: (cats) => { this.productCategories = cats; },
      error: () => { /* non-critical, dropdown will be empty */ }
    });
  }

  loadProducts(): void {
    this.isLoadingProducts = true;
    this.http.get<Product[] | { data: Product[] }>(this.apiBaseUrl).subscribe({
      next: (response: Product[] | { data: Product[] }) => {
        this.products = Array.isArray(response) ? response : (response?.data ?? []);
        this.isLoadingProducts = false;
      },
      error: () => {
        this.isLoadingProducts = false;
        this.errorMessage = 'Could not load products from backend.';
      }
    });
  }

  private loadProductForEdit(productId: number): void {
    this.http.get<Product>(`${this.apiBaseUrl}/${productId}`).subscribe({
      next: (product) => {
        this.startEdit(product);
      },
      error: () => {
        this.errorMessage = 'Could not load product for editing.';
      }
    });
  }

  get pricePreviewInUsd(): number | null {
    if (this.productPrice === null || this.productPrice <= 0) {
      return null;
    }
    return this.currencyPreferenceService.convertToUsd(this.productPrice, this.selectedCurrency);
  }

  private loadAiIndexingMode(): void {
    this.http.get<AiIndexingModeResponse>(`${this.apiBaseUrl}/ai-indexing-mode`).subscribe({
      next: (response) => {
        this.activeAiMode = response.mode;
        this.selectedAiMode = response.mode;
        this.aiModeSource = response.source || 'env';
      },
      error: () => {
        this.errorMessage = 'Could not load AI indexing mode.';
      }
    });
  }

  private loadAiProviderPreference(): void {
    this.http.get<AiProviderResponse>(`${API_ENDPOINTS.adminAiQueue}/provider`).subscribe({
      next: (response) => {
        this.selectedAiProvider = response?.provider === 'gemini' ? 'gemini' : 'openai';
      },
      error: () => {
        this.selectedAiProvider = 'openai';
      }
    });
  }

  private resetForm(): void {
    this.productName = '';
    this.productPrice = null;
    this.productCategoryId = null;
    this.productType = '';
    this.productSubCategory = '';
    this.productPrimaryColor = '';
    this.productColor = '';
    this.productColorFamily = '';
    this.setProductDescription('');
    this.productSeoTitle = '';
    this.productSeoMetaDescription = '';
    this.productTags = '';
    this.productSize = '';
    this.productDesign = '';
    this.productPattern = '';
    this.productStyle = '';
    this.productMaterial = '';
    this.productFinish = '';
    this.productOccasion = '';
    this.productEmbellishments = '';
    this.productCraftType = '';
    this.productTexture = '';
    this.productVisualDensity = '';
    this.productShape = '';
    this.productUsage = '';
    this.productAestheticTags = '';
    this.productCulturalInference = '';
    this.productQualityInference = '';
    this.isGeneratingDescription = false;
    this.revokeAllPreviews();
    this.selectedImages = [];
    this.editExistingImages = [];
  }

  private setAiIndexingStatus(status?: AiIndexingStatus): void {
    if (!status) {
      this.aiIndexingMessage = '';
      this.aiIndexingState = 'info';
      return;
    }

    if (status.mode === 'off') {
      this.aiIndexingState = 'info';
      this.aiIndexingMessage = 'Primary image embedding is currently disabled.';
      return;
    }

    if (status.mode === 'async') {
      this.aiIndexingState = 'info';
      this.aiIndexingMessage = 'Primary image embedding queued in background.';
      return;
    }

    if (status.stored) {
      this.aiIndexingState = 'success';
      this.aiIndexingMessage = 'Primary image embedding saved to Vector DB.';
      return;
    }

    this.aiIndexingState = 'error';
    this.aiIndexingMessage = `Primary image embedding failed: ${status.message || 'Unknown error'}`;
  }

  private revokeAllPreviews(): void {
    this.selectedImages.forEach(img => URL.revokeObjectURL(img.previewUrl));
    this.selectedImages = [];
  }

  private setProductDescription(value: string): void {
    this.productDescription = this.normalizeDescriptionHtml(value);
  }

  private normalizeDescriptionHtml(value: string): string {
    const input = String(value || '').trim();
    if (!input) {
      return '';
    }

    if (!/[<>]/.test(input)) {
      return input
        .split(/\n{2,}/)
        .map((chunk) => `<p>${chunk.replace(/\n/g, '<br>')}</p>`)
        .join('');
    }

    return input
      .replace(/<div>/gi, '<p>')
      .replace(/<\/div>/gi, '</p>')
      .replace(/<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, '')
      .trim();
  }

  private applyAiHints(aiAnalysis?: GenerateDescriptionResponse['ai_analysis']): void {
    if (!aiAnalysis) {
      return;
    }

    if (!this.productColor.trim() && aiAnalysis.colors?.length) {
      this.productColor = aiAnalysis.colors.join(', ');
    }
    if (!this.productSize.trim() && aiAnalysis.size) {
      this.productSize = aiAnalysis.size;
    }
    if (!this.productDesign.trim() && aiAnalysis.design?.length) {
      this.productDesign = aiAnalysis.design.join(', ');
    }
    if (!this.productPattern.trim() && aiAnalysis.pattern?.length) {
      this.productPattern = aiAnalysis.pattern.join(', ');
    }
    if (!this.productStyle.trim() && aiAnalysis.style?.length) {
      this.productStyle = aiAnalysis.style.join(', ');
    }
    if (!this.productMaterial.trim() && aiAnalysis.material?.length) {
      this.productMaterial = aiAnalysis.material.join(', ');
    }
  }

  private applyDetailedAiAttributes(attributes?: ProductAttributes): void {
    if (!attributes) {
      return;
    }

    if (!this.productType.trim() && attributes.product_type) {
      this.productType = attributes.product_type;
    }
    if (!this.productSubCategory.trim() && attributes.sub_category) {
      this.productSubCategory = attributes.sub_category;
    }
    if (!this.productPrimaryColor.trim() && attributes.primary_color) {
      this.productPrimaryColor = attributes.primary_color;
    }
    if (!this.productColor.trim() && attributes.secondary_colors?.length) {
      this.productColor = attributes.secondary_colors.join(', ');
    }
    if (!this.productColorFamily.trim() && attributes.color_family?.length) {
      this.productColorFamily = attributes.color_family.join(', ');
    }
    if (!this.productMaterial.trim() && attributes.material_estimated?.length) {
      this.productMaterial = attributes.material_estimated.join(', ');
    }
    if (!this.productFinish.trim() && attributes.finish) {
      this.productFinish = attributes.finish;
    }
    if (!this.productStyle.trim() && attributes.style?.length) {
      this.productStyle = attributes.style.join(', ');
    }
    if (!this.productOccasion.trim() && attributes.occasion?.length) {
      this.productOccasion = attributes.occasion.join(', ');
    }
    if (!this.productPattern.trim() && attributes.pattern?.length) {
      this.productPattern = attributes.pattern.join(', ');
    }
    if (!this.productDesign.trim() && attributes.design_elements?.length) {
      this.productDesign = attributes.design_elements.join(', ');
    }
    if (!this.productEmbellishments.trim() && attributes.embellishments?.length) {
      this.productEmbellishments = attributes.embellishments.join(', ');
    }
    if (!this.productCraftType.trim() && attributes.craft_type?.length) {
      this.productCraftType = attributes.craft_type.join(', ');
    }
    if (!this.productTexture.trim() && attributes.texture) {
      this.productTexture = attributes.texture;
    }
    if (!this.productVisualDensity.trim() && attributes.visual_density) {
      this.productVisualDensity = attributes.visual_density;
    }
    if (!this.productShape.trim() && attributes.shape) {
      this.productShape = attributes.shape;
    }
    if (!this.productUsage.trim() && attributes.usage?.length) {
      this.productUsage = attributes.usage.join(', ');
    }
    if (!this.productAestheticTags.trim() && attributes.aesthetic_tags?.length) {
      this.productAestheticTags = attributes.aesthetic_tags.join(', ');
    }
    if (!this.productCulturalInference.trim() && attributes.cultural_inference) {
      this.productCulturalInference = attributes.cultural_inference;
    }
    if (!this.productQualityInference.trim() && attributes.quality_inference) {
      this.productQualityInference = attributes.quality_inference;
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

  get selectedCurrency(): DisplayCurrency {
    return this.currencyPreferenceService.getCurrency();
  }

}
