import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedirCitaComponent } from './pedir-cita.component';

const routes: Routes = [{ path: '', component: PedirCitaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedirCitaRoutingModule { }
