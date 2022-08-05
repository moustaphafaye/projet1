import { Component, Input, OnInit } from '@angular/core';
import { Produitd } from 'src/app/shared/models/detail';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() Produitd: Produitd[] | undefined = undefined

  constructor() { }

  ngOnInit(): void {
  }

}
