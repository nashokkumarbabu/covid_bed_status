import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from "../services/auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    inputEmail: new FormControl('', [Validators.email])
  });
  constructor( public authService: AuthService) { }

  ngOnInit(): void { 
    
   }
 
  doLogin(value){
    this.authService.SignIn(value.inputEmail, value.inputPassword)
    .then(res => {
      console.log(res);
      //this.errorMessage = "";
      //this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      //this.errorMessage = err.message;
      //this.successMessage = "";
    })
  }

  doRegister(value){
    this.authService.SignUp(value.inputEmail, value.inputPassword)
    .then(res => {
      console.log(res);
      //this.errorMessage = "";
      //this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      //this.errorMessage = err.message;
      //this.successMessage = "";
    })
  }

}
