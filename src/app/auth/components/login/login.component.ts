import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDataService } from '../../../shared/services/auth-data.service';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '../../../shared/models/login.request.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


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
          this.router.navigate(['/manager']);
        }
      },
      error: () => {
        alert('Invalid username or password');
      }
    });
  }

}
