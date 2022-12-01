import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import {Pago} from 'src/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private API = "http://127.0.0.1:8000/api/pago"; 
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }

  constructor(private readonly http:HttpClient) { }

  addNewPago(pagos:Pago):Observable<Pago>{ 
    return this.http.post<Pago>(this.API,pagos)
  }
  getPagos():Observable<Pago[]>{
    return this.http.get<Pago[]>(this.API);
  }

  
  updatePago(id: String, pagos:Pago): Observable<Pago> {
    return this.http.put<Pago>(`${this.API}/${id}`,pagos)
  }
  deletePago(id: String): Observable<void>{
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
