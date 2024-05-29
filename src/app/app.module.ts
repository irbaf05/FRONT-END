import { NgModule } from '@angular/core';
import {BrowserModule, HammerGestureConfig} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WelcomeContentComponent } from './pages/landingpage/welcome-content/welcome-content.component';
import { LoginDialogComponent } from './layouts/login-dialog/login-dialog.component';
import {AppRoutingModule} from "./app.routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterUserComponent} from "./pages/register/register-user/register-user.component";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeContentComponent,
    LoginDialogComponent,
    RegisterUserComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
