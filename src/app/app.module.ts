import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

 const   firebaseConfig=  {
  apiKey: "AIzaSyAjZoYwZqBqpx6zdDSNzzdXEBDCfXOeUgw",
  authDomain: "angularproject-14cee.firebaseapp.com",
  projectId: "angularproject-14cee",
  storageBucket: "angularproject-14cee.appspot.com",
  messagingSenderId: "166682897564",
  appId: "1:166682897564:web:c10fdb8f5386ae64d2d159"
}


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule ,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
