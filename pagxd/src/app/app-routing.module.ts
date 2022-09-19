import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FondComponent } from './section/fond/fond.component';
import { FondoIniComponent } from './section/fondo-ini/fondo-ini.component';
import { FondoPComponent } from './section/fondo-p/fondo-p.component';



const routes: Routes = [
  {path:'Title', component:FondoIniComponent},
  {path:'ATC', component:FondComponent},
  {path:'Envio', component:FondoPComponent},
  {path: '', redirectTo: '/Title', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
