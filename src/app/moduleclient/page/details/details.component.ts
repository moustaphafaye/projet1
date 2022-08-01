import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produit';
import { Complement } from 'src/app/shared/models/complement';
import { DetailMenu } from 'src/app/shared/models/detailsMenu';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input('') prod! : Produit
  @Input('') prodd! : DetailMenu
  posts : Catalogue|undefined=undefined;
  complete : Complement|undefined=undefined
  complement: Produit[]|undefined=undefined 

  activeRoute: any;
  
  constructor( private mba:ProduitService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.params['id'];
    const valeur=null
    // console.log()
    this.mba.getProduit(id).subscribe(
      produit=>{
        // console.log(this.posts)
        // console.log(produit.type)
        this.prod =produit
      }
    )
    this.mba.getMenu(id).subscribe(
      produite=>{
        this.prodd =produite
        // this.valeur=produite.menuburger
        
      }
    )
    this.mba.complet().subscribe(data=>{

      this.complete =data
      this.complement=this.complete?.complement
      // console.log(this.complement)
      
   });
  }
}
