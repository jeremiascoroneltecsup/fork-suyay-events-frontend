import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.loading = false;          let errorMessage = 'Error al iniciar sesión. Intente nuevamente.';
          
          if (error.error?.detail?.[0]?.msg) {
            errorMessage = error.error.detail[0].msg;
          } else if (error.status === 401) {
            errorMessage = 'Correo o contraseña incorrectos';
          } else if (error.status === 422) {
            errorMessage = 'Por favor, verifique los datos ingresados';
          }          this.snackBar.open(errorMessage, 'Cerrar', {
            duration: 5000,
            panelClass: ['custom-error-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
}
