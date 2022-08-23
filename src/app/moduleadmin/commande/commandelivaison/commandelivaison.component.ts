import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeLivraison, Ilivrer } from 'src/app/shared/models/livraison';
import { LivreurService } from 'src/app/shared/services/livreur.service';

@Component({
  selector: 'app-commandelivaison',
  templateUrl: './commandelivaison.component.html',
  styleUrls: ['./commandelivaison.component.css']
})
export class CommandelivaisonComponent implements OnInit {
  listcommande:Ilivrer[]=[]
  id:number=+this.route.snapshot.params['id']
  tableau:CommandeLivraison[]=[]
  commandelivraison:any
  constructor(private service:LivreurService,public router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.service.getCommandeLivraison(this.id).subscribe((data)=>{
      this.commandelivraison=data
      this.tableau=this.commandelivraison.commandes
       console.log(data.id);
       console.log(this.tableau);
       console.log(this.commandelivraison);
       
       
        
    })






  }
  commandeLivraison(id:number){
    this.service.getCommandeLivraison(id).subscribe((data)=>{
        console.log(data);
        
    })

    
  }
}
