import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ability{
  name:string,
  url:string
}

export interface Pokemon{
  name: string,
  id:number,
  weight:number,
  height:number,
  sprites:{
    front_default:string
  },
  abilities:ability[]

}



@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  readonly httpClient=inject(HttpClient)
  pokeApi='https://pokeapi.co/api/v2/pokemon/'

  getPokemon(pokeName:string) {
      return this.httpClient.get<Pokemon>(this.pokeApi+pokeName);
  }
    

  
}
