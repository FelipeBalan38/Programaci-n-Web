import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Queja } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  private API = "http://127.0.0.1:8000/api/queja";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor(private readonly httpClient : HttpClient) { }

  getAll(): Observable<Queja[]> {
    return this.httpClient.get<Queja[]>(this.API)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  create(queja : Queja): Observable<Queja> {
    return this.httpClient.post<Queja>(this.API,queja)
  }

  delete(id:number){
    return this.httpClient.delete<void>(`${this.API}/${id}`);
  }

  update(id:number, queja:Queja): Observable<Queja> {
    return this.httpClient.put<Queja>(`${this.API}/${id}`,queja)
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