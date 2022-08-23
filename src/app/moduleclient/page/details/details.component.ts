import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produit';
import { Complement } from 'src/app/shared/models/complement';

import { BoissonTaille, Detail, Menu, Produitd, TailleBoisson } from 'src/app/shared/models/detail';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  
  // posts : Catalogue|undefined=undefined;
@Input() produit : Produit|null = null; 

  complete : Complement|undefined=undefined
  complement: Produit[]|undefined=undefined  

  activeRoute: any;
  first: any;
  boissonDuMenu: Produitd[]=[] 


  constructor( private produitservice:ProduitService, private route:ActivatedRoute,private detail:PanierService,private toastrservic:ToastrService) { }
  details : Detail | null = null 
  portionfri: Produitd |undefined=undefined 
  produit$:Observable<any>|undefined=undefined

  taille: TailleBoisson[] |undefined=undefined 
  // @Input('boissont') boissonTaille :BoissonTaille[] |undefined=undefined

  ngOnInit(): void {
    const id =this.route.snapshot.params['id'];
    
    //console.log(this.mba.getProduit(1))
    this.produit$=this.produitservice.getProduit(id)
    this.produit$.subscribe(el=>{
      el.produit.menutaille.forEach((le:any)=>{
        le.taille.tailleboisson.forEach((boisson:any)=>{
          console.log(boisson.boisson.id);
          
        })
        
      })
      
    })
    
    
    console.log(this.produit$.forEach);
    
     this.produitservice.getProduit(id).subscribe(
        
    )
   
  
  }
   tab:any[]=[]
  onAddBoissonMenu(boisson:HTMLInputElement){
    if(boisson.checked){
      this.tab.push(boisson)
    }else{
      this.tab.splice(this.tab.indexOf(boisson),1)
    }
    console.log(this.tab);
   
  }
  product(koni:any){
    this.detail.addToCart(koni)
}
  changeFn(abc:any) {
    let  first :any;
     first = abc.target.value;
     console.log(first)
    
   }
   successMessage(){
    this.toastrservic.success("Ajout avec success")
   }

   onAddPanier(prod:Menu|Produitd|undefined,qte:any){
    if(prod) {
      prod.quantite=qte;
      this.detail.addPanier(prod)
      console.log(this.detail.paniers.value)
    }
   }
}
