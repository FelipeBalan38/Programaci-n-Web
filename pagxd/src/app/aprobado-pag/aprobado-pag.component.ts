import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/shared/api.service';
import { UsuarioService } from 'src/Service/usuario.service';
import { FormComponent } from '../PagoAdmin/form/form.component';


@Component({
  selector: 'app-aprobado-pag',
  templateUrl: './aprobado-pag.component.html',
  styleUrls: ['./aprobado-pag.component.css']
})
export class AprobadoPagComponent implements OnInit {


  usuarios: Usuario[] = [];

  constructor(private readonly usuarioService:UsuarioService) { }
  
  ngOnInit(): void {
    this.usuarioService.list().subscribe(usuarios=>{
      this.usuarios = [...usuarios];
    });
  }


  deleteUsuario(id:String){
    //console.log("id de usuario ->"+id);
    if(confirm('¿Desea aprovar el pago?')){
      this.usuarioService.deleteUser(id).subscribe(() => {
        const tempArr = this.usuarios.filter(usuario => usuario._id !== id);
        this.usuarios = [...tempArr];
      });
    }
  }

  updateUsuario(usuario:Usuario){
    //console.log("id de usuario ->"+usuario._id)
    this.usuarioService.updateUser(usuario).subscribe(res =>{
      //const tempArr = this.usuarios.filter(values => values._id !== usuario._id);
      //this.usuarios = [...tempArr,usuario];
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
