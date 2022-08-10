import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produit';
import { Complement } from 'src/app/shared/models/complement';
import { DetailMenu } from 'src/app/shared/models/detailsMenu';
import { BoissonTaille, Detail, Produitd, TailleBoisson } from 'src/app/shared/models/detail';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  
  posts : Catalogue|undefined=undefined;
  complete : Complement|undefined=undefined
  complement: Produit[]|undefined=undefined  

  activeRoute: any;
  first: any;
  
  constructor( private mba:ProduitService, private route:ActivatedRoute,private detail:PanierService,private toastrservic:ToastrService) { }
  details : Detail | null = null 
  produits: Produitd |undefined=undefined  
  portionfri: Produitd |undefined=undefined  
  taille: TailleBoisson[] |undefined=undefined 
  // @Input('boissont') boissonTaille :BoissonTaille[] |undefined=undefined

  ngOnInit(): void {
    const id =this.route.snapshot.params['id'];
    
    //console.log(this.mba.getProduit(1))
     this.mba.getProduit(id).subscribe(
        (data)=> {
          this.details = data
          // console.log(this.details)
        }
    )
   
  
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
}
