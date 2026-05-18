import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem, CartService } from '../services/cart.service';
import { CustomerPreferencesService, SavedAddress, SavedPaymentMethod } from '../services/customer-preferences.service';
import { OrderService } from '../services/order.service';
import { AuthSessionService } from '../services/auth-session.service';
import { APP_CONFIG } from '../config/app-config';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-checkout',
  template: `<main class="checkout-page">
  <section class="checkout-shell">
    <div class="checkout-grid">
      <section class="details-card">
        <header class="section-head">
          <span class="section-icon">📍</span>
          <div>
            <h2>Shipping Details</h2>
            <p>Please enter your details to continue</p>
          </div>
        </header>

        <div class="checkout-status is-error" *ngIf="validationMessage">
          {{ validationMessage }}
        </div>

        <div class="checkout-status is-error" *ngIf="submitErrorMessage">
          {{ submitErrorMessage }}
        </div>

        <div class="checkout-status is-success" *ngIf="submitSuccessMessage">
          <strong>{{ submitSuccessMessage }}</strong>
          <span *ngIf="placedOrderNumber">Order Number: <b>{{ placedOrderNumber }}</b></span>
          <a *ngIf="placedOrderNumber" [routerLink]="['/track-order', placedOrderNumber]" class="track-order-link">
            Track Your Order
          </a>
        </div>

        <section class="saved-checkout-preferences" *ngIf="savedAddresses.length || savedPaymentMethods.length">
          <div class="saved-checkout-preferences__group" *ngIf="savedAddresses.length">
            <div class="saved-checkout-preferences__head">
              <h3>Saved Addresses</h3>
              <p>Tap an address to fill your delivery details.</p>
            </div>
            <div class="saved-checkout-preferences__list">
              <button
                type="button"
                class="saved-checkout-preferences__address"
                *ngFor="let address of savedAddresses"
                [class.is-active]="selectedSavedAddressId === address.id"
                (click)="applySavedAddress(address)">
                <strong>{{ address.recipient_name }}</strong>
                <span>{{ formatSavedAddress(address) }}</span>
              </button>
            </div>
          </div>

          <div class="saved-checkout-preferences__group" *ngIf="savedPaymentMethods.length">
            <div class="saved-checkout-preferences__head">
              <h3>Saved Payment Methods</h3>
              <p>Choose a previously used payment method.</p>
            </div>
            <div class="saved-checkout-preferences__chips">
              <button
                type="button"
                class="saved-checkout-preferences__chip"
                *ngFor="let method of savedPaymentMethods"
                [class.is-active]="paymentMethod === method.payment_method"
                (click)="applySavedPaymentMethod(method)">
                {{ getSavedPaymentMethodLabel(method) }}
              </button>
            </div>
          </div>
        </section>

        <div class="form-grid">
          <label>
            Full Name
            <input type="text" [(ngModel)]="fullName" placeholder="Enter your full name">
          </label>

          <label>
            Email
            <input type="email" [(ngModel)]="email" placeholder="name@example.com">
          </label>

          <label class="phone-group">
            Phone
            <ngx-intl-tel-input
              [cssClass]="'intl-phone-input'"
              [preferredCountries]="[CountryISO.India]"
              [enableAutoCountrySelect]="true"
              [enablePlaceholder]="true"
              [searchCountryFlag]="true"
              [searchCountryField]="[SearchCountryField.Iso2, SearchCountryField.Name]"
              [selectFirstCountry]="false"
              [selectedCountryISO]="CountryISO.India"
              [phoneValidation]="true"
              [separateDialCode]="true"
              name="phone"
              [formControl]="phoneControl">
            </ngx-intl-tel-input>
            <span class="field-error" *ngIf="phoneControl.touched && phoneControl.invalid">
              Please enter a valid phone number.
            </span>
          </label>

          <div class="full-width address-search-field">
            <label for="checkout-address-search">Address Line 1</label>
            <input
              id="checkout-address-search"
              type="text"
              [(ngModel)]="addressLine1"
              (ngModelChange)="onAddressSearchChange($event)"
              (focus)="onAddressSearchFocus()"
              (blur)="hideAddressSuggestionsSoon()"
              placeholder="Search address or street"
              autocomplete="off">

            <div class="address-suggestions" *ngIf="showAddressSuggestions">
              <button type="button" class="address-suggestion address-suggestion--current" (mousedown)="useCurrentLocation($event)">
                <strong>{{ isUsingCurrentLocation ? 'Detecting location...' : 'Use current location' }}</strong>
                <span>{{ currentLocationMessage || 'Fill address from this device location' }}</span>
              </button>

              <button
                type="button"
                class="address-suggestion"
                *ngFor="let suggestion of addressSuggestions"
                (mousedown)="selectAddressSuggestion(suggestion, $event)">
                <strong>{{ suggestion.structured_formatting?.main_text || suggestion.description }}</strong>
                <span>{{ suggestion.structured_formatting?.secondary_text || suggestion.description }}</span>
              </button>

              <div class="address-suggestion address-suggestion--muted" *ngIf="isAddressSearchLoading">Searching...</div>
              <div class="address-suggestion address-suggestion--muted" *ngIf="shouldShowNoAddressFound">No address found</div>
            </div>

            <div class="current-location-map" *ngIf="showCurrentLocationMap">
              <div id="checkout-current-location-map" class="current-location-map__canvas" aria-label="Current location map"></div>
              <p>Current location selected</p>
            </div>
          </div>

          <label>
            Address Line 2 (optional)
            <input type="text" [(ngModel)]="addressLine2" placeholder="Apartment, suite, etc.">
          </label>

          <label>
            City
            <input type="text" [(ngModel)]="city" placeholder="City" readonly>
          </label>

          <label>
            State
            <input type="text" [(ngModel)]="state" placeholder="Select state" readonly>
          </label>

          <label>
            Postal Code
            <input type="text" [(ngModel)]="postalCode" placeholder="Postal code">
          </label>

          <label class="full-width">
            Country
            <input type="text" [(ngModel)]="country" placeholder="Country" readonly>
          </label>
        </div>

        <div class="payment-block">
          <header class="section-head section-head--compact">
            <span class="section-icon">🛡️</span>
            <h3>Payment Method</h3>
          </header>

          <div class="payment-options">
            <label class="payment-option" [class.active]="paymentMethod === 'cod'">
              <input type="radio" name="paymentMethod" value="cod" [(ngModel)]="paymentMethod">
              <span class="payment-copy">
                <span class="payment-main">Cash on Delivery</span>
                <span class="payment-sub">Pay securely upon delivery</span>
              </span>
              <span class="payment-chip">COD Available</span>
            </label>

            <label class="payment-option" [class.active]="paymentMethod === 'card'">
              <input type="radio" name="paymentMethod" value="card" [(ngModel)]="paymentMethod">
              <span class="payment-copy">
                <span class="payment-main">Card</span>
                <span class="payment-sub">Pay with debit or credit card</span>
              </span>
              <span class="payment-chip payment-chip--muted">Secure</span>
            </label>

            <label class="payment-option" [class.active]="paymentMethod === 'upi'">
              <input type="radio" name="paymentMethod" value="upi" [(ngModel)]="paymentMethod">
              <span class="payment-copy">
                <span class="payment-main">UPI</span>
                <span class="payment-sub">Pay using any UPI app</span>
              </span>
              <span class="payment-chip payment-chip--muted">Instant</span>
            </label>
          </div>
        </div>

        <button
          type="button"
          class="place-order-btn place-order-btn--mobile"
          (click)="placeOrder()"
          [disabled]="!cartItems.length || isSubmitting">
          {{ isSubmitting ? 'Placing Order...' : 'Place Order' }}
        </button>

        <div class="trust-strip">
          <div class="trust-item">
            <strong>100% Secure</strong>
            <span>Secure Checkout</span>
          </div>
          <div class="trust-item">
            <strong>Easy Returns</strong>
            <span>7-day return policy</span>
          </div>
          <div class="trust-item">
            <strong>Fast Delivery</strong>
            <span>On all orders</span>
          </div>
          <div class="trust-item">
            <strong>Help Center</strong>
            <span>24/7 Support</span>
          </div>
        </div>
      </section>

      <aside class="summary-card">
        <header class="section-head">
          <span class="section-icon">🛍️</span>
          <h2>Order Summary</h2>
        </header>

        <div class="summary-items" *ngIf="cartItems.length; else emptyCartState">
          <article class="summary-item" *ngFor="let item of cartItems">
            <img [src]="item.image" [alt]="item.name">
            <div class="summary-item-body">
              <h4>{{ item.name }}</h4>

              <div class="summary-item-row">
                <label>Qty:</label>
                <div class="summary-quantity-control" aria-label="Quantity controls">
                  <button
                    type="button"
                    class="summary-quantity-btn"
                    (click)="changeItemQuantity(item, -1)"
                    [disabled]="item.quantity <= 1"
                    aria-label="Decrease quantity">
                    -
                  </button>
                  <span class="summary-quantity-value">{{ item.quantity }}</span>
                  <button
                    type="button"
                    class="summary-quantity-btn"
                    (click)="changeItemQuantity(item, 1)"
                    aria-label="Increase quantity">
                    +
                  </button>
                </div>

                <label class="size-label">Size:</label>
                <select
                  [(ngModel)]="selectedSizes[item.id]"
                  [ngModelOptions]="{ updateOn: 'change' }"
                  [attr.name]="'size-' + item.id">
                  <option value="" disabled selected>Select size</option>
                  <option *ngFor="let sizeOption of getSizeOptions(item)" [value]="sizeOption">
                    {{ sizeOption }}
                  </option>
                </select>
              </div>
            </div>

            <div class="summary-item-price">
              <button type="button" class="remove-item-btn" (click)="removeItem(item.id)" aria-label="Remove item">🗑️</button>
              <strong>{{ (item.price * item.quantity) | displayCurrency:0 }}</strong>
            </div>
          </article>
        </div>

        <ng-template #emptyCartState>
          <p class="empty-cart">Your cart is empty. Add products from Home or Shop to continue.</p>
        </ng-template>

        <div class="amount-lines">
          <div class="summary-line">
            <span>Subtotal</span>
            <span>{{ subtotal | displayCurrency:0 }}</span>
          </div>
          <div class="summary-line">
            <span>Shipping</span>
            <span>
              <ng-container *ngIf="shipping === 0; else shippingValue">Free</ng-container>
              <ng-template #shippingValue>{{ shipping | displayCurrency:0 }}</ng-template>
            </span>
          </div>
          <div class="summary-line">
            <span>Tax</span>
            <span>{{ tax | displayCurrency:0 }}</span>
          </div>
        </div>

        <div class="summary-total">
          <span>Total Amount</span>
          <strong>{{ total | displayCurrency:0 }}</strong>
        </div>

        <button type="button" class="place-order-btn place-order-btn--summary" (click)="placeOrder()" [disabled]="!cartItems.length || isSubmitting">
          {{ isSubmitting ? 'Placing Order...' : 'Place Order' }}
        </button>

        <p class="secure-note">Your data is safe and secure with us.</p>

        <div class="payment-logos">
          <span><i class="payment-logo-icon payment-logo-icon--visa">V</i>VISA</span>
          <span><i class="payment-logo-icon payment-logo-icon--mastercard"></i>Mastercard</span>
          <span><i class="payment-logo-icon payment-logo-icon--rupay">R</i>RuPay</span>
          <span><i class="payment-logo-icon payment-logo-icon--upi">U</i>UPI</span>
          <span><i class="payment-logo-icon payment-logo-icon--paytm">P</i>Paytm</span>
        </div>
      </aside>
    </div>
  </section>
</main>
`,
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit, OnDestroy {
  private static googlePlacesScriptPromise?: Promise<void>;
  private readonly fallbackSizeOptions = ['2.2', '2.4', '2.6', '2.8', '2.10', '2.12'];

  // Expose enums to template
  readonly SearchCountryField = SearchCountryField;
  readonly CountryISO = CountryISO;
  readonly PhoneNumberFormat = PhoneNumberFormat;

  phoneControl = new FormControl(undefined);

  @ViewChild('addressSearchInput') private readonly addressSearchInput?: ElementRef<HTMLInputElement>;

  private readonly checkoutDraftStorageKey = 'checkout_last_details';
  private readonly googlePlacesApiKey = APP_CONFIG.GOOGLE_PLACES_API_KEY;
  private autocompleteService: any;
  private autocompleteSessionToken: any;
  private placesService: any;
  private placesServiceElement?: HTMLDivElement;
  private currentLocationMap?: any;
  private currentLocationMarker?: any;
  private addressSearchTimer?: ReturnType<typeof setTimeout>;
  private currentLocationTimer?: ReturnType<typeof setTimeout>;

  cartItems: CartItem[] = [];
  isBuyNowMode = false;   // true when coming from "Buy It Now"
  selectedSizes: { [productId: number]: string } = {};
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
  addressSuggestions: any[] = [];
  isAddressSearchLoading = false;
  showAddressSuggestions = false;
  isUsingCurrentLocation = false;
  currentLocationMessage = '';
  showCurrentLocationMap = false;
  savedAddresses: SavedAddress[] = [];
  savedPaymentMethods: SavedPaymentMethod[] = [];
  selectedSavedAddressId: number | null = null;

  get shouldShowNoAddressFound(): boolean {
    return this.addressLine1.trim().length >= 3
      && !this.isAddressSearchLoading
      && !this.isUsingCurrentLocation
      && !this.addressSuggestions.length;
  }

  constructor(
    private readonly cartService: CartService,
    private readonly orderService: OrderService,
    private readonly authSessionService: AuthSessionService,
    private readonly customerPreferencesService: CustomerPreferencesService,
    private readonly router: Router,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.restoreCheckoutDraft();

    // Buy-Now mode: show only the single buy-now item, bypass the main cart
    const buyNowItem = this.cartService.getBuyNow();
    if (buyNowItem) {
      this.isBuyNowMode = true;
      this.cartItems = [buyNowItem];
      this.selectedSizes[buyNowItem.id] = buyNowItem.size || '';
    } else {
      this.subscriptions.add(
        this.cartService.cartItems$.subscribe((items) => {
          this.cartItems = items;
          console.log('💳 Checkout cart items:', items);
          items.forEach((item) => {
            if (this.selectedSizes[item.id] === undefined) {
              this.selectedSizes[item.id] = item.size || '';
            }
            console.log(`📦 Item ${item.id} sizes:`, item.sizes);
          });
        })
      );
    }

    this.subscriptions.add(
      this.authSessionService.user$.subscribe((user) => {
        const sessionEmail = String(user?.email || '').trim();
        if (sessionEmail) {
          this.email = sessionEmail;
          this.saveCheckoutDraft();
        }

        if (user?.id) {
          this.loadSavedPreferences();
        } else {
          this.savedAddresses = [];
          this.savedPaymentMethods = [];
          this.selectedSavedAddressId = null;
        }
      })
    );
  }

  ngAfterViewInit(): void {
    this.initializeAddressAutocomplete();
  }

  ngOnDestroy(): void {
    this.saveCheckoutDraft();
    this.subscriptions.unsubscribe();
    if (this.addressSearchTimer) {
      clearTimeout(this.addressSearchTimer);
    }
    if (this.currentLocationTimer) {
      clearTimeout(this.currentLocationTimer);
    }
    this.placesServiceElement?.remove();
  }

  private initializeAddressAutocomplete(): void {
    if (!this.googlePlacesApiKey) {
      return;
    }

    this.loadGooglePlacesScript()
      .then(() => {
        const googleApi = (window as any).google;
        if (!googleApi?.maps?.places?.AutocompleteService || !googleApi?.maps?.places?.PlacesService) {
          return;
        }

        this.removeGoogleInjectedAutocompleteDom();
        this.autocompleteService = new googleApi.maps.places.AutocompleteService();
        this.autocompleteSessionToken = new googleApi.maps.places.AutocompleteSessionToken();
        this.placesServiceElement = document.createElement('div');
        this.placesServiceElement.style.display = 'none';
        document.body.appendChild(this.placesServiceElement);
        this.placesService = new googleApi.maps.places.PlacesService(this.placesServiceElement);
      })
      .catch((error) => {
        console.error('Google Places failed to load:', error);
      });
  }

  onAddressSearchChange(value: string): void {
    this.addressLine1 = value;
    this.saveCheckoutDraft();

    if (this.addressSearchTimer) {
      clearTimeout(this.addressSearchTimer);
    }

    const query = String(value || '').trim();
    if (query.length < 3) {
      this.addressSuggestions = [];
      this.showAddressSuggestions = false;
      this.isAddressSearchLoading = false;
      return;
    }

    this.showAddressSuggestions = true;
    this.isAddressSearchLoading = true;
    this.addressSearchTimer = setTimeout(() => this.fetchAddressSuggestions(query), 250);
  }

  onAddressSearchFocus(): void {
    this.showAddressSuggestions = true;
  }

  hideAddressSuggestionsSoon(): void {
    setTimeout(() => {
      this.showAddressSuggestions = false;
    }, 160);
  }

  selectAddressSuggestion(suggestion: any, event: MouseEvent): void {
    event.preventDefault();

    if (!suggestion?.place_id || !this.placesService) {
      this.addressLine1 = suggestion?.description || this.addressLine1;
      this.showAddressSuggestions = false;
      return;
    }

    this.placesService.getDetails({
      placeId: suggestion.place_id,
      fields: ['address_components', 'formatted_address', 'name'],
      sessionToken: this.autocompleteSessionToken
    }, (place: any, status: string) => {
      this.ngZone.run(() => {
        const googleApi = (window as any).google;
        if (status === googleApi?.maps?.places?.PlacesServiceStatus?.OK && place) {
          this.applySelectedAddress(place);
        } else {
          this.addressLine1 = suggestion.description || this.addressLine1;
          this.saveCheckoutDraft();
        }

        this.addressSuggestions = [];
        this.showAddressSuggestions = false;
        this.autocompleteSessionToken = googleApi?.maps?.places?.AutocompleteSessionToken
          ? new googleApi.maps.places.AutocompleteSessionToken()
          : this.autocompleteSessionToken;
      });
    });
  }

  useCurrentLocation(event: MouseEvent): void {
    event.preventDefault();

    if (this.isUsingCurrentLocation) {
      return;
    }

    if (!navigator.geolocation) {
      this.currentLocationMessage = 'Current location is not supported in this browser.';
      this.showAddressSuggestions = true;
      return;
    }

    this.isUsingCurrentLocation = true;
    this.currentLocationMessage = 'Allow location permission to continue.';
    this.showAddressSuggestions = true;
    this.addressSuggestions = [];
    this.isAddressSearchLoading = false;

    if (this.currentLocationTimer) {
      clearTimeout(this.currentLocationTimer);
    }

    this.currentLocationTimer = setTimeout(() => {
      this.ngZone.run(() => {
        if (!this.isUsingCurrentLocation) {
          return;
        }

        this.isUsingCurrentLocation = false;
        this.currentLocationMessage = 'Location request timed out. Please allow permission or search manually.';
        this.showAddressSuggestions = true;
      });
    }, 15000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (this.currentLocationTimer) {
          clearTimeout(this.currentLocationTimer);
          this.currentLocationTimer = undefined;
        }

        this.loadGooglePlacesScript()
          .then(() => {
            this.ngZone.run(() => {
              this.showCurrentLocationOnMap(position.coords.latitude, position.coords.longitude);
            });
            this.reverseGeocodeCurrentLocation(position.coords.latitude, position.coords.longitude);
          })
          .catch(() => {
            this.ngZone.run(() => {
              this.isUsingCurrentLocation = false;
              this.currentLocationMessage = 'Could not load Google location service.';
            });
          });
      },
      (error) => {
        if (this.currentLocationTimer) {
          clearTimeout(this.currentLocationTimer);
          this.currentLocationTimer = undefined;
        }

        this.ngZone.run(() => {
          this.isUsingCurrentLocation = false;
          this.currentLocationMessage = error.code === error.PERMISSION_DENIED
            ? 'Location permission was denied.'
            : 'Could not detect current location.';
          this.showAddressSuggestions = true;
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 60000
      }
    );
  }

  private reverseGeocodeCurrentLocation(latitude: number, longitude: number): void {
    const googleApi = (window as any).google;
    if (!googleApi?.maps?.Geocoder) {
      this.ngZone.run(() => {
        this.isUsingCurrentLocation = false;
        this.currentLocationMessage = 'Google geocoder is not available.';
      });
      return;
    }

    const geocoder = new googleApi.maps.Geocoder();
    geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results: any[] | null, status: string) => {
      this.ngZone.run(() => {
        if (this.currentLocationTimer) {
          clearTimeout(this.currentLocationTimer);
          this.currentLocationTimer = undefined;
        }

        this.isUsingCurrentLocation = false;

        if (status === 'OK' && results?.length) {
          this.applySelectedAddress(results[0]);
          this.addressSuggestions = [];
          this.showAddressSuggestions = false;
          this.currentLocationMessage = '';
          return;
        }

        this.currentLocationMessage = 'No address found for current location.';
        this.showAddressSuggestions = true;
      });
    });
  }

  private showCurrentLocationOnMap(latitude: number, longitude: number): void {
    this.showCurrentLocationMap = true;

    setTimeout(() => {
      const googleApi = (window as any).google;
      const mapElement = document.getElementById('checkout-current-location-map');
      if (!googleApi?.maps?.Map || !mapElement) {
        return;
      }

      const location = { lat: latitude, lng: longitude };

      this.currentLocationMap = new googleApi.maps.Map(mapElement, {
        center: location,
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        clickableIcons: false
      });

      this.currentLocationMarker = new googleApi.maps.Marker({
        position: location,
        map: this.currentLocationMap,
        title: 'Current location'
      });
    });
  }

  private fetchAddressSuggestions(query: string): void {
    if (!this.autocompleteService) {
      this.initializeAddressAutocomplete();
      this.isAddressSearchLoading = false;
      return;
    }

    this.autocompleteService.getPlacePredictions({
      input: query,
      componentRestrictions: { country: 'in' },
      types: ['address'],
      sessionToken: this.autocompleteSessionToken
    }, (predictions: any[] | null, status: string) => {
      this.ngZone.run(() => {
        const googleApi = (window as any).google;
        this.isAddressSearchLoading = false;
        this.addressSuggestions = status === googleApi?.maps?.places?.PlacesServiceStatus?.OK
          ? predictions || []
          : [];
        this.showAddressSuggestions = true;
      });
    });
  }

  private removeGoogleInjectedAutocompleteDom(): void {
    document.querySelectorAll('.pac-container').forEach((element) => element.remove());
  }

  private loadGooglePlacesScript(): Promise<void> {
    if ((window as any).google?.maps?.places) {
      return Promise.resolve();
    }

    if (!CheckoutComponent.googlePlacesScriptPromise) {
      CheckoutComponent.googlePlacesScriptPromise = new Promise<void>((resolve, reject) => {
        const existingScript = document.getElementById('google-places-script') as HTMLScriptElement | null;
        if (existingScript) {
          existingScript.addEventListener('load', () => resolve());
          existingScript.addEventListener('error', () => reject(new Error('Google Places script failed to load')));
          return;
        }

        const script = document.createElement('script');
        script.id = 'google-places-script';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(this.googlePlacesApiKey)}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Google Places script failed to load'));
        document.head.appendChild(script);
      });
    }

    return CheckoutComponent.googlePlacesScriptPromise;
  }

  private applySelectedAddress(place: any): void {
    const components = place?.address_components || [];
    const getComponent = (...types: string[]): string => {
      const component = components.find((item: any) => types.some((type) => item.types?.includes(type)));
      return String(component?.long_name || '').trim();
    };

    const streetNumber = getComponent('street_number');
    const route = getComponent('route');
    const premise = getComponent('premise', 'establishment');
    const sublocality = getComponent('sublocality_level_1', 'sublocality', 'neighborhood');
    const selectedLine1 = [streetNumber, route].filter(Boolean).join(' ').trim();

    this.addressLine1 = selectedLine1 || premise || place?.name || place?.formatted_address || this.addressLine1;
    if (sublocality && !this.addressLine2.trim()) {
      this.addressLine2 = sublocality;
    }

    this.city = getComponent('locality', 'postal_town', 'administrative_area_level_3') || this.city;
    this.state = getComponent('administrative_area_level_1') || this.state;
    this.postalCode = getComponent('postal_code') || this.postalCode;
    this.country = getComponent('country') || this.country || 'India';
    this.saveCheckoutDraft();
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

  getSizeOptions(item: CartItem): string[] {
    const configuredSizes = Array.isArray(item.sizes)
      ? item.sizes
          .map((sizeOption) => String(sizeOption?.size || '').trim())
          .filter((sizeOption) => !!sizeOption)
      : [];
    const baseSizes = configuredSizes.length ? configuredSizes : this.fallbackSizeOptions;
    const activeSize = String(this.selectedSizes[item.id] || item.size || '').trim();

    return Array.from(new Set([...baseSizes, ...(activeSize ? [activeSize] : [])]));
  }

  changeItemQuantity(item: CartItem, delta: number): void {
    this.updateItemQuantity(item.id, item.quantity + delta);
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
      phone: ((this.phoneControl.value as any)?.e164Number || '').trim(),
      addressLine1: this.addressLine1.trim(),
      addressLine2: this.addressLine2.trim(),
      city: this.city.trim(),
      state: this.state.trim(),
      postalCode: this.postalCode.trim(),
      country: this.country.trim() || 'India',
      paymentMethod: this.paymentMethod,
      items: this.cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        size: this.selectedSizes[item.id] || item.size || undefined
      }))
    }).subscribe({
      next: (response) => {
        if (response.razorpay) {
          this.openRazorpayCheckout(response);
          return;
        }

        this.isSubmitting = false;
        this.submitSuccessMessage = response.message || 'Order placed successfully.';
        this.placedOrderNumber = response.order?.order_number || '';
        if (this.isBuyNowMode) {
          this.cartService.clearBuyNow();
          this.isBuyNowMode = false;
        } else {
          this.cartService.clearCart();
        }
        this.saveCheckoutDraft();

        if (this.placedOrderNumber) {
          void this.router.navigate(['/track-order', this.placedOrderNumber]);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitErrorMessage = error?.error?.message || 'Failed to place order. Please try again.';
      }
    });
  }

  private openRazorpayCheckout(response: any): void {
    const razorpay = response.razorpay;
    const order = response.order;

    const options: any = {
      key: razorpay.key_id,
      amount: razorpay.amount,
      currency: razorpay.currency,
      name: 'Divara Craft',
      description: `Order ${order.order_number}`,
      order_id: razorpay.razorpay_order_id,
      prefill: {
        name: this.fullName.trim(),
        email: String(this.authSessionService.getCurrentUser()?.email || this.email).trim(),
        contact: this.phone.trim()
      },
      theme: {
        color: '#8B5E3C'
      },
      handler: (paymentResponse: any) => {
        this.orderService.verifyPayment({
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_signature: paymentResponse.razorpay_signature
        }).subscribe({
          next: (verifyResult) => {
            this.isSubmitting = false;
            this.submitSuccessMessage = verifyResult.message || 'Payment successful! Order confirmed.';
            this.placedOrderNumber = verifyResult.order_number || order.order_number || '';
            if (this.isBuyNowMode) {
              this.cartService.clearBuyNow();
              this.isBuyNowMode = false;
            } else {
              this.cartService.clearCart();
            }
            this.saveCheckoutDraft();

            if (this.placedOrderNumber) {
              void this.router.navigate(['/track-order', this.placedOrderNumber]);
            }
          },
          error: (err) => {
            this.isSubmitting = false;
            this.submitErrorMessage = err?.error?.message || 'Payment verification failed. Contact support.';
          }
        });
      },
      modal: {
        ondismiss: () => {
          this.isSubmitting = false;
          this.submitErrorMessage = 'Payment was cancelled. Your order is saved — you can retry payment.';
        }
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.on('payment.failed', (failResponse: any) => {
      this.isSubmitting = false;
      this.submitErrorMessage = failResponse.error?.description || 'Payment failed. Please try again.';
    });
    rzp.open();
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

    this.phoneControl.markAsTouched();
    const phoneValue = this.phoneControl.value as any;
    if (!phoneValue || this.phoneControl.invalid) {
      return 'Please enter a valid phone number.';
    }

    if (!this.addressLine1.trim() || !this.city.trim() || !this.state.trim() || !this.postalCode.trim()) {
      return 'Address line 1, city, state, and postal code are required.';
    }

    return null;
  }

  applySavedAddress(address: SavedAddress): void {
    this.selectedSavedAddressId = address.id;
    this.fullName = address.recipient_name || this.fullName;
    this.addressLine1 = address.address_line1 || '';
    this.addressLine2 = address.address_line2 || '';
    this.city = address.city || '';
    this.state = address.state || '';
    this.postalCode = address.postal_code || '';
    this.country = address.country || 'India';
    this.saveCheckoutDraft();
  }

  applySavedPaymentMethod(method: SavedPaymentMethod): void {
    this.paymentMethod = method.payment_method;
    this.saveCheckoutDraft();
  }

  formatSavedAddress(address: SavedAddress): string {
    return [
      address.address_line1,
      address.address_line2,
      address.city,
      address.state,
      address.postal_code,
      address.country
    ].filter((value) => String(value || '').trim().length > 0).join(', ');
  }

  getSavedPaymentMethodLabel(method: SavedPaymentMethod): string {
    switch (method.payment_method) {
      case 'card':
        return 'Card';
      case 'upi':
        return 'UPI';
      default:
        return 'Cash on Delivery';
    }
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
      phone: ((this.phoneControl.value as any)?.e164Number || ''),
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
      // phone is restored via ngx-intl-tel-input FormControl — draft value is stored as e164
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

  private loadSavedPreferences(): void {
    this.customerPreferencesService.getPreferences().subscribe({
      next: (response) => {
        this.savedAddresses = response?.addresses || [];
        this.savedPaymentMethods = response?.paymentMethods || [];

        if (!this.addressLine1.trim() && this.savedAddresses.length) {
          const preferredAddress = this.savedAddresses.find((item) => item.is_default) || this.savedAddresses[0];
          this.applySavedAddress(preferredAddress);
        }

        if (this.savedPaymentMethods.length) {
          const preferredMethod = this.savedPaymentMethods.find((item) => item.is_default) || this.savedPaymentMethods[0];
          if (!this.paymentMethod || this.paymentMethod === 'cod') {
            this.applySavedPaymentMethod(preferredMethod);
          }
        }
      },
      error: () => {
        this.savedAddresses = [];
        this.savedPaymentMethods = [];
      }
    });
  }
}
