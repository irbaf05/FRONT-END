import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { LoginDialogComponent } from '../../../layouts/login-dialog/login-dialog.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialog: MatDialog
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: [''],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const user: User = {
        nombre: this.registerForm.value.nombre,
        telefono: this.registerForm.value.telefono,
        correo: this.registerForm.value.correo,
        password: this.registerForm.value.password
      };

      this.userService.registerUser(user).subscribe({
        next: (response) => {
          console.log('Usuario registrado exitosamente', response);
        },
        error: (error) => {
          console.error('Error registrando usuario', error);
        }
      });
    }
  }

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }
}
