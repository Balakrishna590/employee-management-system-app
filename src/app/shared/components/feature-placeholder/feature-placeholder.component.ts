import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-placeholder.component.html',
  styleUrl: './feature-placeholder.component.css'
})
export class FeaturePlaceholderComponent {
  title = 'Feature';
  description = 'This module is ready for API integration.';
  bullets: string[] = [];

  constructor(route: ActivatedRoute) {
    const data = route.snapshot.data;
    this.title = data['title'] ?? this.title;
    this.description = data['description'] ?? this.description;
    this.bullets = data['bullets'] ?? [];
  }
}
