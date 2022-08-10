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

  public addProduct(product: object): Observable<object>{
    let bodyString = JSON.stringify(product)
    return this.httpClient.post(this.baseurl + '/Product/Create', bodyString, { headers: this.httpOptions.headers})
  }

  public deleteUser(id: number): Observable<any>{
    return this.httpClient.delete(this.baseurl + `/Product/${id}`, {responseType: 'text'}  )
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

