import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  value:any
  constructor(private panier:PanierService) { }

   
  ngOnInit(): void {
  this.value=this.panier.items$
  console.log(this.value)
  }

}
