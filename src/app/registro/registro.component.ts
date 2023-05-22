import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      alergias: [''],
      observaciones: [''],
      codigoPostal: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  submit(event: Event) {
    event.preventDefault();

    // Aquí puedes agregar la lógica para enviar los datos del formulario
  }
}
