import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Detail } from 'src/app/shared/models/detail';
import { Produit } from 'src/app/shared/models/produit';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-detailsburger',
  templateUrl: './detailsburger.component.html',
  styleUrls: ['./detailsburger.component.css']
})
export class DetailsburgerComponent implements OnInit {

  @Input('') prod! : Detail
  posts : Catalogue|undefined=undefined;
  activeRoute: any;
  
  constructor( private mba:ProduitService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // const id =this.route.snapshot.params['id'];
    // this.mba.getProduit(id).subscribe(
    //   produit=>{
    //     // console.log(produit)
    //     this.prod =produit
    //   }
    // )
  }

}
