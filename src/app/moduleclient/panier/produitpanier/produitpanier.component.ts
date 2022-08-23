import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Commande, Commandeburger, Commandefrite, Commandemenu, Commandetailleboisson } from 'src/app/shared/models/commande';
import { Menu, Produit, Produitd } from 'src/app/shared/models/detail';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-produitpanier',
  templateUrl: './produitpanier.component.html',
  styleUrls: ['./produitpanier.component.css']
})
export class ProduitpanierComponent implements OnInit {
@Input() valeurpanier:any 
  constructor(private route:ActivatedRoute,private commandeservice:CommandeService,private produitpanier:PanierService,private toastrservic:ToastrService,private zone:ProduitService) { }
  valeur$:Observable<any>= this.produitpanier.items$
   zone$: any | undefined
  prix = 0

  supprimer(product:Menu | Produitd){
    this.produitpanier.delete(product)
  }
   private somme=0

  errorMessage(){
    this.toastrservic.error("suppression avec succes")
   }
sommetotal(){
  return this.prix=this.produitpanier.kony();
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
     this.produitpanier.allzone().subscribe((data)=> {
          this.zone$= data
          console.log();
          
          // this.valeurs=this.zone$
          //  console.log(this.zone$);
            
        }
    )
    this.sommetotal();
  }
  objectCommande(){
     let ctmenu:Commandemenu[]=[] 
     let ctburger:Commandeburger[]=[]
     let ctfrite:Commandefrite[]=[]
     let ctbois:Commandetailleboisson[]=[]
     let zone:string
     let quartier:string
    
    //  let cmd:Commande

     this.valeur$.subscribe((lev)=>{

      lev.forEach((produit:any)=>{
      if (produit['@type'] ==='Menu') {
        ctmenu.push(
          {
            quantite: +produit.quantite,
            menu: "/api/menus/"+produit.id
          }
        )
      }
      if (produit['@type'] ==='Burger') {
        ctburger.push(
          {
            burger: "/api/burgers/"+produit.id,
            quantite: +produit.quantite
          }
        )
        
      }
      if (produit['@type'] ==='TailleBoisson') {
        ctbois.push(
          {
            tailleBoisson: produit.id,
            quantitetailleboisson: produit.quantite
          }
        )
        
      }
      if (produit['@type'] ==='PortionFrite') {
        ctfrite.push(
          {
            portionFrite: produit.id,
            quantite: produit.quantite
          }
        )
        
      }
  })
})

   let formatCommande:Commande={
      commandeburger: ctburger,
      commandemenu:ctmenu,
      commandefrite:ctfrite,
      commandetailleboisson:ctbois,
      zone:"/api/zones/2",
      quartier: "/api/quartiers/2"
    }
    // console.log(cmd.commandeburger);
    return formatCommande;
  }
  commandeValide(){
    let com:Commande = this.objectCommande();
    console.log(this.objectCommande());
     this.commandeservice.commander(this.objectCommande());
  }

}
