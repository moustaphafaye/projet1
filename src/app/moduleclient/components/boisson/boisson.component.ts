import { Component, Input, OnInit } from '@angular/core';
import { BoissonTaille } from 'src/app/shared/models/detail';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {


  @Input('boissonTaille') boissonTaille :BoissonTaille |null=null
  first: any;
  constructor() { }
  ngOnInit(): void {
  
  }

  recupVal(a:any){

    let val=a.target.value

    

  }

  changeFn(abc:any,id:any,qt:any) {

    let input=(<HTMLInputElement>document.getElementById("number"+id)).value

    let span=(<HTMLInputElement>document.getElementById("span"+id))


    //console.log(input)  

    if(input==qt){

      span.innerHTML="Quantité stock atteinte"
    }else{
      span.innerHTML=""
    }
  
    let first = abc.target.value;

  
  }
  
}
