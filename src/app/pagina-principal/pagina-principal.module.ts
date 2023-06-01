import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { PaginaPrincipalComponent } from './pagina-principal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({

  declarations: [
    PaginaPrincipalComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    PaginaPrincipalRoutingModule,
    MatSnackBarModule

  ]

})
export class PaginaPrincipalModule { }
