import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Catalogue } from '../models/catalogue';
import { Produit } from '../models/produit';
import { Complement } from '../models/complement';
import { DetailMenu } from '../models/detailsMenu';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  private url:string = "http://localhost:8000/api/catalogue"
  private urlz:string = "http://localhost:8000/api/zones"
  private urlp:string = "http://localhost:8000/api/produits"
  private urld:string = "http://localhost:8000/api/details"
  private urlmenu:string = "http://localhost:8000/api/menus"
  private compl:string = "http://localhost:8000/api/complement"

  constructor(private http:HttpClient) { }

  all():Observable<Catalogue> {
    return this.http.get<Catalogue>(this.url).pipe(
      map(data=>{
        let datas=data['hydra:member']
       
        let catalogue:Catalogue={
           menu:[],
           burger:[],
           produits:[]
          }
        if(datas!=undefined){
          catalogue={
            menu:datas[0].menu,
            burger:datas[1].burger,
            produits:[...datas[0].menu,...datas[1].burger]
           }
        }
        // data.produits=[...data.burger,...data.menu]
        return catalogue;
      })
    )
  }
  allzone():Observable<Zone> {
    return this.http.get<Zone>(this.urlz).pipe(
      
      map(data=>{
        return data
      }))
    };












  getProduit=(id: number)=>  {
    return this.http.get<Detail>(`${this.urld}/${id}`).pipe(
      map(
        data=>{
          return data
        }
      )
    )
  }
  
//   post$ = (id:number) => {
//     return this.http.get<Catalogue>(`${this.url}/${id}`)
//   }
complet():Observable<Complement> {
  return this.http.get<Complement>(this.compl).pipe(
    map(data=>{
      let datas=data['hydra:member']
      
      let complements:Complement={
         portion:[],
         taille:[],
         complement:[]
        }
        if(datas!=undefined){
          complements={
            portion:datas[0].portion,
            taille:datas[1].taille,
            complement:[...datas[0].portion,...datas[1].taille]
          }
         
        }
        
      // data.produits=[...data.burger,...data.menu]
      
      return complements;
    })
  )
}

















}
