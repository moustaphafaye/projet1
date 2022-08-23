import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'app-commande1client',
  templateUrl: './commande1client.component.html',
  styleUrls: ['./commande1client.component.css']
})
export class Commande1clientComponent implements OnInit {

  p: number = 1;
  zone$: any | undefined
  total:any
  recherche:any
  constructor(private commande:CommandeService) { }

  ngOnInit(): void {
    this.commande.commande().subscribe((data)=> {
      this.zone$= data 
      // this.valeurs=this.zone$
      this.total=this.zone$.length
       console.log(this.zone$);
        
    }
)
  }

}
