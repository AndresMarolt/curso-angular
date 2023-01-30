import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  apiUrl = 'https://reqres.in/api'
  
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post(this.apiUrl + '/login', {email, password}, {
      headers: {"Content-Type": "application/json"},
    });
  }


}
