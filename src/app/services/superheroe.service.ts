import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Superheroe{
  id:number
  nombre:String
  superPoderes:string[]
  fotoUrl:string
}

@Injectable({
  providedIn: 'root'
})
export class SuperheroeService {

  readonly httpClient=inject(HttpClient)
   URL="http://localhost:8080/api/superheroes"

  constructor() { }

  getAll(){
    return this.httpClient.get<Superheroe[]>(this.URL)
  }

  save(Superheroe:Superheroe){
    return this.httpClient.post(this.URL,Superheroe)
  }

  delete(id:number){
    return this.httpClient.delete(this.URL+"/"+id)
  }
}
