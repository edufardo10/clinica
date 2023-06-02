import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarComponent } from './administrar.component';
import { AdministrarRoutingModule } from './administrar.routing.module';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AdministrarComponent],
  imports: [
    CommonModule,
    AdministrarRoutingModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatInputModule,
    MatIconModule
  ],
})
export class AdministrarModule {}
