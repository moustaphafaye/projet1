import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  value:any
  valeur:any

  constructor(private panier:PanierService,private zone:ProduitService,private http:HttpClient) { }

  
   
  ngOnInit(): void {
  this.value=this.panier.items$
  // this.valeur=this.zone.allzone
   console.log(this.value)
  }

}
