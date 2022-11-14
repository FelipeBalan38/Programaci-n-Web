import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.Service';
import { Usuario} from 'src/app/shared/interface';

@Component({
  selector: 'app-admi-usuarios',
  templateUrl: './admi-usuarios.component.html',
  styleUrls: ['./admi-usuarios.component.css']
})
export class AdmiUsuariosComponent implements OnInit {

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
}
