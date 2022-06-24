import { Component, OnInit } from '@angular/core';
 import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-auth-account',
  templateUrl: './auth-account.component.html',
  styleUrls: ['./auth-account.component.css']
})
export class AuthAccountComponent implements OnInit {

 
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

 constructor(public authService : AuthenticationService){}
  ngOnInit(): void {
    
  }
     

 get email(){
  return this.loginForm.get('email')
 }
 get password(){
  return this.loginForm.get('password')
 }

  signup(f: any){
    debugger;

    const email= f.form.controls.email.value;
    const pass= f.form.controls.password.value;
    this.authService.SignUp(email,pass);

  }

}
