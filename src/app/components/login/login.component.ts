import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname = "";
  pw = "";

  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  login(): void{
    const uname = this.uname
    const pw = this.pw
    let data: any = {uname, pw};
    data = JSON.stringify(data);
    this.Auth.login(data).subscribe(res =>{
      if(HttpStatusCode.Ok){
        let role = Number.parseInt(this.Auth.token.split(":")[1]);
        if(role === 1){
          this.router.navigate(['/auctioneer'])
        } else if(role === 2){
          this.router.navigate(['/client'])
        } else {
          this.router.navigate(['/'])
        };
      } else{
        console.log("not working");
      }
    })
  }
  
}
