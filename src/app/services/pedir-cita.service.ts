
import { Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';

import { DocumentService } from './document.service';
import { DocumentData, DocumentReference } from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})

export class PedirCitaService {
  constructor(private auth: Auth, private documentService: DocumentService) {}

  async create(user: any): Promise<DocumentReference<DocumentData>> {
    return await this.documentService.create('citas', user);

  }
}
