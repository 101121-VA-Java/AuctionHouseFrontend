import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?: any;

  constructor(private http: HttpClient) { }

  update(data: string){
    let id = localStorage.getItem("token")?.split(":")[0];
    return this.http.put(`http://localhost:8080/users/${id}`, data, {
      headers: {'Content-type': 'application/json'},
      observe: 'response'
    }).pipe(
      map(response => {
        let res = JSON.stringify(response.body);
        this.currentUser = res;
        localStorage.setItem("currentUser", this.currentUser);
      })
    );
  }
}
