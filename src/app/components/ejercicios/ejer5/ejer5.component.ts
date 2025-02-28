import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejer5',
  imports: [],
  templateUrl: './ejer5.component.html',
  styleUrl: './ejer5.component.css'
})
export class Ejer5Component {

  formBuilder=inject(FormBuilder)
  form:FormGroup=new FormGroup({})
  ngOnInit():void{
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required]],
      superPoderes:[''],
      fotoUrl:['',Validators.required]
    })

  }

  handleSubmit(){}


}
