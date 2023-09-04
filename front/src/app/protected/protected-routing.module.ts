import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path : '', redirectTo : 'dashboard', pathMatch : 'full'}, 
  { path : 'dashboard', component : DashboardComponent, loadChildren : () => import('./dashboard/dashboard.module').then((m)=> m.DashboardModule)}, 
 { path : 'ticket', component : TicketComponent, loadChildren : () =>import('./ticket/ticket.module').then((m)=>m.TicketModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
