
import { Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';

import { DocumentService } from './document.service';
import { DocumentData, DocumentReference } from 'firebase/firestore';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { where } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})

export class PedirCitaService {
  constructor(private auth: Auth, private documentService: DocumentService, private userService: UserService) {}

  async create(cita: any): Promise<DocumentReference<DocumentData>> {
    return await this.documentService.create('citas', cita);

  }
 getCitas(clientUid: string) {
  console.log(clientUid);

   return this.documentService.list<any>('citas', [where("idCliente", "==", clientUid)]);
}
}
