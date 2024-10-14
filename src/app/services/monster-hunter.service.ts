import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {weaponMHW} from "../common/interfaceMHW";

@Injectable({
  providedIn: 'root'
})
export class MonsterHunterService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL = 'https://mhw-db.com/weapons';
  constructor() { }
  getWeapons(): Observable<weaponMHW[]>{
    return this.http.get<weaponMHW[]>(this.URL);
  }
}
