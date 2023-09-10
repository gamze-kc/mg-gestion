import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ParametreAppComponent } from './parametre-app/parametre-app.component';

const routes: Routes = [
  { path : '', redirectTo : 'dashboard', pathMatch : 'full'}, 
  { path : 'dashboard', component : DashboardComponent, loadChildren : () => import('./dashboard/dashboard.module').then((m)=> m.DashboardModule)}, 
 { path : 'ticket', component : TicketComponent, loadChildren : () =>import('./ticket/ticket.module').then((m)=>m.TicketModule)},
 { path : 'utilisateur', component: UtilisateurComponent, loadChildren : () => import('./utilisateur/utilisateur.module').then((m)=> m.UtilisateurModule)}, 
 { path : 'paramsApp' , component : ParametreAppComponent, loadChildren : () => import('./parametre-app/parametre-app.module').then((m)=>m.ParametreAppModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
