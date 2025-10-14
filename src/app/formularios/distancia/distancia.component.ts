import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { distancia } from './distanciaOperaciones';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],//agragar formulario 
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!:number;
  objDist=new distancia();


  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numx1: new FormControl(''),
      numx2: new FormControl(''),
      numy1: new FormControl(''),
      numy2: new FormControl(''),
      Rx: new FormControl(''),
      Ry: new FormControl(''),
      Sx: new FormControl(''),
      Sy: new FormControl(''),
      Txy: new FormControl('')
    });
  }
  multNumeros():void{
    this.objDist.numx1 = this.formulario.value.numx1;
    this.objDist.numx2 = this.formulario.value.numx2;
    this.objDist.numy1 = this.formulario.value.numy1;
    this.objDist.numy2 = this.formulario.value.numy2;
    this.objDist.Rx = this.formulario.value.Rx;
    this.objDist.Ry = this.formulario.value.Ry;
    this.objDist.Sx = this.formulario.value.Sx;
    this.objDist.Sy = this.formulario.value.Sy;
    this.objDist.Txy = this.formulario.value.Txy;

      this.objDist.calculo();
      this.resultado = this.objDist.resultado;
    }

   
}
