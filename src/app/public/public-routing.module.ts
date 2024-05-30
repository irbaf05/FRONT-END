import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeContentComponent} from "./landingpage/welcome-content/welcome-content.component";




const routes: Routes = [

  { path:'', component:WelcomeContentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {

}
