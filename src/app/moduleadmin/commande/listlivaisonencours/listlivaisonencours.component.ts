import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  CommandeLivraison, Ilivrer } from 'src/app/shared/models/livraison';
import { LivreurService } from 'src/app/shared/services/livreur.service';

@Component({
  selector: 'app-listlivaisonencours',
  templateUrl: './listlivaisonencours.component.html',
  styleUrls: ['./listlivaisonencours.component.css']
})
export class ListlivaisonencoursComponent implements OnInit {
  listcommande:Ilivrer[]=[]
  id:number=+this.route.snapshot.params['id']
  tableau:CommandeLivraison[]=[]
  commandelivraison:any
  parentIndex:number=1
  constructor(private service:LivreurService,public router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.listLivraison().subscribe((data)=>{
      data.forEach((element:any)=>{
        if(element.etat==='En cours'){
         this.listcommande.push(element)
        }
      })
    })
  }
  livraisonUpdate(id:number,etat:string){
    this.service.modifier(id,etat)
    location.reload();
}
commandeLivraison(id:number){
  this.service.getCommandeLivraison(id).subscribe((data)=>{
    this.commandelivraison=data
    this.tableau=this.commandelivraison.commandes
     console.log(data.id);
     console.log(this.tableau);
     
     console.log(this.commandelivraison);
     
     
      
  })

  
}


}
