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
import { PlanComponent } from './seccion2/plan/plan.component';
import { HomeComponent } from './home/home.component';
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
    PlanComponent,
    HomeComponent
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
