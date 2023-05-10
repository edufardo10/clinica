import { Injectable } from '@angular/core';
import { DocumentService } from './document.serices';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private documentService: DocumentService,
  ) { }

  async createTest(path: string) {
    await this.documentService.create(path, {edad: 18, nombre: "luis"});
  
  }
}
