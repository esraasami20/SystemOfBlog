import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { port } from '../port';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  Token: any;

  constructor(private http: HttpClient) {}

  readonly Url = 'http://localhost:' + port + '/api/Authentication/';
  readonly customerUrl = 'http://localhost:' + port + '/api/';
  token: string = JSON.stringify(localStorage.getItem('token'));
  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
  getToken() {
    if (this.loggedIn) return localStorage.getItem('token');
    else return 0;
  }

  httpOptions = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    ),
  };

  httpOptions2 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  postVistorData(vistor: any) {
    return this.http.post(`${this.Url}register-vistor`, vistor);
  }

  postAdminData(vistor: any) {
    return this.http.post(`${this.Url}register-admin`, vistor);
  }

  login(VistorrData: any) {
    return this.http.post<any>(`${this.Url}login`, VistorrData);
  }

  postModeratorData(Vistor: any) {
    return this.http.post(`${this.Url}register-moderator`, Vistor);
  }
}
