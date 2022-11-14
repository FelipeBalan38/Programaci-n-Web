import { Component, OnInit } from '@angular/core';
import { Queja } from 'src/app/shared/interface';
import { QuejaService } from 'src/app/queja/queja.service';

@Component({
  selector: 'app-adminquejas',
  templateUrl: './adminquejas.component.html',
  styleUrls: ['./adminquejas.component.css']
})
export class AdminquejasComponent implements OnInit {

  quejas: Queja[] = [];

  constructor(private QuejaService:QuejaService) { }

  ngOnInit(): void {
    this.QuejaService.getAll().subscribe((data: Queja[])=>{
      this.quejas = data;
      console.log(this.quejas);
    })
  }

  deleteQueja(id:number){
    if(confirm('¿Se ha solucionado el problema?')){
      this.QuejaService.delete(id).subscribe(res => {
      this.quejas = this.quejas.filter(item => item.id !== id);
      console.log('Queja deleted successfully!');
      })
    }
  }
}
