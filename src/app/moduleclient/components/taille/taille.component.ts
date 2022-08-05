import { Component, Input, OnInit } from '@angular/core';
import { BoissonTaille, TailleBoisson } from 'src/app/shared/models/detail';

@Component({
  selector: 'app-taille',
  templateUrl: './taille.component.html',
  styleUrls: ['./taille.component.css']
})
export class TailleComponent implements OnInit {
  @Input('taille') taille :TailleBoisson | null=null
  constructor() { }

  ngOnInit(): void {
  }

}
