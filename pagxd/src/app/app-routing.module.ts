import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpagosComponent } from './admin/adminpagos/adminpagos.component';
import { AdminquejasComponent } from './admin/adminquejas/adminquejas.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { AvisosformComponent } from './admin/avisosform/avisosform.component';
import { PrincipalComponent } from './admin/principal/principal.component';
import { EnviadoComponent } from './AtencionC/enviado/enviado.component';
import { AvPagoComponent } from './av-pago/av-pago.component';
import { HomeComponent } from './home/home.component';
import { FondPComponent } from './section/fond-p/fond-p.component';
import { InformacionComponent } from './section/informacion/informacion.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'infor',component:InformacionComponent},
  {path:'ATC', component:FondPComponent},
  {path:'Envio', component:EnviadoComponent},
  {path:'AVP',component:AvPagoComponent},
  {path:'Admin', component:PrincipalComponent},
  {path: 'AdminUsers', component:AdminusersComponent},
  {path: 'AdminAvisos', component:AvisosformComponent},
  {path: 'AdminPagos', component:AdminpagosComponent},
  {path: 'AdminQuejas', component:AdminquejasComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
