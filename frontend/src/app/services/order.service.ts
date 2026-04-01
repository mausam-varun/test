import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../config/app-config';

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

export interface OrderTrackingResponse {
  order_number: string;
  order_status: string;
  awb_code: string | null;
  courier_name: string | null;
  tracking_url: string | null;
  shiprocket_order_id: string | null;
  shiprocket_shipment_id: string | null;
  customer_name: string;
  destination: string;
  ordered_at: string;
  live_tracking: any;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly apiBaseUrl = API_ENDPOINTS.orders;

  constructor(private readonly http: HttpClient) {}

  placeOrder(payload: PlaceOrderPayload): Observable<PlaceOrderResponse> {
    return this.http.post<PlaceOrderResponse>(this.apiBaseUrl, payload);
  }

  getOrderTracking(orderNumber: string): Observable<OrderTrackingResponse> {
    return this.http.get<OrderTrackingResponse>(API_ENDPOINTS.orderTracking(orderNumber));
  }
}