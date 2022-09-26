import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FondComponent } from './section/fond/fond.component';
import { InformacionComponent } from './section/informacion/informacion.component';

const routes: Routes = [
  {path:'home',component:FondComponent},
  {path:'infor',component:InformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
