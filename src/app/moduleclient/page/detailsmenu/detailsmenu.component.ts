import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Complement } from 'src/app/shared/models/complement';
import { DetailMenu } from 'src/app/shared/models/detailsMenu';
import { Produit } from 'src/app/shared/models/produit';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-detailsmenu',
  templateUrl: './detailsmenu.component.html',
  styleUrls: ['./detailsmenu.component.css']
})
export class DetailsmenuComponent implements OnInit {

  @Input('') prod! : Produit
  @Input('') prodd! : DetailMenu
  posts : Catalogue|undefined=undefined;
  complete : Complement|undefined=undefined
  complement: Produit[]|undefined=undefined 

  activeRoute: any;
  
  constructor( private mba:ProduitService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.params['id'];
    
    this.mba.getProduit(id).subscribe(
      produit=>{
        // console.log(produit)
        this.prod =produit
      }
    )
    this.mba.getMenu(id).subscribe(
      produite=>{ 
        this.prodd =produite
        let valeut=produite.prix
        console.log(valeut)
        
        let d=this.prodd.menuburger
       
        // console.log(d?.[0].burger.nom)
        // console.log( produite.menuburger)
      }
    )
  this.mba.complet().subscribe(data=>{

    this.complete =data
    this.complement=this.complete?.complement
    
 });
  }

}
