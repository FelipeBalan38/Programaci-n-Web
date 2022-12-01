import { Component, OnInit } from '@angular/core';
import { Aviso } from 'src/app/shared/interface';
import { AvisosService } from 'src/app/services/avisos.service';

@Component({
  selector: 'app-avisosform',
  templateUrl: './avisosform.component.html',
  styleUrls: ['./avisosform.component.css']
})
export class AvisosformComponent implements OnInit {
  [x: string]: any;
  public seccionAvisos:boolean;
    avisos!:Aviso[];
    a!: Aviso;
    constructor(private readonly avisosService:AvisosService) { 
      this.seccionAvisos=true;
    }
  
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
        if(confirm('¿Desea eliminar el elemento?')){
          this.avisosService.deleteAviso(id).subscribe(() => {
            const tempArr = this.avisos.filter(aviso => aviso.id !== id);
            this.avisos = [...tempArr];
          });
        }
      }
      activarAviso( id:String ,aviso:Aviso){
        aviso.estado="Activado";
        this.avisosService.updateAviso(id, aviso).subscribe(res =>{
          console.log("Entro");
        })
      }
      desactivarAviso( id:String ,aviso:Aviso){
        aviso.estado="Desactivado";
        this.avisosService.updateAviso(id, aviso).subscribe(res =>{
          console.log("Entro");
        })
      }
      updateAviso( id:String ,aviso:Aviso){
        this.avisosService.updateAviso(id, aviso).subscribe(res =>{
          console.log("Entro");
        })
      }
    
      editAviso(id:String, change:Aviso):void{
        console.log(id);
        console.log(change);
        change.id = id;
        this.updateAviso(id, change)
      }
      onShowHide()
      {
        this.seccionAvisos=true;
      }
      editar(avison:Aviso)
      {
        this.a=avison;
      }
}
