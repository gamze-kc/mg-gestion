import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  {path : '', redirectTo : 'public', pathMatch : 'full'}, 
  { path : 'public', component : PublicComponent, loadChildren : () => import('./public/public.module').then((m)=> m.PublicModule)}, 
  { path : 'protected', component : ProtectedComponent, loadChildren : () => import('./protected/protected.module').then((m)=> m.ProtectedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
