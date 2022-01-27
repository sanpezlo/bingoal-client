import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@pages/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  getErrorMessage(field: string): string {
    if (this.loginForm.get(field)?.hasError('required'))
      return `${field} should not be empty`;
    else if (this.loginForm.get(field)?.hasError('email'))
      return `${field} must be an email`;
    return `${field} is invalid`;
  }

  isValidField(field: string) {
    return (
      this.loginForm.get(field)?.valid ||
      !(this.loginForm.get(field)?.touched || this.loginForm.get(field)?.dirty)
    );
  }

  onLogin() {
    if (this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['']),
      error: () => {
        this.loginForm.get('email')?.setErrors({ invalid: true });
        this.loginForm.get('password')?.setErrors({ invalid: true });
      },
    });
  }
}
