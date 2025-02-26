import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  imports: [],
  templateUrl: './ejemplo8.component.html',
  styleUrl: './ejemplo8.component.css'
})
export class Ejemplo8Component {

  resultado=0
  sumar(n1:number,n2:number){
    this.resultado=n1+n2
  }
}
