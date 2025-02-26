import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Character{
  id:number,
  name:string,
  image:string
}

interface AppResponse{
  results: Character[]
}

@Injectable({
  providedIn: 'root'
})


export class RickAndMortyService {
  

  rymAPI='https://rickandmortyapi.com/api'

  readonly httpClient=inject(HttpClient)

  getAll():Observable<AppResponse> {
    return this.httpClient.get<AppResponse>(this.rymAPI+'/character');
  }
  
}
