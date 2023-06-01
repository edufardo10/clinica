import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TratamientosComponent } from '../tratamientos/tratamientos.component';
import { UserService } from '../services/user.service';
import { firstValueFrom } from 'rxjs';
import { PedirCitaService } from '../services/pedir-cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css'],
})
export class PedirCitaComponent implements OnInit {
  form: FormGroup;
  user$ = this.userService.user;
  horas: string[] = Array.from({ length: 13 }, (_, index) => `${index + 9}:00`);



  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public tratamientosComponent: TratamientosComponent,
    private citaService: PedirCitaService,
    private snackBar: MatSnackBar

  ) {
    this.form = this.formBuilder.group({
      tratamiento: ['', Validators.required],
      fecha:['', Validators.required],
      hora:['', Validators.required],
    });
  }
  ngOnInit() {


  }

 async onSubmit() {
  const user=await firstValueFrom(this.user$);
  if (user) {
    await this.citaService.create({...this.form.value,displayName: user?.displayName,idCliente:user?.uid})
    this.openSnackBarCreate();
  }
  }

  openSnackBarCreate() {
    this.snackBar.open('Cita creada', 'Cerrar', {
      duration: 3000,
      panelClass: 'verde'


    });
  }
}

