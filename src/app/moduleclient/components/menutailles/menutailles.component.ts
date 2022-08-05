import { Component, Input, OnInit } from '@angular/core';
import { menutail, tailleboissont, tailles } from 'src/app/shared/models/detail';

@Component({
  selector: 'app-menutailles',
  templateUrl: './menutailles.component.html',
  styleUrls: ['./menutailles.component.css']
})
export class MenutaillesComponent implements OnInit {
  @Input('tailleboisson') tailleboisson :tailleboissont |null=null
  
  constructor() { }

  ngOnInit(): void {
  }

}
