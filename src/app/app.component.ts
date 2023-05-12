import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto';
   constructor( private router: Router){
    console.log(this.router.url);

   }

   ngOnInit(): void {
    console.log(this.router.url);

   }

   test() {
    console.log(this.router.url);
    if (this.router.url==="registro"){
      return true;
    }else{
      return false;
    }

   }
   path: string= this.router.url

  images = [
    { path: '../assets/img/img1.jpg' },
    { path: '../assets/img/img2.jpg' },
    { path: '../assets/img/img3.jpg' },
    { path: '../assets/img/img4.jpg' },
    { path: '../assets/img/img5.jpg' }
  ];
}
