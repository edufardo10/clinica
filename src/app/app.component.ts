import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';
import { DocumentService } from './services/document.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'proyecto';
  test: any;
  nombre: string = '';
  user$ = this.userService.user;

  headerClass: string = '';
  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    this.verifyLoggin();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);

        this.updateHeaderClass();
      }
    });
  }
  updateHeaderClass() {
    const ruta = this.router.url;
    if (ruta === '/') {
      this.headerClass = 'navbar';
    } else {
      this.headerClass = 'navbarnew';
    }
  }
  path: string = this.router.url;

  images = [
    { path: '../assets/img/img1.jpg' },
    { path: '../assets/img/img2.jpg' },
    { path: '../assets/img/img3.jpg' },
    { path: '../assets/img/img4.jpg' },
    { path: '../assets/img/img5.jpg' },
  ];

  moverALogin() {
    this.router.navigate(['/login']);
  }
  verifyLoggin() {
    return this.userService.isLogin();
  }
  logoutSession() {
    this.userService.logout();
  }
  

  ngOnDestroy(): void {
    this.router.events;
  }
}
