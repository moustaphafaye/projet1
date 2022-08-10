import { Component,Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('posts') post : Produit|null = null;
  constructor(private toastrservic:ToastrService,private card:PanierService,) { }

  product(koni:any){
      this.card.addToCart(koni)
  }

  ngOnInit(): void {
    // console.log(this.post)
  }
  successMessage(){
    this.toastrservic.success("Ajout avec success")
   }
}
