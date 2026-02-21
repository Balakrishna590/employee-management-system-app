import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarComponent } from '../../../shared/components/common/calendar/calendar.component';
import { PayrollComponent } from '../../../shared/components/common/payroll/payroll.component';
import { SurveyComponent } from '../../../shared/components/common/survey/survey.component';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule, PayrollComponent, CalendarComponent, SurveyComponent],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {
  employee = {
    employeeId: 'EMP-1024',
    name: 'Aarav Kumar',
    designation: 'Software Engineer',
    department: 'Engineering',
    email: 'aarav.kumar@company.com',
    phone: '+1 555-0142',
    manager: 'Ritika Sharma',
    joiningDate: '2023-04-18'
  };

  tasks = [
    'Complete sprint story EMS-224',
    'Submit monthly timesheet',
    'Update profile documents'
  ];

  settings = [
    'Profile and contact preferences',
    'Notification preferences',
    'Security and password settings'
  ];
}
