import { Component, OnInit } from '@angular/core';
import {Aviso} from 'src/app/shared/interface';
import { AvisosService } from 'src/app/services/avisos.service';

@Component({
  selector: 'app-avisosform',
  templateUrl: './avisosform.component.html',
  styleUrls: ['./avisosform.component.css']
})
export class AvisosformComponent implements OnInit {

  avisos!:Aviso[];

  constructor(private readonly avisosService:AvisosService) { }

  ngOnInit(): void {
    this.avisosService.getAvisos().subscribe(avisos=>{
      this.avisos = [...avisos];
    });
  }

  onSubmit(avisos:Aviso):void{
    this.avisosService.addNewAviso(avisos).subscribe(res=>{
      this.avisos.push(avisos);
    });
  }
}
