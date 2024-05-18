import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeContentComponent } from './pages/landingpage/welcome-content/welcome-content.component';
import { RegisterUserComponent} from "./pages/register/register-user/register-user.component";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeContentComponent },
  // Añade más rutas aquí según tus necesidades
  { path: 'register', component: RegisterUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
