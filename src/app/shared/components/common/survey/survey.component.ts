import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface SurveyQuestion {
  question: string;
  participation: number;
}

@Component({
  selector: 'app-survey-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {
  @Input() title = 'Survey';
  @Input() questions: SurveyQuestion[] = [
    { question: 'How satisfied are you with team collaboration?', participation: 78 },
    { question: 'Are your goals clearly defined?', participation: 66 },
    { question: 'Do you have the tools you need to work effectively?', participation: 84 }
  ];
}
