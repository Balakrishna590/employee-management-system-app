import { Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

export const MANAGER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./manager-dashboard/manager-dashboard.component')
        .then(c => c.ManagerDashboardComponent)
  }
];

