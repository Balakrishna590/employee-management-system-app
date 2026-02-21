import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface CalendarEvent {
  date: string;
  title: string;
  type: 'Meeting' | 'Leave' | 'Task' | 'Payroll';
}

@Component({
  selector: 'app-calendar-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  @Input() title = 'Calendar';
  @Input() events: CalendarEvent[] = [
    { date: '2026-02-12', title: 'Sprint Planning', type: 'Meeting' },
    { date: '2026-02-14', title: 'Payroll Processing', type: 'Payroll' },
    { date: '2026-02-18', title: 'Performance Check-in', type: 'Task' },
    { date: '2026-02-21', title: 'Personal Leave', type: 'Leave' }
  ];
}
