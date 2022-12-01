import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Queja } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  private API = "http://localhost:8000/api/queja/";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<Queja[]> {
    return this.httpClient.get<Queja[]>(this.API)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  create(queja : Queja): Observable<Queja> {
    return this.httpClient.post<Queja>(this.API, JSON.stringify(queja), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Queja>(this.API + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, queja:Queja): Observable<Queja> {
    return this.httpClient.put<Queja>(this.API + id, JSON.stringify(queja), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
