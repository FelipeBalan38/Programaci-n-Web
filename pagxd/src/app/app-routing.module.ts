import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './seccion2/plan/plan.component';
import { FondComponent } from './section/fond/fond.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'planes',component:PlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
