import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './ajout/menu/menu.component';
import { CommandeComponent } from './commande/commande.component';
import { Commande1clientComponent } from './commande/commande1client/commande1client.component';
import { CommandelivaisonComponent } from './commande/commandelivaison/commandelivaison.component';
import { ListcommandeComponent } from './commande/listcommande/listcommande.component';
import { ListlivaisonComponent } from './commande/listlivaison/listlivaison.component';
import { ListlivaisonencoursComponent } from './commande/listlivaisonencours/listlivaisonencours.component';
import { ZoneComponent } from './commande/zone/zone.component';

const routes: Routes = [
  
  { path: 'clients/29/commandes', component: Commande1clientComponent },
  { path: 'commande', component: ListcommandeComponent },
  { path: 'livreur', component: ListcommandeComponent },
  { path: 'zone/:id', component: CommandeComponent },
  { path: 'livraison', component: CommandeComponent},
  { path: 'livraisonencours', component: CommandeComponent},
  { path: 'livraisons/:id/commandes', component: CommandelivaisonComponent},
  { path: 'menu', component: CommandeComponent},
  { path: '', component: CommandeComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleadminRoutingModule { }
