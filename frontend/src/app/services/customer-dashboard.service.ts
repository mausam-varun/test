import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CustomerSummary {
  totalCustomers: number;
}

export interface NewVsReturning {
  newCustomers: number;
  returningCustomers: number;
}

export interface TopCustomer {
  id: number;
  name: string;
  email: string;
  totalOrders: number;
  totalSpend: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerDashboardService {
  private baseUrl = '/api/dashboard/customer';

  constructor(private http: HttpClient) {}

  getCustomerSummary(days: number = 30): Observable<CustomerSummary> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<CustomerSummary>(`${this.baseUrl}/customer-summary?days=${days}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }

  getNewVsReturning(days: number = 30): Observable<NewVsReturning> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<NewVsReturning>(`${this.baseUrl}/new-vs-returning?days=${days}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }

  getTopCustomers(days: number = 30): Observable<TopCustomer[]> {
    const token = localStorage.getItem('admin_token');
    return this.http.get<TopCustomer[]>(`${this.baseUrl}/top-customers?days=${days}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
}
