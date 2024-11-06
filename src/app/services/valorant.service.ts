import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterfaceValorantAgent, InterfaceValorantOneAgent} from "../common/interfaceValorantAgent";

@Injectable({
  providedIn: 'root'
})
export class ValorantService {
  private readonly URL = 'https://valorant-api.com/v1/agents/';
  private readonly http: HttpClient = inject(HttpClient);
  constructor() { }
  getAgents(): Observable<InterfaceValorantAgent>{
    return this.http.get<InterfaceValorantAgent>(this.URL);
  }
  getDetailAgent(uuid: string): Observable<InterfaceValorantOneAgent>{
    return this.http.get<InterfaceValorantOneAgent>(this.URL+uuid);
  }

}
