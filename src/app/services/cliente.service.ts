import { Injectable } from '@angular/core';
import { DocumentService } from './document.service';
import { DocumentData, DocumentReference} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private documentService: DocumentService
  ) { }

  async create(cliente: any): Promise<DocumentReference<DocumentData>> {
    const doc = await this.documentService.create('clientes', cliente);
    return doc;
  }
}
