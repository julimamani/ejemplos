import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { Pto1Component } from './components/pto1/pto1.component';
import { Pto2Component } from './components/pto2/pto2.component';
import { Pto3Component } from './components/pto3/pto3.component';

const routes: Routes = [
  {path:"punto1", component: Pto1Component},
  {path:"punto2", component: Pto2Component},
  {path:"punto3", component: Pto3Component},
  {path:"punto-mensaje", component: MensajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
