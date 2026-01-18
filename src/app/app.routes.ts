import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

export const routes: Routes = [
    {
      path: 'admin',
      canActivate: [AuthGuard, RoleGuard],
      data: { roles: ['ADMIN'] },
      loadChildren: () =>
        import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: 'hr',
      canActivate: [AuthGuard, RoleGuard],
      data: { roles: ['HR','ADMIN'] },
      loadChildren: () =>
        import('./modules/hr/hr.module').then(m => m.HrModule)
    },
    {
      path: 'employee',
      canActivate: [AuthGuard],
      loadChildren: () =>
        import('./modules/employee/employee.module').then(m => m.EmployeeModule)
    }
  ];
  
