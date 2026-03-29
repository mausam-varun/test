import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem, CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { AuthSessionService } from '../services/auth-session.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private readonly checkoutDraftStorageKey = 'checkout_last_details';

  cartItems: CartItem[] = [];
  isSubmitting = false;
  submitErrorMessage = '';
  submitSuccessMessage = '';
  validationMessage = '';
  placedOrderNumber = '';

  private readonly subscriptions = new Subscription();

  fullName = '';
  email = '';
  phone = '';
  addressLine1 = '';
  addressLine2 = '';
  city = '';
  state = '';
  postalCode = '';
  country = 'India';
  paymentMethod: 'cod' | 'card' | 'upi' = 'cod';

  constructor(
    private readonly cartService: CartService,
    private readonly orderService: OrderService,
    private readonly authSessionService: AuthSessionService
  ) {}

  ngOnInit(): void {
    this.restoreCheckoutDraft();

    this.subscriptions.add(
      this.cartService.cartItems$.subscribe((items) => {
        this.cartItems = items;
      })
    );

    this.subscriptions.add(
      this.authSessionService.user$.subscribe((user) => {
        const sessionEmail = String(user?.email || '').trim();
        if (sessionEmail) {
          this.email = sessionEmail;
          this.saveCheckoutDraft();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.saveCheckoutDraft();
    this.subscriptions.unsubscribe();
  }

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get shipping(): number {
    return this.subtotal >= 50 ? 0 : 4.99;
  }

  get tax(): number {
    return this.subtotal * 0.05;
  }

  get total(): number {
    return this.subtotal + this.shipping + this.tax;
  }

  updateItemQuantity(itemId: number, quantity: number): void {
    this.cartService.updateQuantity(itemId, quantity);
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }

  placeOrder(): void {
    this.saveCheckoutDraft();

    this.validationMessage = '';
    this.submitErrorMessage = '';
    this.submitSuccessMessage = '';
    this.placedOrderNumber = '';

    if (!this.cartItems.length) {
      this.validationMessage = 'Your cart is empty. Add products before placing an order.';
      return;
    }

    const validationError = this.getValidationError();
    if (validationError) {
      this.validationMessage = validationError;
      return;
    }

    this.isSubmitting = true;

    this.orderService.placeOrder({
      fullName: this.fullName.trim(),
      email: String(this.authSessionService.getCurrentUser()?.email || this.email).trim(),
      phone: this.phone.trim(),
      addressLine1: this.addressLine1.trim(),
      addressLine2: this.addressLine2.trim(),
      city: this.city.trim(),
      state: this.state.trim(),
      postalCode: this.postalCode.trim(),
      country: this.country.trim() || 'India',
      paymentMethod: this.paymentMethod,
      items: this.cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity
      }))
    }).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccessMessage = response.message || 'Order placed successfully.';
        this.placedOrderNumber = response.order?.order_number || '';
        this.cartService.clearCart();
          this.saveCheckoutDraft();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitErrorMessage = error?.error?.message || 'Failed to place order. Please try again.';
      }
    });
  }

  private getValidationError(): string | null {
    if (!this.fullName.trim()) {
      return 'Full name is required.';
    }

    if (!this.email.trim()) {
      return 'Email is required.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim())) {
      return 'Please enter a valid email address.';
    }

    if (!this.phone.trim()) {
      return 'Phone number is required.';
    }

    if (!this.addressLine1.trim() || !this.city.trim() || !this.state.trim() || !this.postalCode.trim()) {
      return 'Address line 1, city, state, and postal code are required.';
    }

    return null;
  }

  private resetForm(): void {
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.city = '';
    this.state = '';
    this.postalCode = '';
    this.country = 'India';
    this.paymentMethod = 'cod';
  }

  private saveCheckoutDraft(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const draft = {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      country: this.country,
      paymentMethod: this.paymentMethod
    };

    localStorage.setItem(this.checkoutDraftStorageKey, JSON.stringify(draft));
  }

  private restoreCheckoutDraft(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const raw = localStorage.getItem(this.checkoutDraftStorageKey);
    if (!raw) {
      return;
    }

    try {
      const draft = JSON.parse(raw) as Partial<{
        fullName: string;
        email: string;
        phone: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        paymentMethod: 'cod' | 'card' | 'upi';
      }>;

      this.fullName = String(draft.fullName || '');
      this.email = String(draft.email || '');
      this.phone = String(draft.phone || '');
      this.addressLine1 = String(draft.addressLine1 || '');
      this.addressLine2 = String(draft.addressLine2 || '');
      this.city = String(draft.city || '');
      this.state = String(draft.state || '');
      this.postalCode = String(draft.postalCode || '');
      this.country = String(draft.country || 'India');

      if (draft.paymentMethod === 'cod' || draft.paymentMethod === 'card' || draft.paymentMethod === 'upi') {
        this.paymentMethod = draft.paymentMethod;
      }
    } catch {
      localStorage.removeItem(this.checkoutDraftStorageKey);
    }
  }
}
