import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  // totallenght:any
  p: number = 1;
  nombre: number = 1;
  zone$: any | undefined
  total:any
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
