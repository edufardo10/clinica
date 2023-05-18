import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PedirCitaComponent } from './pedir-cita/pedir-cita.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pagina-principal/pagina-principal.module').then(m => m.PaginaPrincipalModule),

  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule),

  },
  {
    path: 'pedir-cita',
    loadChildren: () => import('./pedir-cita/pedir-cita.module').then(m => m.PedirCitaModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
