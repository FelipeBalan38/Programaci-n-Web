import { Component, OnInit, Input } from '@angular/core';
import { Pago } from 'src/shared/api.service';
import { PagoService } from 'src/Service/pago.service';



@Component({
  selector: 'app-pago-admin',
  templateUrl: './pago-admin.component.html',
  styleUrls: ['./pago-admin.component.css']
})
export class PagoAdminComponent implements OnInit {

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


