import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router
     ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  ngOnInit() {}

  submit(event: Event) {
    this.userService.register(this.form.get("email")!.value)
    .then(response=>{
      console.log(response)
      response.user.uid

      this.router.navigate([''])

    })
    .catch(error=>console.log(error));

  }
}
