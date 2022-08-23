import { Component, OnInit } from '@angular/core';
import { Ilivrer } from 'src/app/shared/models/livraison';
import { LivreurService } from 'src/app/shared/services/livreur.service';

@Component({
  selector: 'app-listlivaison',
  templateUrl: './listlivaison.component.html',
  styleUrls: ['./listlivaison.component.css']
})
export class ListlivaisonComponent implements OnInit {
  listcommande:Ilivrer[]=[]
  livreurdisponible:[]=[]
  livraisonencours:Ilivrer[]=[]
  constructor(private service:LivreurService) { }

  ngOnInit(): void {
    this.service.listLivraison().subscribe((data)=> {
      this.listcommande= data
      //  console.log(this.listcommande);  
    })
  }
 
  livraisonUpdate(id:number,etat:string){
    this.service.modifier(id,etat)
    location.reload();
}

// listerlivraisonencours(){
//   this.service.listLivraison().subscribe((data)=>{
//     data.forEach((element:any)=>{
//       if(element.etat==='En cours'){
//        this.listcommande.push(element)
//       }
//     })
//   })
// }
}
