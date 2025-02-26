import { Component, inject } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplo14',
  imports: [CommonModule,AsyncPipe],
  templateUrl: './ejemplo14.component.html',
  styleUrl: './ejemplo14.component.css'
})
export class Ejemplo14Component {

  readonly rickAndMortyService=inject(RickAndMortyService)

  personajes$=this.rickAndMortyService.getAll()

  

}
