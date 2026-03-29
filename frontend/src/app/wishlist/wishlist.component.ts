import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { WishlistItem, WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlistItems: WishlistItem[] = [];

  private readonly subscriptions = new Subscription();

  constructor(
    private readonly cartService: CartService,
    private readonly wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.wishlistService.wishlistItems$.subscribe((items) => {
        this.wishlistItems = items;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  removeFromWishlist(itemId: number): void {
    this.wishlistService.removeFromWishlist(itemId);
  }

  moveToCart(item: WishlistItem): void {
    this.cartService.addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price
    });

    this.removeFromWishlist(item.id);
  }
}
