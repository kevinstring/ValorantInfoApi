import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { MapComponent } from './componentes/maps/map.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { LoginComponent } from './componentes/login/login.component';
import { MostradorComponent } from './componentes/mostrador/mostrador.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { MiniSeleccionComponent } from './componentes/miniSeleccion/miniSeleccion.component';
import { DescripcionMapComponent } from './componentes/descripcionMap/descripcionMap.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdUdvU-WTXOHGvyyMTL8143lObk43MiR4",
  authDomain: "tareas-9b22b.firebaseapp.com",
  databaseURL: "https://tareas-9b22b-default-rtdb.firebaseio.com",
  projectId: "tareas-9b22b",
  storageBucket: "tareas-9b22b.appspot.com",
  messagingSenderId: "738833116937",
  appId: "1:738833116937:web:22e78ab481286f1b76add8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriaComponent,
    MapComponent,
    DescripcionComponent,
    LoginComponent,
    MostradorComponent,
    MiniSeleccionComponent,
    DescripcionMapComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
