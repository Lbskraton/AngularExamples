import { Component, output } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-hijo-b',
  imports: [],
  templateUrl: './ejemplo13-hijo-b.component.html',
  styleUrl: './ejemplo13-hijo-b.component.css'
})
export class Ejemplo13HijoBComponent {

  edadCambia=output<number>()

  avisarPadre(edad:number) {
    this.edadCambia.emit(edad)
  }

}
