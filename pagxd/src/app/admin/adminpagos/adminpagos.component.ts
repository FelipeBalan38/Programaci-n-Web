import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/interface';
import { UsuarioService } from 'src/app/services/usuario.Service';

@Component({
  selector: 'app-adminpagos',
  templateUrl: './adminpagos.component.html',
  styleUrls: ['./adminpagos.component.css']
})
export class AdminpagosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private readonly usuarioService:UsuarioService) { }
  
  ngOnInit(): void {
    this.usuarioService.list().subscribe(usuarios=>{
      this.usuarios = [...usuarios];
    });
  }


  deleteUsuario(id:number){
    //console.log("id de usuario ->"+id);
    if(confirm('¿Desea aprovar el pago?')){
      this.usuarioService.deleteUser(id).subscribe(res=>{
        this.usuarios=this.usuarios.filter(item => item.id !==id);
        console.log("Queja deleted succesfully")
      });
    }
  }

  updateUsuario(usuario:Usuario){
    //console.log("id de usuario ->"+usuario._id)
    this.usuarioService.updateUser(usuario).subscribe(res =>{
      //const tempArr = this.usuarios.filter(values => values._id !== usuario._id);
      //this.usuarios = [...tempArr,usuario];
      console.log("Entro");
    });
  }
}

