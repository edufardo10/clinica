import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TratamientosComponent } from '../tratamientos/tratamientos.component';
import { UserService } from '../services/user.service';
import { EMPTY, Observable, firstValueFrom, take, tap } from 'rxjs';
import { PedirCitaService } from '../services/pedir-cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css'],
})
export class PedirCitaComponent implements OnInit {
  userUid$: Observable<any> = EMPTY;
  formattedDate: any;

  form = this.formBuilder.group({
    tratamiento: ['', Validators.required],
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
  });
   user$ = this.userService.user;
  horas: string[] = Array.from({ length: 13 }, (_, index) => `${index + 9}:00`);
  userUid!: string;
  citasClientes: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public tratamientosComponent: TratamientosComponent,
    private citaService: PedirCitaService,
    private snackBar: MatSnackBar

  ) {
      this.init();
      (async () => {

      })();
  }

  init() {
    this.user$ = this.user$.pipe(
      tap(async (user) => {
        if(user) {

          this.citasClientes = await firstValueFrom(this.citaService.getCitas(user.uid));
          console.log(this.citasClientes[0].validateCita);

          const timeStamp=this.citasClientes[0].fecha;
          const date = new Date(timeStamp.seconds * 1000);
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();

         this.formattedDate = `${day}/${month}/${year}`;




        }
      })
    );

  }
  ngOnInit() {


  }

  async onSubmit() {
    const user = await firstValueFrom(this.user$);
    if (user) {
      await this.citaService.create({
        ...this.form.value,
        displayName: user?.displayName,
        idCliente: user?.uid,
        deleteCita:false
      });
      this.openSnackBarCreate();
    }
  }

  openSnackBarCreate() {
    this.snackBar.open('Cita creada', 'Cerrar', {
      duration: 3000,
      panelClass: 'verde',
    });
  }


}
