import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejer3-b',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './ejer3-b.component.html',
  styleUrl: './ejer3-b.component.css'
})
export class Ejer3BComponent {
  imc=0

  handleSubmit() {
  
    if(this.form.invalid) return 
    this.imc=this.form.value.altura/(this.form.value.peso*this.form.value.peso)
   
  }

  getIMCText(){
    if(this.imc<18.5){
      return 'Bajo peso'
    }
    if(this.imc<24.9){
      return 'Normal'
    }
    if(this.imc<29.9){
      return 'SobrePeso'
    }if(this.imc<34.9){
      return 'Obesidad clase 1'
    }if(this.imc<40){
      return 'Obesidad clase 2'
    }else{
      return 'Obesidad clase 3'
    }
    return 'Error'
  }
  
    formBuilder= inject(FormBuilder)
  
    form:FormGroup=new FormGroup({})
    ngOnInit(): void {
      this.form=this.formBuilder.group({
        altura:[0,[Validators.required]],
        peso:[0,[Validators.required]]
      })
    }

}
