import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-hijo',
  imports: [],
  templateUrl: './ejemplo13-hijo.component.html',
  styleUrl: './ejemplo13-hijo.component.css'
})
export class Ejemplo13HijoComponent {
  avisarPadre(edad:number) {
    this.edadCambia.emit(edad)
  }
  @Output() edadCambia=new EventEmitter<number>()


}
