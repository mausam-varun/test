import { Component, Input } from '@angular/core';

export interface CategoryCardModel {
  name: string;
  image: string;
}

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  @Input({ required: true }) category!: CategoryCardModel;
}
