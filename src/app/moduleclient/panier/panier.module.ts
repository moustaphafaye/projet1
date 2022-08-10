import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier.component';
import { ProduitpanierComponent } from './produitpanier/produitpanier.component';




@NgModule({
  declarations: [
    PanierComponent,
    ProduitpanierComponent,
    
  ],
  imports: [
    CommonModule,
    
  ]
})
export class PanierModule { }
