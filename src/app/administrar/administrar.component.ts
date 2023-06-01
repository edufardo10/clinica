import { Component } from '@angular/core';
import { AdministrarService } from '../services/administrat.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css'],
})
export class AdministrarComponent {
  dataSource:any;
  displayedColumns = ['displayName','fecha','hora','id','idCliente']
  constructor(

    private adminsitraService: AdministrarService
  ) {
    this.getCitas()
  }

  async getCitas() {
     this.dataSource = await firstValueFrom(this.adminsitraService.getCitas());
    console.log(this.dataSource);


}

obtenerFechaLegible(fechaTimestamp: any): string {
  const segundos = fechaTimestamp.seconds;
  const fecha = new Date(segundos * 1000);
  return fecha.toLocaleDateString('es-ES');
}

}
