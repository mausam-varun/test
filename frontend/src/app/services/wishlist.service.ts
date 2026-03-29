import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface WishlistItem {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private readonly storageKey = 'divara_wishlist_items';
  private readonly wishlistItemsSubject = new BehaviorSubject<WishlistItem[]>(this.loadFromStorage());

  readonly wishlistItems$ = this.wishlistItemsSubject.asObservable();

  getWishlistSnapshot(): WishlistItem[] {
    return this.wishlistItemsSubject.value;
  }

  isInWishlist(itemId: number): boolean {
    return this.wishlistItemsSubject.value.some((item) => item.id === itemId);
  }

  addToWishlist(item: WishlistItem): void {
    if (this.isInWishlist(item.id)) {
      return;
    }

    const nextItems = [...this.wishlistItemsSubject.value, item];
    this.setWishlistState(nextItems);
  }

  removeFromWishlist(itemId: number): void {
    const nextItems = this.wishlistItemsSubject.value.filter((item) => item.id !== itemId);
    this.setWishlistState(nextItems);
  }

  clearWishlist(): void {
    this.setWishlistState([]);
  }

  private setWishlistState(items: WishlistItem[]): void {
    this.wishlistItemsSubject.next(items);
    this.saveToStorage(items);
  }

  private loadFromStorage(): WishlistItem[] {
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
          rating: Number(item.rating || 0),
          reviews: Number(item.reviews || 0)
        }));
    } catch {
      return [];
    }
  }

  private saveToStorage(items: WishlistItem[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(items));
    } catch {
      // Swallow storage errors so wishlist still works in-memory.
    }
  }
}
