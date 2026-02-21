import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ROLE_MENU_CONFIG, ROLE_PRIORITY } from '../../configs/role-menu.config';
import { AppRole, MenuItem, MenuSection } from '../../models/role.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user = {
    name: 'User',
    org: 'Employee Management'
  };

  sections: MenuSection[] = [];

  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    const role = this.resolveRole();
    this.sections = this.cloneSections(ROLE_MENU_CONFIG[role]);
    this.user.name = this.resolveUserName();
  }

  toggle(item: MenuItem): void {
    item.expanded = !item.expanded;
  }

  private resolveRole(): AppRole {
    const rolesFromSession = this.sessionService.roles as string[];
    const rolesFromToken = this.authService.getRoles();
    const allRoles = [...rolesFromSession, ...rolesFromToken];

    for (const role of ROLE_PRIORITY) {
      if (allRoles.includes(role)) {
        return role;
      }
    }

    return 'EMPLOYEE';
  }

  private cloneSections(sections: MenuSection[]): MenuSection[] {
    return sections.map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        children: item.children ? item.children.map(child => ({ ...child })) : undefined
      }))
    }));
  }

  private resolveUserName(): string {
    if (!isPlatformBrowser(this.platformId)) return 'User';

    const token = localStorage.getItem('token');
    if (!token) return 'User';

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.username || payload.sub || 'User';
    } catch {
      return 'User';
    }
  }
}
