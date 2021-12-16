import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;
  token: string = "";

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post(`http://localhost:8080/api/auth`, data, {
      headers: {'Content-type': 'application/json'},
      observe: 'response'
    }).pipe(
      map(response => {
        this.currentUser = response.body;
        this.token = response.headers.get('Authorization') || '';
        localStorage.setItem("token", this.token);
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
      })
    );
  }

  
  logout(): void {
    this.currentUser = undefined;
    this.token = '';
    localStorage.clear();
  }
}
