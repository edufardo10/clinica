import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarComponent } from './administrar.component';
import { AdministrarRoutingModule } from './administrar.routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AdministrarComponent,
  ],
  imports: [
    CommonModule,
    AdministrarRoutingModule,
    MatTableModule,
    MatListModule
  ]
})
export class AdministrarModule { }
