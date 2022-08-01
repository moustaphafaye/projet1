import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Router } from '@angular/router'
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts : Catalogue|undefined=undefined; 
  produits: Produit[]|undefined=undefined 
 
  constructor(private serv:ProduitService,public router: Router) { }

  ngOnInit(): void {
     this.serv.all().subscribe((data)=>{
       this.posts =data
       this.produits=this.posts?.produits 
    });
    ;
  }
  infor(kony:string){

    switch (kony) {
      case "burger":

        this.produits=this.posts?.burger

        break;
        case "menu":

        this.produits=this.posts?.menu
        break;
        case "catalogue":
          this.serv.all().subscribe((data)=>{
            this.posts =data
            this.produits=this.posts?.produits 
         })
          break;
      default:
        this.serv.all().subscribe((data)=>{
          this.posts =data
          this.produits=this.posts?.produits 
       })
        // console.log(this.produits=this.posts?.produits)
        break;
    }

    // this.serv.all().subscribe((data)=>{
    //   this.produits=data.produits
    // console.log(this.produits.filter(prod=>prod.type="menu"))
    //  })
    
  }
 
}

