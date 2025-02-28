import { Component, inject } from '@angular/core';
import { Superheroe, SuperheroeService } from '../../../services/superheroe.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ejer4',
  imports: [AsyncPipe],
  templateUrl: './ejer4.component.html',
  styleUrl: './ejer4.component.css'
})
export class Ejer4Component {

  handleDelete(id:number){
    this.superheroeService.delete(id).subscribe()
  }

  readonly superheroeService=inject(SuperheroeService)
  superheroes$=this.superheroeService.getAll();
  /*
  superheroes:Superheroe[]=[]
  constructor(){
    this.superheroeService.getAll().subscribe(superheroes=>this.superheroes=superheroes)
  }*/

}
