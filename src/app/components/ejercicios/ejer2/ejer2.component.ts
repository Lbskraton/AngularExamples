import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon, PokemonServiceService } from '../../../services/pokemon.service.service';

@Component({
  selector: 'app-ejer2',
  imports: [FormsModule,CommonModule],
  templateUrl: './ejer2.component.html',
  styleUrl: './ejer2.component.css'
})
export class Ejer2Component {
  pokemonName=""

  pokemon:Pokemon | null=null

  readonly pokemonService=inject(PokemonServiceService)

  search() {

    //Creo el observable
    const obsPokemon=this.pokemonService.getPokemon(this.pokemonName)

    //me subscribo y le paso los datos a pokemon
    obsPokemon.subscribe(datos=>this.pokemon=datos)

  
  }

}
