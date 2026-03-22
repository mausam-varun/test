import { Component, OnInit } from '@angular/core';

interface Category {
  name: string;
  image: string;
}

interface Product {
  name: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [
    { name: 'Bangles', image: 'https://images.pexels.com/photos/917020/pexels-photo-917020.jpeg?auto=compress&cs=tinysrgb&w=640' },
    { name: 'Earrings', image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=640' },
    { name: 'Home Decor', image: 'https://images.pexels.com/photos/718986/pexels-photo-718986.jpeg?auto=compress&cs=tinysrgb&w=640' },
    { name: 'Crafts', image: 'https://images.pexels.com/photos/1128118/pexels-photo-1128118.jpeg?auto=compress&cs=tinysrgb&w=640' }
  ];

  featuredProducts: Product[] = [
    { name: 'Designer Kundan Bangles', price: '$15.00', image: 'https://images.pexels.com/photos/874906/pexels-photo-874906.jpeg?auto=compress&cs=tinysrgb&w=640' },
    { name: 'Boho Jhumka Earrings', price: '$18.00', image: 'https://images.pexels.com/photos/1451946/pexels-photo-1451946.jpeg?auto=compress&cs=tinysrgb&w=640' },
    { name: 'Hand-Painted Teracotta Vase', price: '$25.00', image: 'https://images.pexels.com/photos/5932937/pexels-photo-5932937.jpeg?auto=compress&cs=tinysrgb&w=640' },
    { name: 'Macrame Wall Hanging', price: '$22.00', image: 'https://images.pexels.com/photos/1725732/pexels-photo-1725732.jpeg?auto=compress&cs=tinysrgb&w=640' }
  ];

  carouselImages: string[] = [
    'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/461951/pexels-photo-461951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1666061/pexels-photo-1666061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  activeSlideIndex = 0;

  ngOnInit() {
    this.cycleSlides();
  }

  cycleSlides(delay = 4000) {
    setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.carouselImages.length;
    }, delay);
  }

  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.carouselImages.length;
  }

  selectSlide(index: number) {
    this.activeSlideIndex = index;
  }
}
