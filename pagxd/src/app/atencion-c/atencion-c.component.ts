import { Component, OnInit } from '@angular/core';
import { PagoService } from '../services/pago.service';
import { Pago } from '../shared/interface';

@Component({
  selector: 'app-atencion-c',
  templateUrl: './atencion-c.component.html',
  styleUrls: ['./atencion-c.component.css']
})
export class AtencionCComponent implements OnInit {

  [x: string]: any;

  pagos!: Pago[];

  constructor(private readonly PagoService:PagoService) { }
  
  ngOnInit(): void {
    this.PagoService.getPagos().subscribe(pagos=>{
      this.pagos = [...pagos];
    });
  }

  deletePago(id:String){
    this.PagoService.deletePago(id).subscribe(res => {
      this.pagos = this.pagos.filter(item => item.id !== id);
      console.log('Pago deleted successfully!');
 })
}
//////////////////////////////////////////////////
pagoAprob(id:String, pago:Pago){
  pago.activador="Adeuda";
  this.PagoService.updatePago(id, pago).subscribe(res =>{
    console.log("Ok");
  })
}
pagoDeneg(id:String, pago:Pago){
  pago.activador="Pagado";
  this.PagoService.updatePago(id, pago).subscribe(res =>{
    console.log("Ok");
  })
}

updatePago(id:String, pago:Pago){
  this.PagoService.updatePago(id, pago).subscribe(res =>{
    console.log("Ok");
  })
}
}


