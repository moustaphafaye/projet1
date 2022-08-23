import { Component, Input, OnInit } from '@angular/core';
import { menutail } from 'src/app/shared/models/detail';

@Component({
  selector: 'app-boissonmenu',
  templateUrl: './boissonmenu.component.html',
  styleUrls: ['./boissonmenu.component.css']
})
export class BoissonmenuComponent implements OnInit {
  @Input('menutai') menutai :menutail |null=null

  constructor() { }

  ngOnInit(): void {
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

  onAddBoissonMenu(){
    alert("ok")
  }

}
