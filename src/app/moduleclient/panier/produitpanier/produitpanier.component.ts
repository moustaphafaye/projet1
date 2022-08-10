import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Menu, Produitd } from 'src/app/shared/models/detail';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-produitpanier',
  templateUrl: './produitpanier.component.html',
  styleUrls: ['./produitpanier.component.css']
})
export class ProduitpanierComponent implements OnInit {
@Input() valeurpanier:any 
  constructor(private route:ActivatedRoute,private produitpanier:PanierService,private toastrservic:ToastrService,private zone:ProduitService) { }
  valeur$:Observable<any>= this.produitpanier.items$
  zone$?:Zone |undefined=undefined
  supprimer(product:Menu | Produitd){
    this.produitpanier.delete(product)
  }
   private somme=0

  errorMessage(){
    this.toastrservic.error("suppression avec succes")
   }

 commander(){
   let commander=document.getElementById('zone')
    let commande=document.getElementById('commander')
    let surplace=document.getElementById('surplace')
    
    if(commander){
      commander.style.display = 'block'
    } 
    
 }
 commande(){
  let commander=document.getElementById('zone')
   let commande=document.getElementById('commander')
   let surplace=document.getElementById('surplace')
   
   if(commander){
     commander.style.display = 'none'
   } 
   
}
 
 quantitePrice(product:Menu | Produitd,q: any){
  this.produitpanier.increment(product,q)
 }
 

  ngOnInit(): void {
     this.zone.allzone().subscribe((data)=> {
          this.zone$ = data
           console.log()
         
           
        }
    )
  }

}
