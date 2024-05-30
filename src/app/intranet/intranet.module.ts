import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario/calendario.component';
import { AreasComponent } from './areas/areas.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { AsistenciasComponent } from './asistencias/asistencias.component';
import { ActividadesComponent } from './actividades/actividades.component';



@NgModule({
  declarations: [
    CalendarioComponent,
    AreasComponent,
    GestionUsuariosComponent,
    AsistenciasComponent,
    ActividadesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IntranetModule { }
