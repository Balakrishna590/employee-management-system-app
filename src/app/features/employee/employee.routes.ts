import { Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CalendarComponent } from '../../shared/components/common/calendar/calendar.component';
import { PayrollComponent } from '../../shared/components/common/payroll/payroll.component';
import { SurveyComponent } from '../../shared/components/common/survey/survey.component';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent
  },
  {
    path: 'details',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'My Details',
      description: 'Employee can access and update only personal details.',
      bullets: ['Profile info', 'Contact information', 'Emergency contact']
    }
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'payroll',
    component: PayrollComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  },
  {
    path: 'tasks',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'My Tasks',
      description: 'Track assigned tasks and due dates.',
      bullets: ['Pending tasks', 'In progress', 'Completed tasks']
    }
  },
  {
    path: 'settings',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Settings',
      description: 'Manage personal preferences and account settings.',
      bullets: ['Notifications', 'Password policy', 'Privacy options']
    }
  }
];
