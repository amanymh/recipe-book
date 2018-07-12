import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {


  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCWWMbQ4v3DsTWmjokwMK6Zu-kpyFwPCP0",
      authDomain: "my-recipe-book-550fe.firebaseapp.com"
    })
  }
}
