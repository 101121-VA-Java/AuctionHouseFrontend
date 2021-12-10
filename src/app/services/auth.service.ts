import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userInfo(username: string, password: string){
    return this.http.post('http://localhost:8080/api/auth',{
      username,
      password
    })
  }
}
