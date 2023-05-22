
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {SwiperModule} from 'swiper/angular';


// Firebase
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {provideAuth, getAuth, connectAuthEmulator} from '@angular/fire/auth';
import {provideFirestore, getFirestore, connectFirestoreEmulator} from '@angular/fire/firestore';
import {provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import {provideStorage, getStorage, connectStorageEmulator} from '@angular/fire/storage';
import { environment } from 'src/environment/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CarouselModule,
    HttpClientModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();

      /* if (!environment.production) {
        connectAuthEmulator(auth, 'http://localhost:9099')
      } */

      return auth;
    }),
    provideFirestore(() => {
      const Firestore = getFirestore()

     /*  if (!environment.production) {
        connectFirestoreEmulator(Firestore, 'localhost', 8080)
      } */

      return Firestore
    }),
    provideFunctions(() => {
      const Functions = getFunctions();
      Functions.region = 'europe-west1';

      /* if (!environment.production) {
        connectFunctionsEmulator(Functions, 'localhost', 5001)
      } */

      return Functions
    }),
    provideStorage(() => {
      const Storage = getStorage()

      /* if (!environment.production) {
        connectStorageEmulator(Storage, 'localhost', 9199)
      } */

      return Storage
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
