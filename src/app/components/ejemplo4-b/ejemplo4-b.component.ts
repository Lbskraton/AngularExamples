import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo4-b',
  imports: [],
  templateUrl: './ejemplo4-b.component.html',
  styleUrl: './ejemplo4-b.component.css'
})
export class Ejemplo4BComponent {
  constructor(){
    this.numero=0
  }

  numero

  incrementa(){
    this.numero++
  }

  decrementa() {
    this.numero--
    }

  isOdd(){
    return this.numero%2===0
  }

}
