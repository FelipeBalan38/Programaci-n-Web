import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuejaService } from 'src/app/queja/queja.service';
import { Queja } from 'src/app/shared/interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form!: FormGroup;
  quejas: Queja[] = [];

  constructor(private QuejaService:QuejaService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      telf: new FormControl('', Validators.required),
      mensage: new FormControl('', Validators.required)
    })
  }

  get f(){
    return this.form.controls;
  }

  public onSubmit(){
    console.log(this.form.value);
    this.QuejaService.create(this.form.value).subscribe(res=>{
      this.quejas.push(this.form.value);
    });
  }
}

