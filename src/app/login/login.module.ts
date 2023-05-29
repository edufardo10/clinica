import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutinModule } from './login-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    LoginRoutinModule,
    MatButtonModule,
    MatSnackBarModule
  ],
})
export class LoginModule {}
