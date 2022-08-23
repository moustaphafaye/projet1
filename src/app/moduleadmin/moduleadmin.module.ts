import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleadminRoutingModule } from './moduleadmin-routing.module';
import { ListcommandeComponent } from './commande/listcommande/listcommande.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Commande1clientComponent } from './commande/commande1client/commande1client.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommandeComponent } from './commande/commande.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LivreurComponent } from './commande/livreur/livreur.component';
import { ZoneComponent } from './commande/zone/zone.component';
import { ListlivaisonComponent } from './commande/listlivaison/listlivaison.component';
import { ListlivaisonencoursComponent } from './commande/listlivaisonencours/listlivaisonencours.component';
import { CommandelivaisonComponent } from './commande/commandelivaison/commandelivaison.component';
import { MenuComponent } from './ajout/menu/menu.component';
@NgModule({
  declarations: [
    ListcommandeComponent,
    Commande1clientComponent,
    CommandeComponent,
    LivreurComponent,
    ZoneComponent,
    ListlivaisonComponent,
    ListlivaisonencoursComponent,
    CommandelivaisonComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ModuleadminRoutingModule,
    
  ]
})
export class ModuleadminModule { }
