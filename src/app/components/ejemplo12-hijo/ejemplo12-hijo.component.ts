import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo12-hijo',
  imports: [],
  templateUrl: './ejemplo12-hijo.component.html',
  styleUrl: './ejemplo12-hijo.component.css'
})
export class Ejemplo12HijoComponent {

  @Input() texto=''
  @Input() color='black'

}
