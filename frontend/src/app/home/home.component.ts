import { Component, OnInit } from '@angular/core';

interface Category {
  name: string;
  image: string;
}

interface Product {
  name: string;
  price: string;
  image: string;
  rating?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [
    { name: 'Bangles', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop' },
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=400&fit=crop' },
    { name: 'Home Decor', image: 'https://images.unsplash.com/photo-1598300053653-8e1b06b9a1d7?w=400&h=400&fit=crop' },
    { name: 'Wall Hangings', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop' },
    { name: 'Gift Sets', image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=400&fit=crop' }
  ];

  featuredProducts: Product[] = [
    { name: 'Royal Kundan Bangles', price: '$24.99', image: 'https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=400&h=400&fit=crop', rating: 124 },
    { name: 'Boho Jhumka Earrings', price: '$18.99', image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400&h=400&fit=crop', rating: 98 },
    { name: 'Hand-Painted Terracotta Vase', price: '$34.99', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop', rating: 156 },
    { name: 'Macrame Wall Hanging', price: '$22.99', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop', rating: 77 }
  ];

  carouselImages: string[] = [
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1260&h=750&fit=crop',
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1260&h=750&fit=crop'
  ];

  activeSlideIndex = 0;

  ngOnInit(): void {
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => {
      this.activeSlideIndex =
        (this.activeSlideIndex + 1) % this.carouselImages.length;
    }, 4000);
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
  }
}