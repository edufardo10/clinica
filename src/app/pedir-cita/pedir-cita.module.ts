import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedirCitaComponent } from './pedir-cita.component';
import { PedirCitaRoutingModule } from './pedir-cita-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PedirCitaComponent],
  imports: [
    CommonModule,
    PedirCitaRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    


  ],
})
export class PedirCitaModule {}
