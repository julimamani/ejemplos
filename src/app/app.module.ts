import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pto1Component } from './components/pto1/pto1.component';
import { Pto2Component } from './components/pto2/pto2.component';
import { Pto3Component } from './components/pto3/pto3.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { FormsModule } from '@angular/forms';
import { SinCaracterEspecial, sinPrimeraLetraMayuscula } from './directivas/validacion.directive';

@NgModule({
  declarations: [
    AppComponent,
    Pto1Component,
    Pto2Component,
    Pto3Component,
    HeaderComponent,
    FooterComponent,
    MensajeComponent,
    SinCaracterEspecial,
    sinPrimeraLetraMayuscula
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
