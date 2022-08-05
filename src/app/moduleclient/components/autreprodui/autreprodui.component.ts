import { Component, Input, OnInit } from '@angular/core';
import { burgermenu } from 'src/app/shared/models/detail';
import { DetailMenu } from 'src/app/shared/models/detailsMenu';

@Component({
  selector: 'app-autreprodui',
  templateUrl: './autreprodui.component.html',
  styleUrls: ['./autreprodui.component.css']
})
export class AutreproduiComponent implements OnInit {
  @Input() menuburger: burgermenu[] | undefined = undefined

  constructor() { }

  ngOnInit(): void {
  }

}
