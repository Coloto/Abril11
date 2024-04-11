import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  desc:string = '';
  codigo:string = '';
  costo:number=0;
  venta:number=0;
  stock:number=0;
  mensajeIngreso:string='';
  ingresar():void{
    if(this.costo>0 && this.venta>0 && this.stock>0){
      this.mensajeIngreso = "Producto dado de alta"
    } else {
      this.mensajeIngreso = "ERROR: Algún parametro no es correcto";
    }
  }
}
