import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicador',
  imports: [FormsModule, ReactiveFormsModule],//agragar formulario 
  templateUrl: './multiplicador.component.html',
  styleUrl: './multiplicador.component.css'
})
export class MultiplicadorComponent {
  formulario!: FormGroup;
  resultado!:number;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
  }
  multNumeros():void{
    //let n1 = this.formulario.get('numero1')?.value;
    let n1 = this.formulario.value.numero1;
    let n2 = this.formulario.value.numero2;
    this.resultado = n1 * n2;
  }
}
