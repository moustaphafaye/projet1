import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { commandelivreur, Ilivrer } from '../models/livraison';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http:HttpClient) { }

  private urllivreur:string="http://localhost:8000/api/livreurs/"
  private urllivraison:string="http://localhost:8000/api/livraisons"

    getlivreurs():Observable<any>{
      let token  = localStorage.getItem('token')
    const httpOptions={
    headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
      return this.http.get<any>(this.urllivreur,httpOptions).pipe(
        map(data=>{
           let datas=data["hydra:member"]
          return datas
        }))
    }

    enregistrerLivraison(livraison:any){
      let token  = localStorage.getItem('token')
      const httpOptions={
      headers: new HttpHeaders({
          'Content-type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        })
      }
      this.http.post<any>(this.urllivraison,livraison,httpOptions).subscribe();
    }

    commande:commandelivreur[]=[]
    ajouterCommande(commandelivraison:commandelivreur){
      this.commande.push(commandelivraison)
      // console.log(this.commande);
      
    }

    suprimerCommande(commandelivraison:commandelivreur){
      this.commande.splice(this.commande.indexOf(commandelivraison),1)
    }

    listLivraison():Observable<any>{
      let token  = localStorage.getItem('token')
      const httpOptions={
      headers: new HttpHeaders({
          'Content-type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        })
      }
      return this.http.get<any>(this.urllivraison,httpOptions).pipe(
        map(data=>{
          let datas=data["hydra:member"]
         return datas
       })
      )
    }

    modifier(id:number,body:string){
      let token  = localStorage.getItem('token')
      const httpOptions={
        headers: new HttpHeaders({
          'Content-type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        })
      }
        this.http.put<any>(this.urllivraison+"/"+id,{etat:body},httpOptions).subscribe();
    }

    desactivebuttonlivraison(){
      if(this.commande.length > 0){
        return false
      }else{
        return true
      }
    }
    getCommandeLivraison(id:number):Observable<any>{
      let token  = localStorage.getItem('token')
      const httpOptions={
        headers: new HttpHeaders({
          'Content-type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        })
      }
     return this.http.get<any>(this.urllivraison+"/"+id+"commandes",httpOptions)
    }

}
