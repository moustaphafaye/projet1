import { Component, Input, OnInit } from '@angular/core';
import { menufrite, TailleBoisson } from 'src/app/shared/models/detail';

@Component({
  selector: 'app-tailleboi',
  templateUrl: './tailleboi.component.html',
  styleUrls: ['./tailleboi.component.css']
})
export class TailleboiComponent implements OnInit {
  @Input() menufritee: menufrite[] | undefined = undefined

  // boissont: TailleBoisson |undefined=undefined 
  // tail : Taille |undefined=undefined
  constructor() { }

  ngOnInit(): void {
  }

}
