import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

interface Registro {
  nombre: string;
  fechaNacimiento: string;
  genero: string;
  telefono: string;
  email: string;
  alergias: string;
  observaciones:string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  generos = [
    'hombre',
    'mujer',

  ]

  form = this.fb.group({
    nombre: ["", Validators.required],
   /*  fechaNacimiento: ['', ],
    genero: '',
    telefono: '',
    email: '', // asegúrate de que la propiedad email esté definida
    alergias:'',
    observaciones:'' */
  })

  constructor (
    private fb: FormBuilder,
  ) {

  }

  submit(registroForm: NgForm) {
    if (registroForm.valid) {
      // Aquí puedes agregar la lógica para enviar los datos a Firebase
   /*    console.log(this.registro.email);  */// asegúrate de que la propiedad email esté siendo asignada correctamente
    }
  }
}
