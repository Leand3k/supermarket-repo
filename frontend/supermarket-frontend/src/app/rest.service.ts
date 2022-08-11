import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class RESTService {
  baseurl = 'https://localhost:7017/api';

  constructor(private httpClient: HttpClient) {}

  // Include headers to avoid errors with API
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Get all products
  public getProducts(): Observable<any> {
    return this.httpClient
      .get<Product>(this.baseurl + '/Product/all')
      .pipe(retry(3), catchError(this.errorHandl));
  }

  // Get single product
  public getProduct(id: number): Observable<any> {
    return this.httpClient.get(this.baseurl + `/Product/${id}`);
  }

  // Add product
  public addProduct(product: object): Observable<object> {
    let bodyString = JSON.stringify(product);
    return this.httpClient.post(this.baseurl + '/Product/Create', bodyString, {
      headers: this.httpOptions.headers,
    });
  }

  // Delete single product
  public deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(this.baseurl + `/Product/${id}`, {
      responseType: 'text',
    });
  }

  // Update Product
  public updateProduct(id: number, value: any): Observable<any> {
    return this.httpClient.put(this.baseurl + `/Product/${id}`, value);
  }

  // Error Handling
  errorHandl(error: { error: { message: string }; status: any; message: any }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
