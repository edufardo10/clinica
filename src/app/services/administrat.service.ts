
import { Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';

import { DocumentService } from './document.service';
import { DocumentData, DocumentReference } from 'firebase/firestore';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
@Injectable({
  providedIn: 'root',
})

export class AdministrarService {

  constructor(private auth: Auth, private documentService: DocumentService) {}

 getCitas() {
   return this.documentService.list<any>('citas')
}
getClientes() {
  return this.documentService.list<any>('clientes')
}
async validateCita(cita: any) {
  await this.documentService.update('citas',cita);
}

}


