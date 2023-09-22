import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }
  private _Url="https://6466e9a7ba7110b663ab51f2.mockapi.io/api/v1/pack1"

  getCustomerData():Observable<any>{
    return this.http.get<any>(this._Url)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(()=>error.message ||"unknown error handler")
  }
}
