import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleclientRoutingModule } from './moduleclient-routing.module';
import { ModuleclientComponent } from './moduleclient.component';
import { HomeComponent } from './page/home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { PubliciteComponent } from './page/home/publicite/publicite.component';
import { ProduitComponent } from './page/home/produit/produit.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './page/details/details.component';
import { AsideComponent } from './components/aside/aside.component';
import { AutreproduiComponent } from './components/autreprodui/autreprodui.component';
import { PanierModule } from './panier/panier.module';
import { QuantiteComponent } from './components/quantite/quantite.component';
import { DetailsmenuComponent } from './page/detailsmenu/detailsmenu.component';
import { DetailsburgerComponent } from './page/detailsburger/detailsburger.component';
import { ListComponent } from './page/list/list.component';



@NgModule({
  declarations: [
    HomeComponent,
    PubliciteComponent,
    ProduitComponent,
    CardComponent,
    DetailsComponent,
    AsideComponent,
    AutreproduiComponent,
    QuantiteComponent,
    DetailsmenuComponent,
    DetailsburgerComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ModuleclientRoutingModule,
    LayoutModule,
    RouterModule,
    PanierModule,
  ],exports:[
    CardComponent
  ]
})
export class ModuleclientModule { }
