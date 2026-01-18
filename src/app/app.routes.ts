import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

export const routes: Routes = [
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
      canActivate: [authGuard, roleGuard],
      data: { roles: ['HR', 'ADMIN'] },
      loadChildren: () =>
        import('./features/hr/hr.routes')
          .then(m => m.HR_ROUTES)
    },
    {
      path: 'employee',
      canActivate: [authGuard],
      loadChildren: () =>
        import('./features/employee/employee.routes')
          .then(m => m.EMPLOYEE_ROUTES)
    }
  ];
