import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pagina-principal/pagina-principal.module').then(
        (m) => m.PaginaPrincipalModule
      ),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./registro/registro.module').then((m) => m.RegistroModule),
  },
  {
    path: 'pedir-cita',
    loadChildren: () =>
      import('./pedir-cita/pedir-cita.module').then((m) => m.PedirCitaModule),
  },
  {
    path: 'tratamientos',
    loadChildren: () =>
      import('./tratamientos/tratamientos.module').then(
        (m) => m.TratamientosModule
      ),
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () =>
      import('./sobre-nosotros/sobre-nosotros.module').then(
        (m) => m.SobreNosotrosModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
