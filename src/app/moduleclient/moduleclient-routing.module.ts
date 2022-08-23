import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from '../inscriptions/inscription/inscription.component';
import { LoginComponent } from '../login/login/login.component';
import { CommandeComponent } from './page/commande/commande.component';
import { DetailsComponent } from './page/details/details.component';

import { HomeComponent } from './page/home/home.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  // { path: 'clients/29/commandes', component: CommandeComponent }
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleclientRoutingModule { }
