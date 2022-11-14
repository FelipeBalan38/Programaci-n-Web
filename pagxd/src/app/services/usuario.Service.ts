import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario!: Usuario
  private readonly url = 'http://127.0.0.1:8000/api/ejemplos'; 
  constructor(private readonly http:HttpClient) { }

  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url,usuario)
  }

  list():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }
  
  listOne(id:String):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }

  updateUser(usuario:Usuario):Observable<void>{
    return this.http.put<void>(`${this.url}/${usuario._id}`,usuario)
  }

  deleteUser(id:String):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
