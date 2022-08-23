import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map ,Observable,take,find} from 'rxjs';
import { Menu, Produitd } from '../models/detail';
import { commandeburger, Panier } from '../models/panier';
import { Panier1 } from '../models/Panier1';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  // allzone(id: any) {
  //   throw new Error('Method not implemented.');
  // }
  private urlz:string = "http://localhost:8000/api/zones/"
 
  private panier:Panier={

    commandeburger:[],
    commandemenu:[],
    commandefrite:[],
    commandetailleboisson:[],
      
  }
  itemsSubject = new BehaviorSubject<Panier>(this.panier);
  cart = new BehaviorSubject<Panier>(this.panier);
  constructor(private http:HttpClient) {
    let existingCartItems = JSON.parse(localStorage.getItem('produit') || '[]' );
    // console.log(existingCartItems);
    if (!existingCartItems) { 
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  addBurger(burgercommande:commandeburger){
    let data={
      ...this.cart.value,
      commandeburger:this.cart.value.commandeburger?.concat(burgercommande)
    }

    // console.log(data);
    return this.cart.next(data);
    
  }

  commande(){
    let commande=JSON.parse(localStorage.getItem('produit') || '[]' );
    console.log(commande);
    commande.forEach((element:any) => {
      // if(element.nom=='menu complete'){
      //   console.log(element);
      // }
      console.log(element);
    });
  }
  
  items$:Observable<any> = this.itemsSubject.asObservable();
  
  
   private quantite=0
  
  addToCart(product:any){
    this.items$.pipe(
      take(1),
      map((products) => {
        if(!this.ExistProduit(products,product.id)){
         product.quantite=1;
          products.push(product);
         }
         else{
          product.quantite=1
          products.forEach((element:any) => {
            if(element.id === product.id){
              element.quantite +=1
            }
              
          });
        }
        localStorage.setItem('produit', JSON.stringify(products));
      }),
    ).subscribe();
  }
  ExistProduit(tableau:any,idprod:number){
      return tableau.find((pro:any)=> {
        // console.log(pro.id);
        return pro.id === idprod
     });

  }

  allzone():Observable<Zone> {
    return this.http.get<any>(this.urlz).pipe(
      map(data=>{
         let datas=data["hydra:member"]
        return datas
      }))
    };

    zone(id:number):Observable<any> {
      return this.http.get<any>(this.urlz+id)
        
      };

  delete(product:Menu | Produitd) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.splice(products.indexOf(product),1);
        localStorage.setItem('produit', JSON.stringify(products));
      }),
    ).subscribe();
  }

  increment(product:Menu | Produitd,q :any){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.forEach((el:any) =>{
          if(el.id === product.id){
            el.quantite=q;
          }
        });
        localStorage.setItem('produit', JSON.stringify(products));
      })
    )
    .subscribe();
  }

  kony(){
    let tab=0
    this.items$.pipe(
      map((products) => {

        products.forEach((el:any) =>{
          tab+=(el.prix * el.quantite)
        });
        localStorage.setItem('produit', JSON.stringify(products));
      })
    )
    .subscribe();
    return tab
  }
  paniers:BehaviorSubject<Panier1>= new BehaviorSubject<Panier1>({
    menus:[],
    burgers:[],
    boissons:[],
    frites:[]
  })

  addPanier(product:Produitd|Menu){
    if(product.type=="menu"){
      this.paniers.value.menus.push(product as Menu )
    }else{
      this.paniers.value.burgers.push(product as Produitd )
    }
       
  }

  

}

