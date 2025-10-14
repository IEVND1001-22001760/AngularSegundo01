
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Multiplicador } from './apor-bOperaciones';

@Component({
 selector: 'app-apor-b',
 imports: [ReactiveFormsModule],
 templateUrl: './apor-b.component.html',
 styleUrl: './apor-b.component.css',
 standalone: true 
})
export class AporBComponent implements OnInit {
    
    formulario!: FormGroup;
    

    resultado: number | null = null; 
    proceso: string = '';

    ngOnInit(): void {
       this.formulario = new FormGroup({

     numero1: new FormControl(''),
     numero2: new FormControl('')
      })
    }

    calculo(): void {



        const a = this.formulario.value.numero1;
        const b = this.formulario.value.numero2;

        this.resultado = Multiplicador.multiplicarConSumas(a, b);

        this.proceso = Multiplicador.texto(a, b);
    }
}
