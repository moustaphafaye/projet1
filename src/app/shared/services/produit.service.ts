import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../models/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  private url:string = "http://localhost:3000/posts"

  constructor(private http:HttpClient) { }

  all():Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url) 
  }

  post$ = (id:number) => {
    return this.http.get<Produit>(`${this.url}/${id}`)
  }
}
