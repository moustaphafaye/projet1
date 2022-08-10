import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { DetailsComponent } from './page/details/details.component';

import { HomeComponent } from './page/home/home.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'login', component: LoginComponent },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleclientRoutingModule { }
