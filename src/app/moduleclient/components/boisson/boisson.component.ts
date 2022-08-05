import { Component, Input, OnInit } from '@angular/core';
import { BoissonTaille } from 'src/app/shared/models/detail';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {


  @Input('boissonTaille') boissonTaille :BoissonTaille |null=null
  constructor() { }
  ngOnInit(): void {
  }
 validduantite(){
   
 }
}
