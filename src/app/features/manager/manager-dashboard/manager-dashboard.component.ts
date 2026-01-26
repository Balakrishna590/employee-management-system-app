import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamDetailsComponent } from '../team-details/team-details.component';

@Component({
  selector: 'app-manager-dashboard',
  imports: [CommonModule, TeamDetailsComponent],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css',
})
export class ManagerDashboardComponent {
  
}
