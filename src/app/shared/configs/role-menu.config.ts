import { AppRole, MenuSection } from '../models/role.model';

export const ROLE_MENU_CONFIG: Record<AppRole, MenuSection[]> = {
  EMPLOYEE: [
    {
      title: 'Employee',
      items: [
        { label: 'Dashboard', route: '/employee' },
        { label: 'My Details', route: '/employee/details' },
        { label: 'Calendar', route: '/employee/calendar' },
        { label: 'My Payroll', route: '/employee/payroll' },
        { label: 'Survey', route: '/employee/survey' },
        { label: 'Tasks', route: '/employee/tasks' },
        { label: 'Settings', route: '/employee/settings' }
      ]
    }
  ],
  MANAGER: [
    {
      title: 'Manager',
      items: [
        { label: 'Dashboard', route: '/manager' },
        { label: 'Team Details', route: '/manager/team-details' },
        { label: 'Calendar', route: '/manager/calendar' },
        { label: 'My Payroll', route: '/manager/payroll' },
        { label: 'Survey', route: '/manager/survey' },
        { label: 'Team Tasks', route: '/manager/team-tasks' },
        { label: 'Leave Approvals', route: '/manager/leave-approvals' },
        { label: 'Settings', route: '/manager/settings' }
      ]
    }
  ],
  HR: [
    {
      title: 'HR',
      items: [
        { label: 'Dashboard', route: '/hr' },
        { label: 'Associated Employees', route: '/hr/associated-employees' },
        { label: 'Payroll Updates', route: '/hr/payroll-updates' },
        { label: 'Calendar', route: '/hr/calendar' },
        { label: 'Leave Approvals', route: '/hr/leave-approvals' },
        { label: 'My Payroll', route: '/hr/payroll' },
        { label: 'Survey', route: '/hr/survey' },
        { label: 'Settings', route: '/hr/settings' }
      ]
    }
  ],
  ADMIN: [
    {
      title: 'Admin',
      items: [
        { label: 'Dashboard', route: '/admin' },
        { label: 'All Employees', route: '/admin/employees' },
        { label: 'Employee Management', route: '/admin/employee-management' },
        { label: 'My Payroll', route: '/admin/payroll' },
        { label: 'Calendar', route: '/admin/calendar' },
        { label: 'Survey', route: '/admin/survey' },
        { label: 'Settings', route: '/admin/settings' }
      ]
    }
  ]
};

export const ROLE_PRIORITY: AppRole[] = ['ADMIN', 'HR', 'MANAGER', 'EMPLOYEE'];
