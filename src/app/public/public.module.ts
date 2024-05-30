import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "../layouts/layout.module";
import {PublicRoutingModule} from "./public-routing.module";
import {WelcomeContentComponent} from "./landingpage/welcome-content/welcome-content.component";


@NgModule({
  declarations: [
    WelcomeContentComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
