import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ZonaCitasComponent } from './zona-citas/zona-citas.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PedirCitaComponent } from './pedir-cita/pedir-cita.component';


const routes: Routes = [
  {
    path: 'test',
    loadChildren: () => import('./pagina-principal/pagina-principal.module').then(m => m.PaginaPrincipalModule)
  },  
  { path: '', component: PaginaPrincipalComponent },
  { path: 'citas', component: ZonaCitasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'pedir-cita', component: PedirCitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }