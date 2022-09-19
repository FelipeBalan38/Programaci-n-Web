import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './section/header/header.component';
import { FondComponent } from './section/fond/fond.component';
import { TituloComponent } from './section/titulo/titulo.component';
import { PieComponent } from './section/pie/pie.component';
<<<<<<< Updated upstream
=======
import { CarruselComponent } from './section/carrusel/carrusel.component';
import { EnviadoComponent } from './AtencionC/enviado/enviado.component';
import { FormularioComponent } from './AtencionC/formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { FondoPComponent } from './section/fondo-p/fondo-p.component';
import { FondoIniComponent } from './section/fondo-ini/fondo-ini.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FondComponent,
    TituloComponent,
<<<<<<< Updated upstream
    PieComponent
=======
    PieComponent,
    CarruselComponent,
    EnviadoComponent,
    FormularioComponent,
    HomeComponent,
    FondoPComponent,
    FondoIniComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
