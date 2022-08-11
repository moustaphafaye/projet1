import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , Validators} from '@angular/forms';
import { connect } from 'rxjs';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup : any ;
  constructor(private auth:AuthentificationService) { }

  ngOnInit(): void {
    this.userFormGroup=new FormGroup({
      login:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[ Validators.required,Validators.minLength(3)])
    })
  }
  handerlogin(){
    console.log(this.userFormGroup.value)
      this.auth.connexion(this.userFormGroup.value).subscribe(
        data=>{console.log(data)
          localStorage.setItem('token', JSON.stringify(data));
        }, 
        
        err=>{console.log(err)})
        
      }

      get login(){
        return this.userFormGroup.get('login')
      }
      get password(){
        return this.userFormGroup.get('password')
      }

 }
