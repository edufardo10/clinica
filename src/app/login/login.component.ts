import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  submit(event: Event) {
    this.userService
      .login(this.form.value)
      .then((response) => {
        this.router.navigate(['']);
        this.openSnackBar();
        this.userService.showUser()


      })
      .catch((error) => console.log(error));
      this.openSnackBarErrorLogin();
  }
  openSnackBar() {
    this.snackBar.open('Login Correcto', 'Cerrar', {
      duration: 3000,

    });
  }
  openSnackBarErrorLogin() {
    this.snackBar.open('Login Incorrecto', 'Cerrar', {
      duration: 3000,

    });
  }
}
