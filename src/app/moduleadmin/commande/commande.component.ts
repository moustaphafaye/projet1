import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import {  ActivatedRoute, Router } from '@angular/router';
import { PanierService } from 'src/app/shared/services/panier.service';
import { LivreurService } from 'src/app/shared/services/livreur.service';
import { Icommande } from 'src/app/shared/models/zone';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav
  id:number=+this.route.snapshot.params['id']
  livreurs:any;
  tableau:Icommande[]=[]
  constructor(private observer:BreakpointObserver,public router: Router,private servicezone:PanierService,private route:ActivatedRoute,private livreur:LivreurService) { }
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side'
        this.sidenav.open();
      }
    });
  }
  ngOnInit(): void {
    this.servicezone.zone(this.id).subscribe((element:any)=>{
      element.commande.forEach((el:Icommande)=>{
       
        if(el.etat==='Valider'){
          this.tableau.push(el) 
           
        }
      })
    })
    this.livreur.getlivreurs().subscribe((data)=> {
      console.log(data);
      // this.livreurs= data
      
      // console.log(this.livreur)
    })
  }
  commandeLivraison(id:number){
    this.livreur.getCommandeLivraison(id).subscribe((data)=>{
        console.log(data);
        
    })

    
  }

}
