import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosotrosComponent } from './sobre-nosotros.component';
import { SobreNosotrosRoutingModule } from './sobre-nosotros.routing.module';




@NgModule({
  declarations: [
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule,
    SobreNosotrosRoutingModule
  ]
})
export class SobreNosotrosModule { }
