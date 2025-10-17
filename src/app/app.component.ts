import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { MultiplicadorComponent } from './formularios/multiplicador/multiplicador.component';
import { AporBComponent } from "./formularios/apor-b/apor-b.component";
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';

  ngOnInit(): void {
    initFlowbite();
  }
}
//AporBComponent
