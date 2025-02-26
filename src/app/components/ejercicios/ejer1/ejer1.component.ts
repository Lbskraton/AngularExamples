import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer1',
  imports: [],
  templateUrl: './ejer1.component.html',
  styleUrl: './ejer1.component.css'
})
export class Ejer1Component {

  numeros=[1,2,3,4,5,6,7]

  getOdds():number[]{
    return this.numeros.filter(n=>n%2!==0)
  }

}
