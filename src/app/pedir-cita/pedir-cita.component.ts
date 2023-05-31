import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TratamientosComponent } from '../tratamientos/tratamientos.component';

@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css'],
})
export class PedirCitaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public tratamientosComponent: TratamientosComponent
  ) {
    this.form = this.formBuilder.group({
      tratamiento: ['', Validators.required],
      fecha:['', Validators.required],
    });
  }
  ngOnInit() {


  }

  onSubmit() {
    console.log(this.form.value);
  }
}
