import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface AddCartPayload {
  id: number;
  name: string;
  image: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storageKey = 'divara_cart_items';
  private readonly cartItemsSubject = new BehaviorSubject<CartItem[]>(this.loadFromStorage());

  readonly cartItems$ = this.cartItemsSubject.asObservable();

  getCartItemsSnapshot(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  getCartCountSnapshot(): number {
    return this.cartItemsSubject.value.reduce((sum, item) => sum + item.quantity, 0);
  }

  addToCart(payload: AddCartPayload): void {
    const currentItems = this.getCartItemsSnapshot();
    const existingItem = currentItems.find((item) => item.id === payload.id);

    let nextItems: CartItem[];
    if (existingItem) {
      nextItems = currentItems.map((item) =>
        item.id === payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      nextItems = [...currentItems, { ...payload, quantity: 1 }];
    }

    this.setCartState(nextItems);
  }

  updateQuantity(itemId: number, quantity: number): void {
    const normalizedQuantity = Math.max(1, Math.floor(quantity));
    const nextItems = this.getCartItemsSnapshot().map((item) =>
      item.id === itemId ? { ...item, quantity: normalizedQuantity } : item
    );

    this.setCartState(nextItems);
  }

  removeFromCart(itemId: number): void {
    const nextItems = this.getCartItemsSnapshot().filter((item) => item.id !== itemId);
    this.setCartState(nextItems);
  }

  clearCart(): void {
    this.setCartState([]);
  }

  private setCartState(items: CartItem[]): void {
    this.cartItemsSubject.next(items);
    this.saveToStorage(items);
  }

  private loadFromStorage(): CartItem[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        return [];
      }

      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed
        .filter((item) => item && typeof item.id === 'number')
        .map((item) => ({
          id: item.id,
          name: String(item.name || ''),
          image: String(item.image || ''),
          price: Number(item.price || 0),
          quantity: Math.max(1, Number(item.quantity || 1))
        }));
    } catch {
      return [];
    }
  }

  private saveToStorage(items: CartItem[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(items));
    } catch {
      // Swallow storage errors so cart functionality still works in-memory.
    }
  }
}
