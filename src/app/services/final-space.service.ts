import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersonajeFinalSpace} from "../common/interfaceFinalSpace";

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL: string =
    'https://finalspaceapi.com/api/v0/character/';
  constructor() { }
  getPersonajes(): Observable<PersonajeFinalSpace[]>{
    return this.http.get<PersonajeFinalSpace[]>(this.URL);
  }
  getOnePersonaje(id: number): Observable<PersonajeFinalSpace>{
    return this.http.get<PersonajeFinalSpace>(this.URL+id);
  }
}
