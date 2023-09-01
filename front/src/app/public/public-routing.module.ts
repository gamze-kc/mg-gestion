import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AjoutCompteComponent } from './ajout-compte/ajout-compte.component';

const routes: Routes = [
  {path : '', redirectTo : 'auth', pathMatch : 'full'}, 
  { path : 'auth', component : AuthComponent, loadChildren : () => import('./auth/auth.module').then((m)=> m.AuthModule)}, 
  { path : 'inscription', component : AjoutCompteComponent, loadChildren : () => import('./ajout-compte/ajout-compte.module').then((m)=> m.AjoutCompteModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
