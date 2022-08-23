import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Izone } from 'src/app/shared/models/zone';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListcommandeComponent implements OnInit {

  // totallenght:any
  p: number = 1;
  // searchText: string="En cours";
  searchText: string="En cours";
  searchZone: any
  searchZoneb: string="zone B";
  listcommande: any | undefined
  total:any
  tableau:Izone[]=[]
  recherchecommande:any
  constructor(private commande:CommandeService,private servicepanier:PanierService,public router: Router) { }

  ngOnInit(): void {
    this.commande.listcommande().subscribe((data)=> {
      this.listcommande= data
      this.total=this.listcommande
       console.log(this.total);
        
    }
) 
      this.servicepanier.allzone().subscribe((e:any)=>{
      e.forEach((element:Izone)=>{
        if(element.commande.length!=0){
            this.tableau.push(element)
        }
      })
  
})
  }

  commandeModifier(id:number,etat:string){
      this.commande.modifierCommande(id,etat)
  }
   livreur(){
     let livreur=<HTMLInputElement>document.getElementById("livreur")
     livreur.style.display='block';
   }

}
