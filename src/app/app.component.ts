import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
 constructor(private authService : AuthenticationService){}
     

 get email(){
  return this.loginForm.get('email')
 }
 get password(){
  return this.loginForm.get('password')
 }
 submit() {
    if(!this.loginForm.valid){
      return;
    }

    // const {email, password} = this.loginForm.value;
    // this.authService.login('email','password').subscribe(() =>{
    //     this.router.navigate(['/'])
    // })
 } 

 


  
  signup(f: any){
 
   console.log(f)
  }
}





