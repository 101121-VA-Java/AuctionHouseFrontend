import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private Auth: AuthService) { 
   
  }

  ngOnInit(): void {
  }

  login(){
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    console.log(username,password);
    this.Auth.userInfo(username, password).subscribe(data =>{
      if(HttpStatusCode.Ok){
        //redirect to page
      } else{
        console.log("not working");
      }
    })
  }
  
}
