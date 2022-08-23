import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'moduleadmin', loadChildren: () => import('./moduleadmin/moduleadmin.module').then(m => m.ModuleadminModule)},
  { path: 'moduleclient', loadChildren: () => import('./moduleclient/moduleclient.module').then(m => m.ModuleclientModule)},
  { path: '',redirectTo:'moduleclient', pathMatch: 'full'},
  { path: "**",component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
