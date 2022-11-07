import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosformComponent } from './admin/avisosform/avisosform.component';
import { PrincipalComponent } from './admin/principal/principal.component';
import { EnviadoComponent } from './AtencionC/enviado/enviado.component';
import { AvPagoComponent } from './av-pago/av-pago.component';
import { HomeComponent } from './home/home.component';
import { CrearavisoComponent } from './section/crearaviso/crearaviso.component';
import { FondPComponent } from './section/fond-p/fond-p.component';
import { InformacionComponent } from './section/informacion/informacion.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'infor',component:InformacionComponent},
  {path:'ATC', component:FondPComponent},
  {path:'Envio', component:EnviadoComponent},
  {path:'AVP',component:AvPagoComponent},
  {path:'Admin', component:PrincipalComponent},
  {path: 'Adm', component:AvisosformComponent},
  {path: 'AdminAvisos', component:CrearavisoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
