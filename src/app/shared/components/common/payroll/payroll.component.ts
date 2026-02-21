import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface PayrollRow {
  month: string;
  gross: number;
  deductions: number;
  net: number;
  status: 'Paid' | 'Pending';
}

@Component({
  selector: 'app-payroll-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.css'
})
export class PayrollComponent {
  @Input() title = 'My Payroll';
  @Input() rows: PayrollRow[] = [
    { month: 'Jan 2026', gross: 5800, deductions: 1100, net: 4700, status: 'Paid' },
    { month: 'Dec 2025', gross: 5800, deductions: 1050, net: 4750, status: 'Paid' },
    { month: 'Nov 2025', gross: 5600, deductions: 980, net: 4620, status: 'Paid' }
  ];
}
