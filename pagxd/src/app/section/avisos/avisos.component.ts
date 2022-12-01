import { Component, OnInit } from '@angular/core';
import {Aviso} from 'src/app/shared/interface';
import { AvisosService } from 'src/app/services/avisos.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  avisos!:Aviso[];

  constructor(private readonly avisosService:AvisosService) {

   }

  ngOnInit(): void {
    this.avisosService.getAvisos().subscribe(avisos=>{
      this.avisos = [...avisos];
    });
  }

}
