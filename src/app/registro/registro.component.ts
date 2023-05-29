import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private documentservice:DocumentService,
    private snackBar: MatSnackBar




  ) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      alergias: [''],
      observaciones: [''],
      codigoPostal: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  openSnackBar() {
    this.snackBar.open('Las contraseñas no son iguales', 'Cerrar', {
      duration: 3000, // Duración en milisegundos
    });
  }
  openSnackBarCreate() {
    this.snackBar.open('Usuario creado', 'Cerrar', {
      duration: 3000,
      panelClass: 'custom-snackbar'
    });
  }

  submit(event: Event) {

    if (
      this.form.get('password')?.value ===
      this.form.get('confirmPassword')?.value
    ) {
      this.userService
        .register({
          email: this.form.get('email')!.value,
          password: this.form.get('password')!.value,
        })
        .then(async response => {
         await this.documentservice.create("/clientes",this.form.value)
         this.openSnackBarCreate();

        })
        .catch((error) => console.log(error));
    } else {
      this.openSnackBar()

    }
  }
}
