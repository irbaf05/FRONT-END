import { Component } from '@angular/core';
import {LoginDialogComponent} from "../../../layouts/login-dialog/login-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  constructor(private dialog: MatDialog) {}

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {

    });
  }
}
