import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo9',
  imports: [CommonModule,FormsModule],
  templateUrl: './ejemplo9.component.html',
  styleUrl: './ejemplo9.component.css'
})
export class Ejemplo9Component {
  email=''
  password=''

  handleSubmit(){
    alert(`Te has logueado: ${this.email} ${this.password}`)
  }

}
