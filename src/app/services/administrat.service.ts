
import { Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';

import { DocumentService } from './document.service';
import { DocumentData, DocumentReference } from 'firebase/firestore';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { where } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})

export class AdministrarService {

  constructor(private auth: Auth, private documentService: DocumentService) {}

 getCitas() {
   return this.documentService.list<any>('citas',[ where("deleteCita", "==", false)])
}
getClientes() {
  return this.documentService.list<any>('clientes')
}
async validateCita(cita: any) {
  await this.documentService.update('citas',cita);
}
async delete(cita: any) {
  await this.documentService.update('citas',cita);
}

}


