import { Injectable } from '@angular/core';
import { BehaviorSubject, map ,Observable,take,find} from 'rxjs';
import { Menu, Produitd } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  // allzone(id: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('produit') || '[]' );
    // console.log(existingCartItems);
    
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$:Observable<any> = this.itemsSubject.asObservable();
   private quantite=0
  
  addToCart(product:any) {
    this.items$.pipe(
      take(1),
      map((products) => {
        
        
        if(!this.ExistProduit(products,product.id)){
         product.quantite=1;
          products.push(product);
         }
         //else{
        //   product.quantite=1
        //   products.forEach((element:any) => {
            
        //       element.quantite +=1
        //       
        //   });
        // }
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

}
