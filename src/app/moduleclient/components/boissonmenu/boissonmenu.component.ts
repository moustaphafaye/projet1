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

}
