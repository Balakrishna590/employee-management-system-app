import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarComponent } from '../../../shared/components/common/calendar/calendar.component';
import { PayrollComponent } from '../../../shared/components/common/payroll/payroll.component';
import { SurveyComponent } from '../../../shared/components/common/survey/survey.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, PayrollComponent, CalendarComponent, SurveyComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  activeMenuEmployeeId: string | null = null;

  employees = [
    { id: 'EMP-1024', name: 'Aarav Kumar', department: 'Engineering', role: 'Employee' },
    { id: 'EMP-1027', name: 'Ritika Sharma', department: 'Engineering', role: 'Manager' },
    { id: 'EMP-1033', name: 'Divya Nair', department: 'Human Resources', role: 'HR' },
    { id: 'EMP-1041', name: 'Noah Kim', department: 'Finance', role: 'Employee' },
    { id: 'EMP-1058', name: 'Isabella Cook', department: 'Operations', role: 'Employee' }
  ];

  toggleMenu(employeeId: string): void {
    this.activeMenuEmployeeId = this.activeMenuEmployeeId === employeeId ? null : employeeId;
  }

  editEmployee(employeeId: string): void {
    alert(`Edit employee ${employeeId}`);
    this.activeMenuEmployeeId = null;
  }

  deleteEmployee(employeeId: string): void {
    alert(`Delete employee ${employeeId}`);
    this.activeMenuEmployeeId = null;
  }
}
