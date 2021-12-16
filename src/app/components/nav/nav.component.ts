import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public fname: any = "";
  public lname: any = "";
  public username: any = "";
  public password: any = "";
  public test: any = { fname: "initial" };
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //Get user info!
    //save user info to show later
    this.test = this.authService.userInfo().subscribe((res: any) => {
      if (HttpStatusCode.Ok) {
        if (res) {
          this.test = res;
          console.log(this.test);
          console.log("ngOnInit");
          ;
        }
      } else {
        console.log("we got a problem fam!");
      }
    })

  }

  // this.Auth.login(data).subscribe(res =>{
  //   if(HttpStatusCode.Ok){
  //     let role = Number.parseInt(this.Auth.token.split(":")[1]);
  //    
  // })

}
