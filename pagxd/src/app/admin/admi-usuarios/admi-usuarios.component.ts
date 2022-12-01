import { Component, OnInit, Input } from '@angular/core';
import { Pago } from 'src/app/shared/interface';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-admi-usuarios',
  templateUrl: './admi-usuarios.component.html',
  styleUrls: ['./admi-usuarios.component.css']
})
export class AdmiUsuariosComponent implements OnInit {

  
  [x: string]: any;

  pagos!:Pago[];

  constructor(private PagoService:PagoService) { }
  
  ngOnInit(): void {
    this.PagoService.getPagos().subscribe(pagos=>{
      this.pagos = [...pagos];
    });
  }

  onSubmit(values:Pago):void{
    this.addPago(values);
  }

  addPago(pago:Pago){
    this.PagoService.addNewPago(pago).subscribe(res=>{
        this.pagos.push(pago);
      });
  }
//////////////////////////////////////////////////////////////////////

  
}
