import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthSessionService, SessionUser } from '../services/auth-session.service';
import { APP_CONFIG } from '../config/app-config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private readonly apiUrl = APP_CONFIG.AUTH_API_URL;
  private readonly subscriptions = new Subscription();
  private readonly cropOutputSize = 320;

  user: SessionUser | null = null;

  name = '';
  email = '';
  phone = '';

  isSaving = false;
  isVerifyingEmail = false;
  isRequestingVerification = false;
  verificationCodeSent = false;
  emailVerified = false;
  verificationCode = '';
  pendingPayload: { name: string; email: string; phone: string; avatarUrl: string } | null = null;
  avatarUrl = '';
  cropSourceImage = '';
  cropScaleFactor = 1;
  cropDragOffsetX = 0;
  cropDragOffsetY = 0;
  isApplyingCrop = false;
  successMessage = '';
  errorMessage = '';

  private isCropDragging = false;
  private cropDragStartX = 0;
  private cropDragStartY = 0;
  private cropDragLastX = 0;
  private cropDragLastY = 0;

  get isEmailChanged(): boolean {
    return this.email.trim().toLowerCase() !== String(this.user?.email || '').trim().toLowerCase();
  }

  get isEmailValid(): boolean {
    return this.isValidEmail(this.email);
  }

  get showVerifyBtn(): boolean {
    return this.isEmailChanged && this.isEmailValid && !this.verificationCodeSent && !this.emailVerified;
  }

  get showEmailFormatError(): boolean {
    return this.isEmailChanged && this.email.length > 0 && !this.isEmailValid;
  }

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly authSessionService: AuthSessionService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.authSessionService.user$.subscribe((user) => {
        this.user = user;

        if (!user) {
          this.router.navigate(['/']);
          return;
        }

        this.name = user.name || '';
        this.email = user.email || '';
        this.phone = user.phone || '';
        this.avatarUrl = user.avatarUrl || '';
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onNameInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.name = target?.value || '';
  }

  onEmailInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.email = target?.value || '';
    // Reset verification state whenever the email field changes
    this.verificationCodeSent = false;
    this.emailVerified = false;
    this.verificationCode = '';
    this.pendingPayload = null;
    this.resetMessages();
  }

  onPhoneInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.phone = target?.value || '';
  }

  onVerificationCodeInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.verificationCode = target?.value || '';
  }

  onAvatarFileChange(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    const file = input?.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      this.errorMessage = 'Please select a valid image file.';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) {
        this.errorMessage = 'Unable to read selected image.';
        return;
      }

      this.cropSourceImage = result;
      this.cropScaleFactor = 1;
      this.cropDragOffsetX = 0;
      this.cropDragOffsetY = 0;
      this.resetMessages();
    };
    reader.onerror = () => {
      this.errorMessage = 'Failed to load image.';
    };

    reader.readAsDataURL(file);
    if (input) {
      input.value = '';
    }
  }

  cancelCrop(): void {
    this.cropSourceImage = '';
    this.cropScaleFactor = 1;
    this.cropDragOffsetX = 0;
    this.cropDragOffsetY = 0;
    this.isCropDragging = false;
  }

  onCropMouseDown(event: MouseEvent): void {
    if (event.button !== 0) return;
    event.preventDefault();
    this.isCropDragging = true;
    this.cropDragStartX = event.clientX;
    this.cropDragStartY = event.clientY;
    this.cropDragLastX = this.cropDragOffsetX;
    this.cropDragLastY = this.cropDragOffsetY;
  }

  @HostListener('document:mousemove', ['$event'])
  onCropMouseMove(event: MouseEvent): void {
    if (!this.isCropDragging) return;
    const deltaX = event.clientX - this.cropDragStartX;
    const deltaY = event.clientY - this.cropDragStartY;
    this.cropDragOffsetX = this.cropDragLastX + deltaX;
    this.cropDragOffsetY = this.cropDragLastY + deltaY;
  }

  @HostListener('document:mouseup')
  onCropMouseUp(): void {
    this.isCropDragging = false;
  }

  onCropWheel(event: WheelEvent): void {
    event.preventDefault();
    const zoomSpeed = 0.1;
    const direction = event.deltaY > 0 ? -1 : 1;
    this.cropScaleFactor = Math.max(1, Math.min(3, this.cropScaleFactor + direction * zoomSpeed));
  }

  applyCrop(): void {
    if (!this.cropSourceImage) {
      return;
    }

    this.isApplyingCrop = true;
    const image = new Image();

    image.onload = () => {
      try {
        const outputSize = this.cropOutputSize;
        const canvas = document.createElement('canvas');
        canvas.width = outputSize;
        canvas.height = outputSize;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          throw new Error('Canvas context is unavailable');
        }

        const imgW = image.naturalWidth || image.width;
        const imgH = image.naturalHeight || image.height;
        const baseScale = Math.max(outputSize / imgW, outputSize / imgH);
        const effectiveScale = baseScale * Math.max(this.cropScaleFactor, 1);

        const sourceW = outputSize / effectiveScale;
        const sourceH = outputSize / effectiveScale;

        const centerX = (imgW / 2) - (this.cropDragOffsetX / effectiveScale);
        const centerY = (imgH / 2) - (this.cropDragOffsetY / effectiveScale);

        let sx = centerX - (sourceW / 2);
        let sy = centerY - (sourceH / 2);

        sx = Math.max(0, Math.min(sx, Math.max(0, imgW - sourceW)));
        sy = Math.max(0, Math.min(sy, Math.max(0, imgH - sourceH)));

        ctx.clearRect(0, 0, outputSize, outputSize);
        ctx.drawImage(image, sx, sy, sourceW, sourceH, 0, 0, outputSize, outputSize);

        this.avatarUrl = canvas.toDataURL('image/jpeg', 0.92);
        this.cancelCrop();
      } catch {
        this.errorMessage = 'Failed to crop image. Please try another image.';
      } finally {
        this.isApplyingCrop = false;
      }
    };

    image.onerror = () => {
      this.errorMessage = 'Failed to process image.';
      this.isApplyingCrop = false;
    };

    image.src = this.cropSourceImage;
  }

  removeAvatar(): void {
    this.avatarUrl = '';
    this.cancelCrop();
  }

  onAvatarPreviewError(): void {
    this.avatarUrl = '';
  }

  submit(): void {
    this.resetMessages();

    if (!this.user?.id) {
      this.errorMessage = 'User session not found. Please login again.';
      return;
    }

    if (!this.name.trim()) {
      this.errorMessage = 'Name is required.';
      return;
    }

    if (!this.email.trim()) {
      this.errorMessage = 'Email is required.';
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Enter a valid email address.';
      return;
    }

    const payload = {
      name: this.name.trim(),
      email: this.email.trim(),
      phone: this.phone.trim(),
      avatarUrl: this.avatarUrl
    };

    const currentEmail = String(this.user.email || '').trim().toLowerCase();
    const nextEmail = String(payload.email || '').trim().toLowerCase();

    if (nextEmail && currentEmail && nextEmail !== currentEmail && !this.emailVerified) {
      this.errorMessage = 'Please verify your new email address before saving.';
      return;
    }

    this.isSaving = true;

    this.http.put<any>(`${this.apiUrl}/profile/${this.user.id}`, {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      avatarUrl: payload.avatarUrl
    }).subscribe({
      next: (response) => {
        this.isSaving = false;

        const updatedUser = response?.user || {
          id: this.user?.id,
          name: this.name.trim(),
          email: this.email.trim(),
          phone: this.phone.trim(),
          avatarUrl: this.avatarUrl
        };

        this.authSessionService.updateProfile({
          ...updatedUser,
          avatarUrl: this.avatarUrl
        });
        this.successMessage = 'Profile updated successfully.';
      },
      error: (error) => {
        this.isSaving = false;
        this.errorMessage = error?.error?.error || 'Failed to update profile.';
      }
    });
  }

  verifyAndUpdateEmail(): void {
    this.resetMessages();

    if (!this.user?.id) {
      this.errorMessage = 'User session not found. Please login again.';
      return;
    }

    if (!this.pendingPayload) {
      this.errorMessage = 'No pending email update. Request verification first.';
      return;
    }

    if (!this.verificationCode.trim()) {
      this.errorMessage = 'Enter the verification code sent to your new email.';
      return;
    }

    this.isVerifyingEmail = true;

    this.http.post<any>(`${this.apiUrl}/profile/${this.user.id}/verify-email-update`, {
      code: this.verificationCode.trim()
    }).subscribe({
      next: (response) => {
        this.isVerifyingEmail = false;

        const updatedUser = response?.user || {
          id: this.user?.id,
          name: this.pendingPayload?.name,
          email: this.pendingPayload?.email,
          phone: this.pendingPayload?.phone,
          avatarUrl: this.pendingPayload?.avatarUrl || this.avatarUrl
        };

        this.authSessionService.updateProfile({
          ...updatedUser,
          avatarUrl: this.pendingPayload?.avatarUrl || this.avatarUrl
        });
        this.successMessage = response?.message || 'Email verified and profile updated successfully.';
        this.verificationCodeSent = false;
        this.emailVerified = true;
        this.pendingPayload = null;
        this.verificationCode = '';
      },
      error: (error) => {
        this.isVerifyingEmail = false;
        this.errorMessage = error?.error?.error || 'Verification failed. Please try again.';
      }
    });
  }

  requestVerificationFromBtn(): void {
    this.resetMessages();

    if (!this.name.trim()) {
      this.errorMessage = 'Please fill in your name before verifying email.';
      return;
    }

    const payload = {
      name: this.name.trim(),
      email: this.email.trim(),
      phone: this.phone.trim(),
      avatarUrl: this.avatarUrl
    };

    this.requestEmailVerification(payload);
  }

  private requestEmailVerification(payload: { name: string; email: string; phone: string; avatarUrl: string }): void {
    if (!this.user?.id) {
      this.errorMessage = 'User session not found. Please login again.';
      return;
    }

    this.isRequestingVerification = true;

    this.http.post<any>(`${this.apiUrl}/profile/${this.user.id}/request-email-verification`, payload)
      .subscribe({
        next: (response) => {
          this.isRequestingVerification = false;
          this.verificationCodeSent = true;
          this.pendingPayload = payload;
          this.successMessage = response?.message || 'Verification code sent. Enter code to confirm email update.';
        },
        error: (error) => {
          this.isRequestingVerification = false;
          this.errorMessage = error?.error?.error || 'Failed to send verification code.';
        }
      });
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
  }

  private resetMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
