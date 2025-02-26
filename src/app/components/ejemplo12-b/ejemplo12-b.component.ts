import { Component } from '@angular/core';
import { Ejemplo12HijoBComponent } from "../ejemplo12-hijo-b/ejemplo12-hijo-b.component";

@Component({
  selector: 'app-ejemplo12-b',
  imports: [Ejemplo12HijoBComponent],
  templateUrl: './ejemplo12-b.component.html',
  styleUrl: './ejemplo12-b.component.css'
})
export class Ejemplo12BComponent {

}
