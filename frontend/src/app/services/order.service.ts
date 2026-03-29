import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type CheckoutPaymentMethod = 'cod' | 'card' | 'upi';

export interface PlaceOrderItem {
  productId: number;
  quantity: number;
}

export interface PlaceOrderPayload {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  paymentMethod: CheckoutPaymentMethod;
  items: PlaceOrderItem[];
}

export interface PlacedOrderItem {
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  line_total: number;
}

export interface PlacedOrder {
  id: number;
  order_number: string;
  subtotal_amount: number;
  shipping_amount: number;
  tax_amount: number;
  total_amount: number;
  payment_method: 'cod' | 'online';
  checkout_payment_method: CheckoutPaymentMethod;
  payment_status: 'pending' | 'paid' | 'failed';
  order_status: 'placed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: PlacedOrderItem[];
}

export interface PlaceOrderResponse {
  message: string;
  order: PlacedOrder;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly apiBaseUrl = 'http://localhost:5001/api/orders';

  constructor(private readonly http: HttpClient) {}

  placeOrder(payload: PlaceOrderPayload): Observable<PlaceOrderResponse> {
    return this.http.post<PlaceOrderResponse>(this.apiBaseUrl, payload);
  }
}