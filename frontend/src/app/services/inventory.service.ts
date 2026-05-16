import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../config/app-config';

export interface InventorySummary {
  totalProducts: number;
  totalStockQuantity: number;
  inventoryValue: number;
}

export interface LowStockProduct {
  product_id: number;
  name: string;
  stock: number;
  basePrice: number;
  costPrice: number;
}

export interface OutOfStockProduct {
  product_id: number;
  name: string;
  stock: 0;
  basePrice: number;
  costPrice: number;
}

export interface AllProductInventory {
  id: number;
  name: string;
  image_url: string;
  category: string;
  total_added_quantity: number;
  current_stock: number;
  sold_quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private baseUrl = `${APP_CONFIG.API_URL}/dashboard/inventory`;

  constructor(private http: HttpClient) {}

  getInventorySummary(): Observable<InventorySummary> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<InventorySummary>(`${this.baseUrl}/inventory-summary`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }

  getLowStockProducts(threshold: number = 5): Observable<LowStockProduct[]> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<LowStockProduct[]>(`${this.baseUrl}/low-stock?threshold=${threshold}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }

  getOutOfStockProducts(): Observable<OutOfStockProduct[]> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<OutOfStockProduct[]>(`${this.baseUrl}/out-of-stock`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }

  getAllProductsInventory(): Observable<{ total: number; products: AllProductInventory[] }> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<{ total: number; products: AllProductInventory[] }>(
      `${this.baseUrl}/all-products`,
      { headers: { Authorization: token ? `Bearer ${token}` : '' } }
    );
  }
}
