import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      first_names: ['', Validators.required],
      last_names: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue],
      acceptPrivacy: [false, Validators.requiredTrue],
      receiveInfo: [false]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const repeatPassword = form.get('repeatPassword');
    
    if (password && repeatPassword) {
      if (password.value !== repeatPassword.value) {
        repeatPassword.setErrors({ passwordMismatch: true });
      } else {
        const errors = { ...repeatPassword.errors };
        delete errors['passwordMismatch'];
        repeatPassword.setErrors(Object.keys(errors).length ? errors : null);
      }
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      const userData = {
        ...this.registerForm.value,
        role_id: 1, // Usuario normal por defecto
        avatar_url: '' // Campo opcional
      };
      
      delete userData.repeatPassword;
      delete userData.acceptTerms;
      delete userData.acceptPrivacy;
      delete userData.receiveInfo;

      this.authService.register(userData).subscribe({
        next: (response) => {
          this.snackBar.open('Registro exitoso', 'Cerrar', {
            duration: 3000
          });
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          this.loading = false;
          const errorMessage = error.error?.detail?.[0]?.msg || 'Error en el registro. Intente nuevamente.';
          this.snackBar.open(errorMessage, 'Cerrar', {
            duration: 5000
          });
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
}
