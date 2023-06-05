import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';


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
      canActivate:[AuthGuardGuard]
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
  {
    path: 'administrar',
    loadChildren: () =>
      import('./administrar/administrar.module').then((m) => m.AdministrarModule),
      canActivate:[AuthGuardGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
