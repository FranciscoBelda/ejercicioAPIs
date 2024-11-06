import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {weaponMHW} from "../common/interfaceMHW";

@Injectable({
  providedIn: 'root'
})
export class MonsterHunterService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL = 'https://mhw-db.com/weapons/';
  constructor() { }
  getWeapons(): Observable<weaponMHW[]>{
    return this.http.get<weaponMHW[]>(this.URL);
  }
  getWeaponsByPage(page:number): Observable<weaponMHW[]>{
    /*
    page -> idMenor = algo ; idMayor = algo;
    page 1 -> https://mhw-db.com/weapons?q={"id":{"$gte":1,"$lte":20}}
    page 2 -> https://mhw-db.com/weapons?q={"id":{"$gte":21,"$lte":40}}
    page 3 -> https://mhw-db.com/weapons?q={"id":{"$gte":41,"$lte":60}}
    page N -> https://mhw-db.com/weapons?q={"id":{"$gte":idMenor,"$lte":idMayor}}
    */
    return this.http.get<weaponMHW[]>(this.URL);
  }
  getOneWeapon(id: number): Observable<weaponMHW>{
    return this.http.get<weaponMHW>(this.URL+id);
  }
}
