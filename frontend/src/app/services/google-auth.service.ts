import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../config/app-config';

declare global {
  interface Window {
    google: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private readonly GOOGLE_CLIENT_ID = APP_CONFIG.GOOGLE_CLIENT_ID;
  private readonly apiUrl = APP_CONFIG.AUTH_API_URL;

  constructor(private readonly http: HttpClient) {}

  /**
   * Initialize Google Sign-In
   */
  initializeGoogleSignIn(buttonId: string): void {
    if (!window.google || !window.google.accounts) {
      console.error('Google Identity Services not loaded');
      return;
    }

    // Check if Client ID is set
    if (!this.GOOGLE_CLIENT_ID) {
      console.error('Google Client ID not configured. Please set it in google-auth.service.ts');
      return;
    }

    try {
      window.google.accounts.id.initialize({
        client_id: this.GOOGLE_CLIENT_ID,
        callback: (response: any) => this.handleCredentialResponse(response)
      });

      // Render the sign-in button
      window.google.accounts.id.renderButton(
        document.getElementById(buttonId),
        {
          theme: 'outline',
          size: 'large',
          width: '100%'
        }
      );
    } catch (error) {
      console.error('Failed to initialize Google Sign-In:', error);
    }
  }

  /**
   * Handle the credential response from Google
   */
  private handleCredentialResponse(response: any): void {
    if (response.credential) {
      this.verifyTokenWithBackend(response.credential);
    }
  }

  /**
   * Verify the JWT token with the backend
   */
  verifyTokenWithBackend(credential: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/google-signin`, {
      token: credential
    });
  }

  /**
   * Sign out from Google
   */
  signOut(): void {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.disableAutoSelect();
    }
  }
}
