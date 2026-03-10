import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {
  activeTab: 'personal' | 'work' | 'contract' | 'documents' | 'attendance' = 'personal';

  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
    nationality: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    address1: [''],
    address2: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    zip: ['', Validators.required],
    dateOfJoining: ['', Validators.required],        // yyyy-MM-dd (ISO date format)
    manager: [''],
    workEmail: ['', [Validators.required, Validators.email]],
    role: [''],
    office: [''],
    department: ['', Validators.required],
  });

  genders = ['Male', 'Female', 'Other'];
  managers = ['Manager Name', 'Aarav Kumar', 'Ritika Sharma'];
  roles = ['Admin', 'HR', 'Manager', 'Employee'];
  offices = ['cvghj', 'Hyderabad', 'Bengaluru', 'Remote'];
  departments = ['Engineering', 'Human Resources', 'Finance', 'Operations'];

  private personalTabControls = [
    'firstName',
    'lastName',
    'email',
    'password',
    'dateOfBirth',
    'gender',
    'nationality',
    'phoneNumber',
    'city',
    'state',
    'country',
    'zip'
  ];

  private workTabControls = ['workEmail', 'department'];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  setTab(tab: 'personal' | 'work' | 'contract' | 'documents' | 'attendance'): void {
    this.activeTab = tab;
  }

  save(): void {
    const controlsToValidate = this.activeTab === 'work' ? this.workTabControls : this.personalTabControls;

    const hasInvalidControl = controlsToValidate.some(
      (controlName) => this.registrationForm.get(controlName)?.invalid
    );

    if (hasInvalidControl) {
      controlsToValidate.forEach((controlName) => this.registrationForm.get(controlName)?.markAsTouched());
      return;
    }

    console.log('Employee registration payload', this.registrationForm.value);
    this.router.navigate(['/admin/employees']);
  }

  cancel(): void {
    this.router.navigate(['/admin/employees']);
  }
}
