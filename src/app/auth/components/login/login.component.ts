import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDataService } from '../../../shared/services/auth-data.service';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '../../../shared/models/login.request.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../../../shared/services/session.service';


@Component({
  selector: 'ems-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authDataService: AuthDataService,
    private sessionService: SessionService,
  ) {

  }

  submit(): void {
    if (this.loginForm.invalid)
      return;

    const payload: LoginRequest = this.loginForm.value as LoginRequest;

    this.authDataService.userSecurityLogin(payload).subscribe({
      next: (response) => {
        const token = response?.token;

        if (token) {
          localStorage.setItem('token', token);
          if (response?.roles?.length > 0) {
            this.sessionService.roles = response?.roles;
            for (let role of response?.roles){
              if (role === 'ADMIN') {
                this.router.navigate(['/admin']);
              }
              else if (role === 'HR') {
                this.router.navigate(['/hr']);
              } 
              else if (role === 'MANAGER') {
                this.router.navigate(['/manager']);
              } 
              else if (role === "EMPLOYEE") {
                this.router.navigate(['/employee']);
              } 
            }
          }
        }
      },
      error: () => {
        alert('Invalid username or password');
      }
    });
  }

}
