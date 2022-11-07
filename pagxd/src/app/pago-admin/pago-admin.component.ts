import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/shared/api.service';
import { UsuarioService } from 'src/Service/usuario.service';
import { FormComponent } from '../PagoAdmin/form/form.component';


@Component({
  selector: 'app-pago-admin',
  templateUrl: './pago-admin.component.html',
  styleUrls: ['./pago-admin.component.css']
})
export class PagoAdminComponent implements OnInit {

  
  @Input()usuarioL!: FormComponent;

  usuarios: Usuario[] = [];

  constructor(private readonly usuarioService:UsuarioService) { }
  
  ngOnInit(): void {
    
  }

  onSubmit(values:Usuario):void{
    this.addUsuario(values);
  }

  addUsuario(usuario:Usuario){
    this.usuarioService.create(usuario).subscribe(res=>{
        this.usuarios.push(usuario);
      });
  }

}


