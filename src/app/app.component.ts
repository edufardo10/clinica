import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';



  images = [
    { path: '../assets/img/img1.jpg' },
    { path: '../assets/img/img2.jpg' },
    { path: '../assets/img/img3.jpg' },
    { path: '../assets/img/img4.jpg' },
    { path: '../assets/img/img5.jpg' }
  ];
}
