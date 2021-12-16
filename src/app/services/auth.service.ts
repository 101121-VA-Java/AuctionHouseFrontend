import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  response: any = "";
  token: string = "";

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`http://localhost:8080/api/auth`, data, {
      headers: { 'Content-type': 'application/json' },
      observe: 'response'
    }).pipe(
      map(response => {
        // takes the principal user returned to be stored in the current user variable for use in other components
        this.response = response.body;
        // retrieves the token from the headers to be leveraged in future http requests
        this.token = response.headers.get('Authorization') || '';
        sessionStorage.setItem("token", this.token);
        console.log("response: " + response.body + "token: " + sessionStorage.getItem("token"));
      })
    );
  }


  logout(): void {
    this.response = undefined;
    this.token = '';
    sessionStorage.clear();
  }

  

  userInfo(): any {
    let id: any = sessionStorage['token'].split(':')[0];
    return this.http.get(`http://localhost:8080/users/${id}`, {
      headers: { 'Content-type': 'application/json' },
      observe: 'response'
    }).pipe(
      map(response => {
        // takes the principal user returned to be stored in the current user variable for use in other components
        this.response = response.body;
        console.log(this.response);
        // retrieves the token from the headers to be leveraged in future http requests
        // this.token = response.headers.get('Authorization') || '';
        // sessionStorage.setItem("token", this.token);
        // console.log("response: " + response.body + "token: " + sessionStorage.getItem("token"));
      })
    );
  }

}


