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
  submit(event: Event) {
    alert('clicaste');
    if (
      this.form.get('password')?.value ===
      this.form.get('confirmPassword')?.value
    ) {
      this.userService
        .register({
          email: this.form.get('email')!.value,
          password: this.form.get('alergias')!.value,
        })
        .then((response) => {
          console.log(response);
          this.documentservice.create("/clientes",this.form.value)

        })
        .catch((error) => console.log(error));
    } else {
      alert('Las contraseñas son diferentes');
    }
  }
}
