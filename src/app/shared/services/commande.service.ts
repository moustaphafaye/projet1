import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlcommande1client:string = "http://localhost:8000/api/clients/29/commandes"
  private urlcommande:string="http://localhost:8000/api/commandes"
  private urllistcommande:string="http://localhost:8000/api/commandes"
  constructor(private http:HttpClient) { }
   
  commande():Observable<any>{
    return this.http.get<any>(this.urlcommande1client).pipe(
      map(data=>{
        let datas=data["hydra:member"]
        console.log(datas);
        
       return datas
     })
    )
  }
  listcommande():Observable<any>{
    let token  = localStorage.getItem('token')
    const httpOptions={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
    return this.http.get<any>(this.urllistcommande,httpOptions).pipe(
      map(data=>{
        let datas=data["hydra:member"]
        // console.log(datas);
       return datas
     })
    )
  }
  

  commander(commande:any){
    let token  = localStorage.getItem('token')
    console.log(token);
    const httpOptions={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }  
     this.http.post<Commande>("http://localhost:8000/api/commandes",commande,httpOptions).
     subscribe();
  }

  modifierCommande(id:number,body:string){
    let token  = localStorage.getItem('token')
    const httpOptions={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
      this.http.put<any>(this.urlcommande+"/"+id,{etat:body},httpOptions).subscribe();
  }

  



}
