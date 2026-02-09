import { Component } from '@angular/core';
import { TeamDetailsComponent } from "../../manager/team-details/team-details.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-dashboard',
    imports: [CommonModule, TeamDetailsComponent],
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
