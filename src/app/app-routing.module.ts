import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './moduleclient/page/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'moduleclient', loadChildren: () => import('./moduleclient/moduleclient.module').then(m => m.ModuleclientModule) },
  { path: '',redirectTo:'moduleclient', pathMatch: 'full'},
  { path: "**",component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
