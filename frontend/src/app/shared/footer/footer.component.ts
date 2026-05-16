import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../../config/app-config';

interface InstagramPost {
  id: string;
  caption: string;
  mediaType: string;
  mediaUrl: string;
  thumbnailUrl: string;
  permalink: string;
  timestamp: string;
}

interface InstagramFeedResponse {
  configured: boolean;
  profileUrl: string;
  posts: InstagramPost[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly currentYear: number = new Date().getFullYear();
  readonly fallbackProfileUrl = 'https://www.instagram.com/divaracraft/';
  readonly fallbackPosts: InstagramPost[] = [
    {
      id: 'fallback-1',
      caption: 'Handcrafted Divara Craft bangles',
      mediaType: 'IMAGE',
      mediaUrl: 'assets/divara_final1.jpg',
      thumbnailUrl: 'assets/divara_final1.jpg',
      permalink: this.fallbackProfileUrl,
      timestamp: ''
    },
    {
      id: 'fallback-2',
      caption: 'Traditional jewellery styling',
      mediaType: 'IMAGE',
      mediaUrl: 'assets/divara_final333.jpg',
      thumbnailUrl: 'assets/divara_final333.jpg',
      permalink: this.fallbackProfileUrl,
      timestamp: ''
    },
    {
      id: 'fallback-3',
      caption: 'Artisan details from Divara Craft',
      mediaType: 'IMAGE',
      mediaUrl: 'assets/divara_final888.jpg',
      thumbnailUrl: 'assets/divara_final888.jpg',
      permalink: this.fallbackProfileUrl,
      timestamp: ''
    },
    {
      id: 'fallback-4',
      caption: 'Divara Craft collection highlight',
      mediaType: 'IMAGE',
      mediaUrl: 'assets/divara_finalssss.jpg',
      thumbnailUrl: 'assets/divara_finalssss.jpg',
      permalink: this.fallbackProfileUrl,
      timestamp: ''
    }
  ];

  instagramPosts: InstagramPost[] = this.fallbackPosts;
  instagramProfileUrl = this.fallbackProfileUrl;
  isInstagramLoading = true;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadInstagramFeed();
  }

  private loadInstagramFeed(): void {
    this.http.get<InstagramFeedResponse>(`${API_ENDPOINTS.instagramFeed}?limit=6`).subscribe({
      next: (response) => {
        this.instagramProfileUrl = response.profileUrl || this.fallbackProfileUrl;
        this.instagramPosts = response.posts?.length ? response.posts : this.fallbackPosts;
        this.isInstagramLoading = false;
      },
      error: () => {
        this.instagramPosts = this.fallbackPosts;
        this.isInstagramLoading = false;
      }
    });
  }
}
