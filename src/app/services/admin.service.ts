import { State } from './../models/interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnspoints } from '../models/end-point';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    ),
  };
  addCategory(params: any): Observable<any> {
    return this.http.post(`${ApiEnspoints.Endpoints.categoryData}`, params);
  }
  getAllCategory(): Observable<any> {
    return this.http.get(`${ApiEnspoints.Endpoints.categoryData}`);
  }
  getUnApprovedComment(): Observable<any> {
    return this.http.get(`${ApiEnspoints.Endpoints.addNewComment}`);
  }
  approveComment(id: number, params: any) {
    return this.http.put<State>(
      `${ApiEnspoints.Endpoints.addNewComment}/approve/${id}`,
      params,
      this.httpOptions
    );
  }
}
