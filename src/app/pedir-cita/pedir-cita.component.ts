import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TratamientosComponent } from '../tratamientos/tratamientos.component';
import { UserService } from '../services/user.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css'],
})
export class PedirCitaComponent implements OnInit {
  form: FormGroup;
  user$ = this.userService.user;



  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public tratamientosComponent: TratamientosComponent,

  ) {
    this.form = this.formBuilder.group({
      tratamiento: ['', Validators.required],
      fecha:['', Validators.required],
    });
  }
  ngOnInit() {


  }

 async onSubmit() {
    console.log(this.form.value);
    const user = await firstValueFrom(this.user$)
  console.log(user?.uid);

  }
}
