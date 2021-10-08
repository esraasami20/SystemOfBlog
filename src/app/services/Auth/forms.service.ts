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

  postCustomerData(CustomerData: any) {
    return this.http.post(`${this.Url}register-customer`, CustomerData);
  }

  getCustomerData() {
    return this.http.get<any>(`${this.customerUrl}Customer`, this.httpOptions);
  }

  EditCustomerData(data: any) {
    return this.http.put<any>(
      `${this.customerUrl}Customer`,
      data,
      this.httpOptions
    );
  }
  EditCustomerAddress(data: any) {
    return this.http.put<any>(
      `${this.customerUrl}Customer/change-address`,
      data,
      this.httpOptions
    );
  }
  EditCustomerPassword(data: any) {
    return this.http.put<any>(
      `${this.customerUrl}Customer/password`,
      data,
      this.httpOptions
    );
  }

  login(CustomerData: any) {
    return this.http.post<any>(`${this.Url}login`, CustomerData);
  }

  forgetpassword(email: any) {
    console.log(email);
    return this.http.get(`${this.Url}forget-password/${email}`);
  }

  resetpassword(resetpassword: any) {
    return this.http.post(`${this.Url}reset-password`, resetpassword);
  }

  postSellerData(CustomerData: any) {
    return this.http.post(`${this.Url}register-seller`, CustomerData);
  }

  GetCartItems() {
    return this.http.get<any>(`${this.customerUrl}Cart`, this.httpOptions);
  }

  AddCartItems(Quantity: any, ProductId: any) {
    return this.http.post<any>(
      `${this.customerUrl}CartItem`,
      { Quantity, ProductId },
      this.httpOptions
    );
  }

  EditCartItems(Quantity: any, ProductId: any) {
    return this.http.put<any>(
      `${this.customerUrl}CartItem`,
      { Quantity, ProductId },
      this.httpOptions
    );
  }

  DeleteCartItem(cartItemId: any) {
    return this.http.delete<any>(
      `${this.customerUrl}CartItem/${cartItemId}`,
      this.httpOptions
    );
  }

  AddCartItemsTOFav(ProductId: any) {
    return this.http.post<any>(
      `${this.customerUrl}RecentlyViews/add-to-favourite/${ProductId}`,
      null,
      this.httpOptions
    );
  }

  GetFav() {
    return this.http.get<any>(
      `${this.customerUrl}RecentlyViews/favourites`,
      this.httpOptions
    );
  }
}
