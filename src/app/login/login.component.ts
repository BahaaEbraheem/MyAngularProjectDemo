import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horse:string="./assets/images/download.jpg";

  LoginState:string="Login";
  IsAuth:boolean=false;
  Toggle(){
    this.IsAuth=!this.IsAuth;

    this.LoginState=this.IsAuth?"Logout":"Login";

  }



  name:string="Bahaa";
  Password:string="Bahaa";
  cars=['Mercides','Toyota','Honda','KIA'];
  SelectedCar:string='';
  MyFunction(event:any){
   this.SelectedCar = event.target.value;
   alert(this.SelectedCar)
  }
  constructor(private LoginService:MyServiceService) { }

  ngOnInit(){
    this.LoginService.SayHello("Login");
  }
  
}

