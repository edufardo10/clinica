import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedirCitaComponent } from './pedir-cita.component';
import { PedirCitaRoutingModule } from './pedir-cita-routing.module';



@NgModule({
  declarations: [
    PedirCitaComponent
  ],
  imports: [
    CommonModule,
    PedirCitaRoutingModule
  ]
})
export class PedirCitaModule { }
