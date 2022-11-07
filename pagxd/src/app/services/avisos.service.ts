import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Aviso} from 'src/app/shared/interface';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  avisos!: Aviso;
  private readonly API = 'https://crudcrud.com/api/56b6652e100244de9fa8c29e60462ca4/avisos'; 
  
  constructor(private readonly http:HttpClient) { }

  addNewAviso(avisos:Aviso):Observable<Aviso>{ 
    return this.http.post<Aviso>(this.API,avisos)
  }
  getAvisos():Observable<Aviso[]>{
    return this.http.get<Aviso[]>(this.API);
  }
  updateAviso(avisos:Aviso): Observable<void>{
    const body = {titulo: avisos.titulo};
    return this.http.put<void>(`${this.API}/${avisos.id}`, body);
  }
  deleteAviso(id: string): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }

}
