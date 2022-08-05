import { Component, Input, OnInit } from '@angular/core';
import { BoissonTaille, Detail } from 'src/app/shared/models/detail';

@Component({
  selector: 'app-quantite',
  templateUrl: './quantite.component.html',
  styleUrls: ['./quantite.component.css']
})
export class QuantiteComponent implements OnInit {
  @Input('boissonTaille') boissonTaille :BoissonTaille |null=null
  details : Detail | null = null 
  constructor() { }

  ngOnInit(): void {
  }

}
