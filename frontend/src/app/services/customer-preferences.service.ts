import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../config/app-config';

export interface SavedAddress {
  id: number;
  user_id: number;
  recipient_name: string;
  phone: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  is_default: boolean;
  last_used_at: string;
  created_at: string;
  updated_at: string;
}

export interface SavedPaymentMethod {
  id: number;
  user_id: number;
  payment_method: 'cod' | 'card' | 'upi';
  is_default: boolean;
  last_used_at: string;
  created_at: string;
  updated_at: string;
}

export interface CustomerPreferencesResponse {
  status: string;
  addresses: SavedAddress[];
  paymentMethods: SavedPaymentMethod[];
}

@Injectable({
  providedIn: 'root'
})
export class CustomerPreferencesService {
  constructor(private readonly http: HttpClient) {}

  getPreferences(): Observable<CustomerPreferencesResponse> {
    return this.http.get<CustomerPreferencesResponse>(API_ENDPOINTS.customerPreferences, this.getAuthOptions());
  }

  private getAuthOptions(): { headers?: HttpHeaders } {
    try {
      const token = localStorage.getItem('user_token') || '';
      return token
        ? { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) }
        : {};
    } catch {
      return {};
    }
  }
}