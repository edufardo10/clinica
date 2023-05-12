
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
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
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

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
