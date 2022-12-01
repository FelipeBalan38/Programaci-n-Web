import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmiUsuariosComponent } from './admin/admi-usuarios/admi-usuarios.component';
import { TablaUserComponent } from './admin/admi-usuarios/tabla-user/tabla-user.component';
import { AdminpagosComponent } from './admin/adminpagos/adminpagos.component';
import { AdminquejasComponent } from './admin/adminquejas/adminquejas.component';
import { QuejasatenComponent } from './admin/adminquejas/quejasaten/quejasaten.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { AvisoComponent } from './admin/aviso/aviso.component';
import { AvisosformComponent } from './admin/avisosform/avisosform.component';
import { PrincipalComponent } from './admin/principal/principal.component';
import { EnviadoComponent } from './AtencionC/enviado/enviado.component';
import { AvPagoComponent } from './av-pago/av-pago.component';
import { HomeComponent } from './home/home.component';
import { PagoPagadoComponent } from './pago-pagado/pago-pagado.component';
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
  {path:'usuario',component:AdmiUsuariosComponent},
  {path:'roma',component:AdminpagosComponent},
  {path:'adeu',component:PagoPagadoComponent},
  {path: 'QuejasAtendidas', component:QuejasatenComponent},
  {path: 'Johan',component:TablaUserComponent},
  {path: 'app',component:AvisoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
