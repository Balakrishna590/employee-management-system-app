import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ManagerDataService } from '../../../shared/services/manager-data.service';

@Component({
  selector: 'manager-team-details',
  imports: [CommonModule, TableModule],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css',
})
export class TeamDetailsComponent {
  employees: any = []

  constructor(
    private managerDataService: ManagerDataService,
  ) {

  }

  ngOnInit() {
    this.getAllManagerEmployees(7698);
  }

  getAllManagerEmployees(managerId: number) {

    this.managerDataService.getAllManagerEmployees(managerId).subscribe({
      next: (response) => {
        this.employees = response;
      },
      error: () => {
        console.log('No Employees Found');
      }
    });
  }
  
}
