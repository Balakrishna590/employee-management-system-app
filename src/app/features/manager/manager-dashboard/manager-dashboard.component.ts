import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarComponent } from '../../../shared/components/common/calendar/calendar.component';
import { PayrollComponent } from '../../../shared/components/common/payroll/payroll.component';
import { SurveyComponent } from '../../../shared/components/common/survey/survey.component';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [CommonModule, PayrollComponent, CalendarComponent, SurveyComponent],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent {
  teamMembers = [
    { name: 'Rahul Mehta', role: 'Frontend Developer', status: 'Active' },
    { name: 'Priya Singh', role: 'Backend Developer', status: 'Active' },
    { name: 'John Carter', role: 'QA Engineer', status: 'On Leave' },
    { name: 'Maya Roy', role: 'Business Analyst', status: 'Active' }
  ];

  leaveApprovals = [
    { employee: 'John Carter', from: '2026-02-14', to: '2026-02-16', reason: 'Medical' },
    { employee: 'Priya Singh', from: '2026-02-22', to: '2026-02-23', reason: 'Personal' }
  ];
}
