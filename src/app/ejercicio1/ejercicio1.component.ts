import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  nombre:string='';
  contra:string='';
  contraRepe:string='';
  respuesta:string='';
  validar():void{
    if(this.contra!=this.contraRepe){
      this.respuesta ="Las contraseñas no son iguales";
    } else {
      this.respuesta ="Bienvenido "+this.nombre;
    }
  }
}
