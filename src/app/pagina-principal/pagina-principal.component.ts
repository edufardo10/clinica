import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  Swiper,
} from 'swiper';
import { ClienteService } from '../services/cliente.service';
import { Route, Router } from '@angular/router';
import { firstValueFrom, from } from 'rxjs';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
})
export class PaginaPrincipalComponent {
  user$ = this.userService.user;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  moverACitas() {
    this.router.navigate(['pedir-cita']);
  }
  async openSnackBar() {
    this.snackBar.open(
      'Primero debes estar logueado, para pedir una cita',
      'Cerrar',
      {
        duration: 3000,
      }
    );
  }
}
