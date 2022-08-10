import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class RESTService {
  
  baseurl = 'https://localhost:7017/api'
  constructor(private httpClient: HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  public getProducts(): Observable<any>{
    return this.httpClient.get<Product>(this.baseurl + '/Product/all')
    .pipe(retry(1), catchError(this.errorHandl))
  }
  
  CreateProduct(data: any): Observable<Product>{
    return this.httpClient.post<Product>(this.baseurl + '/Product/Create',
      JSON.stringify(data),
      this.httpOptions).pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
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

