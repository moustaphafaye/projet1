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
import { ListComponent } from './page/list/list.component';
import { TailleComponent } from './components/taille/taille.component';
import { TailleboiComponent } from './components/tailleboi/tailleboi.component';
import { BoissonComponent } from './components/boisson/boisson.component';
import { BoissonmenuComponent } from './components/boissonmenu/boissonmenu.component';
import { MenutailComponent } from './components/menutail/menutail.component';
import { MenutaillesComponent } from './components/menutailles/menutailles.component';
import { LoginComponent } from '../login/login/login.component';
import { LoginModule } from '../login/login.module';
import { InscriptionsModule } from '../inscriptions/inscriptions.module';
import { CommandeComponent } from './page/commande/commande.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



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
    ListComponent,
    TailleComponent,
    TailleboiComponent,
    BoissonComponent,
    BoissonmenuComponent,
    MenutailComponent,
    MenutaillesComponent,
    CommandeComponent
  ],
  imports: [
    CommonModule,
    ModuleclientRoutingModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    LoginModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    InscriptionsModule,
    PanierModule,
    NgxPaginationModule,
  ],exports:[
    CardComponent
  ]
})
export class ModuleclientModule { }
