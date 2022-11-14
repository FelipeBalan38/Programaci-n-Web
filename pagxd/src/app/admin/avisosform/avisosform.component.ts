import { Component, OnInit } from '@angular/core';
import {Aviso} from 'src/app/shared/interface';
import { AvisosService } from 'src/app/services/avisos.service';

@Component({
  selector: 'app-avisosform',
  templateUrl: './avisosform.component.html',
  styleUrls: ['./avisosform.component.css']
})
export class AvisosformComponent implements OnInit {
[x: string]: any;

  avisos!:Aviso[];

  constructor(private readonly avisosService:AvisosService) { }

  ngOnInit(): void {
    this.avisosService.getAvisos().subscribe(avisos=>{
      this.avisos = [...avisos];
    });
  }
  onSubmit(values:Aviso):void{
    this.addAviso(values);
  }
  addAviso(aviso:Aviso){
    this.avisosService.addNewAviso(aviso).subscribe(res=>{
        this.avisos.push(aviso);
      });
    }

    deleteAviso(id:String){
      //console.log("id de usuario ->"+id);
      if(confirm('¿Desea aprovar el pago?')){
        this.avisosService.deleteAviso(id).subscribe(() => {
          const tempArr = this.avisos.filter(aviso => aviso.id !== id);
          this.avisos = [...tempArr];
        });
      }
    }
}
