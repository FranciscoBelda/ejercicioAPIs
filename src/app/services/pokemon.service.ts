import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterfacePokemonTCG} from "../common/interfacePokemonTCG";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL = 'https://api.pokemontcg.io/v2/cards';
  constructor() { }
  getPokemons(): Observable<InterfacePokemonTCG>{
    return this.http.get<InterfacePokemonTCG>(this.URL);
  }
}
