import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ManagerDashboardComponent } from './features/manager/manager-dashboard/manager-dashboard.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { HrDashboardComponent } from './features/hr/hr-dashboard/hr-dashboard.component';
import { EmployeeDashboardComponent } from './features/employee/employee-dashboard/employee-dashboard.component';
import { SessionService } from './shared/services/session.service';
import { AuthService } from './core/services/auth.service';

@Component({
    selector: 'app-root',
    imports: [
        SideBarComponent,
        AdminDashboardComponent,
        HrDashboardComponent,
        ManagerDashboardComponent,
        EmployeeDashboardComponent,
        RouterOutlet
        ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    roles: string[] =[];

    constructor(
        private sessionService: SessionService,
        private authService: AuthService,
        private router: Router){
    }

    ngOnInit(): void {
        this.roles = this.sessionService.roles;
    }

    showSidebar(): boolean {
        return this.authService.isLoggedIn() && this.router.url !== '/login';
    }
}
