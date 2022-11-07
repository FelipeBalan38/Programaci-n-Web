import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../shared/interfaz';

@Component({
  selector: 'app-pagos-administrador',
  templateUrl: './pagos-administrador.component.html',
  styleUrls: ['./pagos-administrador.component.css']
})
export class PagosAdministradorComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(private readonly usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.list().subscribe(usuarios=>{
      this.usuarios = [...usuarios];
    });
  }
  onSubmit(values:Usuario):void{
    this.addUsuario(values);
  }

  addUsuario(usuario:Usuario){
    this.usuarioService.create(usuario).subscribe(res=>{
        this.usuarios.push(usuario);
      });
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
      
  }

  updateUsuario(usuario:Usuario){
    this.usuarioService.updateUser(usuario).subscribe(res =>{
      console.log("Entro");
    })
  }

  editUsuario(id:String, change:Usuario):void{
    console.log(id);
    console.log(change);
    change._id = id;
    this.updateUsuario(change)
  }
}
