import { Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { CalendarComponent } from '../../shared/components/common/calendar/calendar.component';
import { PayrollComponent } from '../../shared/components/common/payroll/payroll.component';
import { SurveyComponent } from '../../shared/components/common/survey/survey.component';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

export const MANAGER_ROUTES: Routes = [
  {
    path: '',
    component: ManagerDashboardComponent
  },
  {
    path: 'team-details',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Team Details',
      description: 'View all direct report employees and key team attributes.',
      bullets: ['Team profile', 'Role assignment', 'Performance summary']
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
    path: 'team-tasks',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Team Tasks',
      description: 'Assign and monitor team-level tasks.',
      bullets: ['Create task', 'Set assignee', 'Track completion']
    }
  },
  {
    path: 'leave-approvals',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Leave Approvals',
      description: 'Approve or reject team leave requests.',
      bullets: ['Pending approvals', 'Approval history', 'Escalated requests']
    }
  },
  {
    path: 'settings',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Manager Settings',
      description: 'Manage manager-level settings and preferences.',
      bullets: ['Dashboard view', 'Alerts', 'Access controls']
    }
  }
];
