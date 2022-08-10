import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup : any ;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userFormGroup=new FormGroup({
      login:new FormControl(''),
      password: new FormControl('')
    })
  }
  handerlogin(){
      console.log(this.userFormGroup.value)
  }
}
