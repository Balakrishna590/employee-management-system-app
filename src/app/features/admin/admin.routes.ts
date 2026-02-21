import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CalendarComponent } from '../../shared/components/common/calendar/calendar.component';
import { PayrollComponent } from '../../shared/components/common/payroll/payroll.component';
import { SurveyComponent } from '../../shared/components/common/survey/survey.component';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminDashboardComponent
  },
  {
    path: 'employees',
    component: AdminDashboardComponent
  },
  {
    path: 'employee-management',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Employee Management',
      description: 'Create, edit, and delete employee records across the organization.',
      bullets: ['Create employee', 'Edit profile and role', 'Deactivate or delete employee']
    }
  },
  {
    path: 'payroll',
    component: PayrollComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  },
  {
    path: 'settings',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Admin Settings',
      description: 'Configure organization and administrator preferences.',
      bullets: ['Global preferences', 'Role permissions', 'System notifications']
    }
  }
];
