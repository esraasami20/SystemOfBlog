import { ApiEnspoints } from './../models/end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Blog } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Blog[]>(`${ApiEnspoints.Endpoints.blogsData}`);
  }
  addComment(id: number, params: any): Observable<any> {
    return this.http.post(`${ApiEnspoints.Endpoints.blogsData}/${id}`, params);
  }
  addBlog(params: any): Observable<any> {
    return this.http.post(`${ApiEnspoints.Endpoints.blogsData}`, params);
  }
  editBlog(id:any,params: any): Observable<any> {
    return this.http.put(`${ApiEnspoints.Endpoints.blogsData}/${id}`, params);
  }
}
