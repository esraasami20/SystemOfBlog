import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnspoints } from '../models/end-point';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  addCategory(params: any): Observable<any> {
    return this.http.post(`${ApiEnspoints.Endpoints.categoryData}`, params);
  }
  getAllCategory(): Observable<any> {
    return this.http.get(`${ApiEnspoints.Endpoints.categoryData}`);
  }
  getUnApprovedComment(): Observable<any> {
    return this.http.get(`${ApiEnspoints.Endpoints.addNewComment}`);
  }
  approveComment(id:any): Observable<any> {
    return this.http.put(`${ApiEnspoints.Endpoints.addNewComment}`,id);
  }
}