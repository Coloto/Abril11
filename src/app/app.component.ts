import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ts01Component } from './ts01/ts01.component';
import { Angular01Component } from './angular01/angular01.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ts01Component, Angular01Component, Ejercicio1Component, Ejercicio2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos01';
}
