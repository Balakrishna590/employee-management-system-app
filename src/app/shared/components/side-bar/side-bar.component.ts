import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuItem { 
  label: string; 
  icon?: string; 
  route?: string; 
  children?: MenuItem[]; 
  expanded?: boolean; 
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {

  user = {
    name: 'Bala R',
    org: 'cvghj'
  };

  sections: MenuSection[] = [
    {
      title: 'You',
      items: [
        { label: 'Dashboard', icon: 'assets/Images/dashboard.a3a7efb4.svg', route: '/dashboard' },
        { label: 'Requests', icon: 'assets/Images/request.ede18172.svg', route: '/requests' },
        { label: 'Calendar', icon: 'assets/Images/calendar.7310385c.svg', route: '/calendar' }
      ]
    },
    {
      title: 'Your Apps',
      items: [
        { label: 'Timer', icon: 'assets/Images/timer.fa8226e5.svg', route: '/timer' },
        { label: 'Invoice', icon: 'assets/Images/invoice.6fc3f7a1.svg', route: '/invoice' },
        { label: 'Payroll', icon: 'assets/Images/payroll.e0906a1e.svg', route: '/payroll' },
        { label: 'Applicant Tracking', icon: 'assets/Images/ats.4d16b22d.svg', route: '/ats'},
        { label: 'Survey', icon: 'assets/Images/survey.48e2bd61.svg', route: '/survey' }
      ]
    },
    {
      title: 'Your Company',
      items: [
        { label: 'Employees', icon: 'assets/Images/employee.8b34e3c3.svg', route: '/employees' },
        { label: 'Projects', icon: 'assets/Images/project.3aa8ddd9.svg', route: '/projects' },
        { label: 'Clients', icon: 'assets/Images/client.4e37c6b7.svg', route: '/clients' },
        { label: 'Events', icon: 'assets/Images/event.2db36a8b.svg', route: '/events' },
        {
          label: 'Reports',
          icon: 'assets/Images/report.19c9f47f.svg',
          expanded: true,
          children: [
            { label: 'Work', route: '/reports/work' },
            { label: 'Attendance', route: '/reports/attendance' }
          ]
        },
        {
          label: 'Settings',
          icon: 'assets/Images/setting.754f5107.svg',
          expanded: true,
          children: [
            { label: 'General', route: '/settings/general' },
            { label: 'Time Off', route: '/settings/time-off' },
            { label: 'Biometrics', route: '/settings/biometrics' },
            { label: 'Custom Fields', route: '/settings/custom-fields' },
            { label: 'Payroll', route: '/settings/payroll' }
          ]
        }
      ]
    }
  ];

  toggle(item: MenuItem) {
    item.expanded = !item.expanded;
  }
}
