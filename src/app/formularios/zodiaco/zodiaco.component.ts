import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoroscopoChino } from './zodiacoOperaciones';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {

  formulario!: FormGroup;
  objH=new HoroscopoChino();
  edadTotal: number | null = null;
  resultadoS: { nombre: string, imagen: string } | null = null;
  nombreN!: string;
  pPaterno!:string;
  pMaterno!:string;

  ngOnInit(): void {
    this.formulario = new FormGroup({
    nombreP: new FormControl(''),
    aPaterno: new FormControl(''),
    aMaterno: new FormControl(''),
    dia: new FormControl(''),
    mes: new FormControl(''),
    anio: new FormControl('')

    })

  }
  operaciones(): void {
    const nombreP = this.formulario.value.nombreP;
    const aPaterno = this.formulario.value.aPaterno;
    const aMaterno = this.formulario.value.aMaterno;
    this.nombreN = nombreP;
    this.pPaterno = aPaterno;
    this.pMaterno = aMaterno;

    const anioNacimiento: number = this.formulario.value.anio;
    this.edadTotal = this.objH.edad(anioNacimiento);
    this.resultadoS = this.objH.signo(anioNacimiento);

    


  }

}
