import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerpanier:PanierService) { }
    vale:Observable<any>= this.headerpanier.items$


  ngOnInit(): void {
   
  }

}
