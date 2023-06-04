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
  form = this.formBuilder.group({
    tratamiento: ['', Validators.required],
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
  });
   user$ = this.userService.user;
  horas: string[] = Array.from({ length: 13 }, (_, index) => `${index + 9}:00`);
  userUid!: string;
  citas$: Observable<any[]> = EMPTY;
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
        this.userUid = await this.getCitas()
      })();
  }

  init() {
    this.user$ = this.user$.pipe(
      tap((user) => {
        if(user) {
          this.userUid = user.uid
        }
      })
    )
    this. citas$ = this.citaService.getCitas(this.userUid).pipe(
      take(1),
      tap((citas) => {
        if (citas){
          this.citasClientes = citas;

        }
      })
    )
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

  async getCitas() {
  }
}
