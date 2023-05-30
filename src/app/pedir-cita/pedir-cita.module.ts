import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedirCitaComponent } from './pedir-cita.component';
import { PedirCitaRoutingModule } from './pedir-cita-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';






@NgModule({
  declarations: [
    PedirCitaComponent
  ],
  imports: [
    CommonModule,
    PedirCitaRoutingModule,
   MatDatepickerModule
  ]
})
export class PedirCitaModule { }
