import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InventoryService, InventorySummary, LowStockProduct, OutOfStockProduct, AllProductInventory } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-report',
  templateUrl: './inventory-report.component.html',
  styleUrls: ['./inventory-report.component.scss']
})
export class InventoryReportComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Data
  summary: InventorySummary | null = null;
  lowStockProducts: LowStockProduct[] = [];
  outOfStockProducts: OutOfStockProduct[] = [];
  allProducts: AllProductInventory[] = [];

  // Loading states
  isLoadingSummary = false;
  isLoadingLowStock = false;
  isLoadingOutOfStock = false;
  isLoadingAllProducts = false;

  // Error states
  errorSummary: string | null = null;
  errorLowStock: string | null = null;
  errorOutOfStock: string | null = null;
  errorAllProducts: string | null = null;

  // Search/filter
  searchLowStock = '';
  searchOutOfStock = '';
  searchAllProducts = '';
  lowStockThreshold = 5;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadAllData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAllData(): void {
    this.fetchInventorySummary();
    this.fetchLowStockProducts();
    this.fetchOutOfStockProducts();
    this.fetchAllProductsInventory();
  }

  fetchInventorySummary(): void {
    this.isLoadingSummary = true;
    this.errorSummary = null;

    this.inventoryService
      .getInventorySummary()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.summary = data;
          this.isLoadingSummary = false;
        },
        error: (err) => {
          this.errorSummary = 'Failed to load inventory summary';
          this.isLoadingSummary = false;
          console.error('Error fetching inventory summary:', err);
        }
      });
  }

  fetchLowStockProducts(): void {
    this.isLoadingLowStock = true;
    this.errorLowStock = null;

    this.inventoryService
      .getLowStockProducts(this.lowStockThreshold)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.lowStockProducts = data || [];
          this.isLoadingLowStock = false;
        },
        error: (err) => {
          this.errorLowStock = 'Failed to load low stock products';
          this.isLoadingLowStock = false;
          console.error('Error fetching low stock products:', err);
        }
      });
  }

  fetchOutOfStockProducts(): void {
    this.isLoadingOutOfStock = true;
    this.errorOutOfStock = null;

    this.inventoryService
      .getOutOfStockProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.outOfStockProducts = data || [];
          this.isLoadingOutOfStock = false;
        },
        error: (err) => {
          this.errorOutOfStock = 'Failed to load out of stock products';
          this.isLoadingOutOfStock = false;
          console.error('Error fetching out of stock products:', err);
        }
      });
  }

  // Filter low stock products by search
  get filteredLowStock(): LowStockProduct[] {
    if (!this.searchLowStock.trim()) {
      return this.lowStockProducts;
    }
    const query = this.searchLowStock.toLowerCase();
    return this.lowStockProducts.filter(p => p.name.toLowerCase().includes(query));
  }

  // Filter out of stock products by search
  get filteredOutOfStock(): OutOfStockProduct[] {
    if (!this.searchOutOfStock.trim()) {
      return this.outOfStockProducts;
    }
    const query = this.searchOutOfStock.toLowerCase();
    return this.outOfStockProducts.filter(p => p.name.toLowerCase().includes(query));
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  retryFetch(section: 'summary' | 'low-stock' | 'out-of-stock' | 'all-products'): void {
    if (section === 'summary') this.fetchInventorySummary();
    if (section === 'low-stock') this.fetchLowStockProducts();
    if (section === 'out-of-stock') this.fetchOutOfStockProducts();
    if (section === 'all-products') this.fetchAllProductsInventory();
  }

  onThresholdChange(): void {
    this.fetchLowStockProducts();
  }

  fetchAllProductsInventory(): void {
    this.isLoadingAllProducts = true;
    this.errorAllProducts = null;
    this.inventoryService
      .getAllProductsInventory()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.allProducts = res.products || [];
          this.isLoadingAllProducts = false;
        },
        error: () => {
          this.errorAllProducts = 'Failed to load product inventory data';
          this.isLoadingAllProducts = false;
        }
      });
  }

  get filteredAllProducts(): AllProductInventory[] {
    if (!this.searchAllProducts.trim()) return this.allProducts;
    const q = this.searchAllProducts.toLowerCase();
    return this.allProducts.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
}
