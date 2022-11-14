import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Aviso} from 'src/app/shared/interface';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  avisos!: Aviso;
  private readonly API = 'http://127.0.0.1:8000/api/avisos'; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private readonly http:HttpClient) { }

  addNewAviso(avisos:Aviso):Observable<Aviso>{ 
    return this.http.post<Aviso>(this.API,avisos)
  }
  getAvisos():Observable<Aviso[]>{
    return this.http.get<Aviso[]>(this.API);
  }

  updateAviso(id: String, avisos:Aviso): Observable<Aviso> {
    return this.http.put<Aviso>(`${this.API}/${id}`,avisos)
  }
  deleteAviso(id: String): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
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
