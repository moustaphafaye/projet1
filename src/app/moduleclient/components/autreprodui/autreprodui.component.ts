import { Component, Input, OnInit } from '@angular/core';
import { DetailMenu } from 'src/app/shared/models/detailsMenu';

@Component({
  selector: 'app-autreprodui',
  templateUrl: './autreprodui.component.html',
  styleUrls: ['./autreprodui.component.css']
})
export class AutreproduiComponent implements OnInit {
  @Input('produits') posts : DetailMenu|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
