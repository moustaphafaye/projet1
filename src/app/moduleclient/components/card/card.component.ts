import { Component,Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('posts') post : Produit|null = null;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.post)
  }
   
}
