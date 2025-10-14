//import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {DistanciaComponent} from './distancia.component';


export class distancia{

    numx1!:number;
    numy1!:number;
    numx2!:number;
    numy2!:number;
    Rx!:number;
    Ry!:number;
    Sx!:number;
    Sy!:number;
    Txy!:number;
    resultado!:number;

    calculo(): void {
        
        //primero se restan x y y
        this.Rx = this.numx2 - this.numx1;
        this.Ry = this.numy2 - this.numy1;

        //su resultado se suma por si mismo 
        //y a su vez elevas la portencia
        this.Sx = this.Rx * this.Rx;
        this.Sy = this.Ry * this.Ry;
        this.Txy = this.Sx + this.Sy;
        this.resultado = (this.Txy ** (1/2));

    
    }
}

//