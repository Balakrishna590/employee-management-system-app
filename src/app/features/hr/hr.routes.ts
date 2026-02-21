import { Routes } from '@angular/router';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { CalendarComponent } from '../../shared/components/common/calendar/calendar.component';
import { PayrollComponent } from '../../shared/components/common/payroll/payroll.component';
import { SurveyComponent } from '../../shared/components/common/survey/survey.component';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

export const HR_ROUTES: Routes = [
  {
    path: '',
    component: HrDashboardComponent
  },
  {
    path: 'associated-employees',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Associated Employees',
      description: 'Employees assigned to this HR representative.',
      bullets: ['Employee list', 'Department grouping', 'Status tracking']
    }
  },
  {
    path: 'payroll-updates',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Payroll Updates',
      description: 'Apply payroll corrections and update payroll records.',
      bullets: ['Adjustments', 'Tax updates', 'Bank updates']
    }
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'leave-approvals',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'Leave Approvals',
      description: 'Approve leaves when reporting manager is unavailable.',
      bullets: ['Fallback approvals', 'Policy checks', 'Escalation flow']
    }
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
    path: 'settings',
    component: FeaturePlaceholderComponent,
    data: {
      title: 'HR Settings',
      description: 'Manage HR preferences and profile settings.',
      bullets: ['Notifications', 'Approval preferences', 'Security settings']
    }
  }
];
