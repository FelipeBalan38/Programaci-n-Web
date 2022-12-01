import { Component, OnInit } from '@angular/core';
import {Aviso} from 'src/app/shared/interface';
import { AvisosService } from 'src/app/services/avisos.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  avisos!:Aviso[];

  constructor(private readonly avisosService:AvisosService) {

   }

  ngOnInit(): void {
    this.avisosService.getAvisos().subscribe(avisos=>{
      this.avisos = [...avisos];
    });
  }
}
