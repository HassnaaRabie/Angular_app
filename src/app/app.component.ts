import { Component } from '@angular/core';
import { from } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';

 
     
    
  
  signup(_f:any){
    console.log(from)
  }}

export interface User{
  email:string;
  password:string;
  confirmpassword:string;
}






function signup(f: any, arg1: string) {
  throw new Error('Function not implemented.');
}

function f(f: any, arg1: string) {
  throw new Error('Function not implemented.');
}

function _f(_f: any, arg1: string) {
  throw new Error('Function not implemented.');
}

