
import { Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';

import { DocumentService } from './document.service';
import { DocumentData, DocumentReference } from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})

export class AdministrarService {
  constructor(private auth: Auth, private documentService: DocumentService) {}
  
}
