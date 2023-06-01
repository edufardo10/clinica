import { Injectable } from '@angular/core';
import {
  Auth,
  User,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import { switchMap } from 'rxjs';
import { DocumentService } from './document.service';
import { DocumentData, DocumentReference } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth, private documentService: DocumentService) {}

  user = authState(this.auth);
  private isAdmin = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdmin.asObservable();

  get(uid: string) {
    return this.documentService.get<any>('contracts/' + uid);
  }

  async register(email: string, password: string, displayName: string) {
    await createUserWithEmailAndPassword(this.auth, email, password);
    const user = await firstValueFrom(this.user);
    if (user) {
      await updateProfile(user, { displayName: displayName, photoURL: '' });
    }
    return user;
  }

  async create(user: any): Promise<DocumentReference<DocumentData>> {
    return await this.documentService.create('clientes', user);
  }

  async login({ email, password }: any) {
    const credentials = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    if (credentials.user.uid === 'jpi7pWAUrDN67UDKB5aGcFAQVni2') {
      this.isAdmin.next(true)
    }
    return credentials;
  }

  async logout() {
    this.isAdmin.next(false);
    return await signOut(this.auth);
  }

  showUser() {
    return this.auth.currentUser;
  }

  isLogin() {
    if (this.auth.currentUser !== null) {
      return true;
    } else {
      return false;
    }
  }
}
