import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderSummary {
  pending: number;
  shipped: number;
  delivered: number;
  cancelled: number;
}

export interface OrderStatusCount {
  status: string;
  count: number;
}

export interface Order {
  id: number;
  customer_name: string;
  total_amount: number;
  status: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {
  private baseUrl = '/api/dashboard/order';

  constructor(private http: HttpClient) {}

  getOrderSummary(): Observable<OrderSummary> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<OrderSummary>(`${this.baseUrl}/order-summary`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }

  getOrdersByStatus(): Observable<OrderStatusCount[]> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<OrderStatusCount[]>(`${this.baseUrl}/orders-by-status`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }

  getRecentOrders(days: number = 30): Observable<Order[]> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<Order[]>(`${this.baseUrl}/recent-orders?days=${days}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
}
