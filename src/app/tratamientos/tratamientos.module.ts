import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TratamientosComponent } from './tratamientos.component';
import { TratamientosRoutingModule } from './tratamientos-routing.module';



@NgModule({
  declarations: [
    TratamientosComponent
  ],
  imports: [
    CommonModule,
    TratamientosRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class TratamientosModule { }
