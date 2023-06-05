import { Component } from '@angular/core';
import { AdministrarService } from '../services/administrat.service';
import { EMPTY, Observable, firstValueFrom, tap } from 'rxjs';
@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css'],
})
export class AdministrarComponent {
  clientes: any;
  citas!: any[];
  dataSource: any;
  citas$: Observable<any[]> = EMPTY;
  displayedColumnsCitas = [
    'displayName',
    'fecha',
    'hora',
    'tratamiento',
    'idCliente',
    'actions',
  ];
  displayedColumnsClientes = ['displayName', 'id', 'telefono', 'email'];
  constructor(private adminsitraService: AdministrarService) {
    this.getClientes();
    this.getCitas();
  }
  async getClientes() {
    this.clientes = await firstValueFrom(this.adminsitraService.getClientes());
  }

  getCitas() {
    this.citas$ = this.adminsitraService.getCitas().pipe(
      tap( citas => {
        this.citas = citas;
      })
    );
  }
  async setCita(id: string, acept: boolean) {
    await this.adminsitraService.validateCita({ validateCita: acept, id: id });


  }

  obtenerFechaLegible(fechaTimestamp: any): string {
    const segundos = fechaTimestamp.seconds;
    const fecha = new Date(segundos * 1000);
    return fecha.toLocaleDateString('es-ES');
  }
  async deleteCita(id: string){
    await this.adminsitraService.delete({deleteCita:true,id:id});
  }
}
