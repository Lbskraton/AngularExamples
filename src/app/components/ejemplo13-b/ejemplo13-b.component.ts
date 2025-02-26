import { Component } from '@angular/core';
import { Ejemplo13HijoBComponent } from "../ejemplo13-hijo-b/ejemplo13-hijo-b.component";

@Component({
  selector: 'app-ejemplo13-b',
  imports: [Ejemplo13HijoBComponent],
  templateUrl: './ejemplo13-b.component.html',
  styleUrl: './ejemplo13-b.component.css'
})
export class Ejemplo13BComponent {

  mensaje=""

  handleEdadChange(edad:number){

    this.mensaje='Mi hijo me dice que su edad es '+edad

  }

}
