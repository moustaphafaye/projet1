import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  insFormGroup : any
  constructor(private auth:AuthentificationService,private route: Router) { }

  ngOnInit(): void {
    this.insFormGroup=new FormGroup({
      adresse:new FormControl(''),
      telephone:new FormControl(''),
      login:new FormControl(''),
      password:new FormControl(''),
      nom:new FormControl(''),
      prenom:new FormControl(''),
    })
  }

  handerins(){
    console.log(this.insFormGroup.value)
      this.auth.utilisateur(this.insFormGroup.value).subscribe(
        data=>{console.log(data)
          this.route.navigate(['/moduleclient/login'])

          //  localStorage.setItem('token', JSON.stringify(data.token));
        }, 
        
        err=>{console.log(err)})
  }
}
