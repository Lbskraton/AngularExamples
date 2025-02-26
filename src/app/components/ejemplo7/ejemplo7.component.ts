import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo7',
  imports: [],
  templateUrl: './ejemplo7.component.html',
  styleUrl: './ejemplo7.component.css'
})
export class Ejemplo7Component {
backgroundColor='gray';
isError() {
return true
}
  theme='pastel'

}
