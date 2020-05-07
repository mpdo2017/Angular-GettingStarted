import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  private productUrl = 'www.myWebService.com/api/products';
  constructor(private http: HttpClient) {
  }
  getProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
    tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse){

  }
}
