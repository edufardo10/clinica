import { Component } from '@angular/core';



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
import { from } from 'rxjs';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
})
export class PaginaPrincipalComponent {


  cliente: any={
    nombre:"a",
    telefono:"91555",
    direccion:"b",
    observacion:"c",
    alergias:"d",
    codigoPostal: 0,
  }

  constructor(private clienteService: ClienteService,private router:Router) {


  }
  async database(){
    await this.clienteService.create(this.cliente)
   }


   moverACitas(){
    this.router.navigate(["/citas"])

   }
}


