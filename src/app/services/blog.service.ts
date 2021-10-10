import { ApiEnspoints } from './../models/end-point';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Blog } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    ),
  };
  getAll() {
    return this.http.get<Blog[]>(`${ApiEnspoints.Endpoints.blogsData}`);
  }
  addComment(id: number, params: any): Observable<any> {
    return this.http.post(
      `${ApiEnspoints.Endpoints.addNewComment}/${id}`,
      params,
      this.httpOptions
    );
  }

  addBlog(params: any): Observable<any> {
    return this.http.post(
      `${ApiEnspoints.Endpoints.blogsData}`,
      params,
      this.httpOptions
    );
  }
  editBlog(id: any, params: any): Observable<any> {
    return this.http.put(
      `${ApiEnspoints.Endpoints.blogsData}/${id}`,
      params,
      this.httpOptions
    );
  }
  getCategoryById(id: any): Observable<any> {
    return this.http.get(`${ApiEnspoints.Endpoints.categoryData}/${id}`);
  }
  getCategory(): Observable<any> {
    return this.http.get(`${ApiEnspoints.Endpoints.categoryData}`);
  }
}
