import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejer3',
  imports: [CommonModule,FormsModule],
  templateUrl: './ejer3.component.html',
  styleUrl: './ejer3.component.css'
})
export class Ejer3Component {

  handleSubmit() {
    alert("Tu indice de masa corporal (IMC) es: "+(this.peso/this.altura))
    
  }
    altura: number=0;
    peso: number=0;
  
  

}
