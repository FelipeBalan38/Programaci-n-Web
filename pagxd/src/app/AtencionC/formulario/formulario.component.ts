import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }
  
  public mensage = new FormControl('', Validators.required);
  public telf = new FormControl('', Validators.required);

  public newForm = new FormGroup({
    mensage: this.mensage,
    telf: this.telf,

  });
  ngOnInit(): void {
    
  }

  public onSubmit(){
  }
  
}

