import { Component, OnInit } from '@angular/core';
import { AvisosService } from 'src/app/services/avisos.service';
import { Usuario} from 'src/app/shared/interface';

@Component({
  selector: 'app-admi-usuarios',
  templateUrl: './admi-usuarios.component.html',
  styleUrls: ['./admi-usuarios.component.css']
})
export class AdmiUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private readonly avisosService:AvisosService) { }

  ngOnInit(): void {
    this.avisosService.list().subscribe(usuarios=>{
      this.usuarios = [...usuarios];
    });
  }
  onSubmit(values:Usuario):void{
    this.addUsuario(values);
  }

  addUsuario(usuario:Usuario){
    this.avisosService.create(usuario).subscribe(res=>{
        this.usuarios.push(usuario);
      });
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
      
  }

  updateUsuario(usuario:Usuario){
    this.avisosService.updateUser(usuario).subscribe(res =>{
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
