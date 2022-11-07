import { Component, OnInit, Input} from '@angular/core';
import { Usuario } from 'src/shared/api.service';
import { UsuarioService } from 'src/Service/usuario.service';
import { PagoAdminComponent } from 'src/app/pago-admin/pago-admin.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   
  @Input()  empleadoL!:Usuario;
  @Input() indice!:number;
  

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
  }

  deleteUsuario(id:String){
    //console.log("id de usuario ->"+id);
    if(confirm('¿Desea eliminar al usuario?')){
      this.usuarioService.deleteUser(id).subscribe(() => {
        const tempArr = this.usuarios.filter(usuario => usuario.id !== id);
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
    change.id = id;
    this.updateUsuario(change)
  }
  

  
}



