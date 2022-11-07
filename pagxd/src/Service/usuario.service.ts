import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario!: Usuario
  private readonly url = 'https://crudcrud.com/api/5897190265e043b4b9b8985ca85b3e53/pagos'; 
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
