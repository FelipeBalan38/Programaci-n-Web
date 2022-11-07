import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobadoPagComponent } from './aprobado-pag/aprobado-pag.component';
import { EnviadoComponent } from './AtencionC/enviado/enviado.component';
import { AvPagoComponent } from './av-pago/av-pago.component';
import { HomeComponent } from './home/home.component';
import { PagoAdminComponent } from './pago-admin/pago-admin.component';
import { FondPComponent } from './section/fond-p/fond-p.component';
import { InformacionComponent } from './section/informacion/informacion.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'infor',component:InformacionComponent},
  {path:'ATC', component:FondPComponent},
  {path:'Envio', component:EnviadoComponent},
  {path:'AVP',component:AvPagoComponent},

  {path:'prueba',component:PagoAdminComponent},
  {path:'roma',component:AprobadoPagComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
