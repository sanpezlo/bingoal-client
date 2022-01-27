import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@pages/auth/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  getErrorMessage(field: string): string {
    if (this.registerForm.get(field)?.hasError('required'))
      return `${field} should not be empty`;
    else if (this.registerForm.get(field)?.hasError('email'))
      return `${field} must be an email`;
    return `${field} is invalid`;
  }

  isValidField(field: string) {
    return (
      this.registerForm.get(field)?.valid ||
      !(
        this.registerForm.get(field)?.touched ||
        this.registerForm.get(field)?.dirty
      )
    );
  }

  onRegister() {
    if (this.registerForm.invalid) return;
    this.authService.register(this.registerForm.value).subscribe({
      next: () => this.router.navigate(['']),
      error: () => {
        this.registerForm.get('name')?.setErrors({ invalid: true });
        this.registerForm.get('email')?.setErrors({ invalid: true });
        this.registerForm.get('password')?.setErrors({ invalid: true });
      },
    });
  }
}
