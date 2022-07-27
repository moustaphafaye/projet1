import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$ : Observable<Produit[]> | null = null;
 
  constructor(private serv:ProduitService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();

  }

}
