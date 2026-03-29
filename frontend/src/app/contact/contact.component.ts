import { Component, OnInit } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;

  contactInfo = [
    {
      icon: 'location',
      title: 'Our Address',
      content: '123 Crafts Lane, Artisan District, NY 10001',
      link: '#'
    },
    {
      icon: 'phone',
      title: 'Phone Number',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'email',
      title: 'Email Address',
      content: 'hello@divaracraft.com',
      link: 'mailto:hello@divaracraft.com'
    }
  ];

  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
    { name: 'Pinterest', url: 'https://pinterest.com', icon: '📌' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      alert('Thank you for reaching out! We will get back to you soon.');
      this.resetForm();
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

  isFormValid(): boolean {
    return (
      this.formData.name.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.phone.trim() !== '' &&
      this.formData.subject.trim() !== '' &&
      this.formData.message.trim() !== '' &&
      this.isValidEmail(this.formData.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.submitted = false;
  }
}
