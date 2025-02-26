import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ejemplo12-hijo-b',
  imports: [],
  templateUrl: './ejemplo12-hijo-b.component.html',
  styleUrl: './ejemplo12-hijo-b.component.css'
})
export class Ejemplo12HijoBComponent {

  texto=input.required()
  color=input

}
