import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [SideBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  showSidebar(): boolean {
    return this.authService.isLoggedIn() && this.router.url !== '/login';
  }
}
