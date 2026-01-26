import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] },
    loadChildren: () =>
      import('./features/admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  },
  {
    path: 'hr',
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['HR', 'ADMIN'] },
    loadChildren: () =>
      import('./features/hr/hr.routes')
        .then(m => m.HR_ROUTES)
  },
  {
    path: 'manager',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/manager/manager.routes')
        .then(m => m.MANAGER_ROUTES)
  },
  {
    path: 'employee',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/employee/employee.routes')
        .then(m => m.EMPLOYEE_ROUTES)
  }
  ];

