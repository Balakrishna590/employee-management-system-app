import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarComponent } from '../../../shared/components/common/calendar/calendar.component';
import { PayrollComponent } from '../../../shared/components/common/payroll/payroll.component';
import { SurveyComponent } from '../../../shared/components/common/survey/survey.component';
import { HrDataService } from '../../../shared/services/hr-data.service';

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [CommonModule, PayrollComponent, CalendarComponent, SurveyComponent],
  templateUrl: './hr-dashboard.component.html',
  styleUrl: './hr-dashboard.component.css'
})
export class HrDashboardComponent {
  stats: any;
  associatedEmployees: any;

  constructor(
    private hrDataService: HrDataService,
  ) {

  }

  ngOnInit() {
    this.getDashboardStatistics();
    this.getAllAssociatedEmployees(7908);
  }

  getAllAssociatedEmployees(managerId: number) {
    this.hrDataService.getAllAssociatedEmployees(managerId).subscribe({
      next: (response) => {
        this.associatedEmployees = response;
      },
      error: () => {
        console.log('No Employees Found');
      }
    });
  }

  getDashboardStatistics() {
    debugger;
    this.hrDataService.getDashboardStatistics().subscribe({
      next: (response) => {
        this.stats = response?.statistics;
      },
      error: () => {
        console.log('No Employees Found');
      }
    });
  }

}
