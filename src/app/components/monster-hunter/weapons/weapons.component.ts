import {Component, inject} from '@angular/core';
import {MonsterHunterService} from "../../../services/monster-hunter.service";
import {weaponMHW} from "../../../common/interfaceMHW";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
  private readonly mhwService: MonsterHunterService =
    inject(MonsterHunterService);
  listaWeapons: weaponMHW[] = [];

  constructor() {
    this.loadWeapons();
  }

  private loadWeapons() {
    this.mhwService.getWeapons().subscribe(
      {
        next: value => {
          this.listaWeapons = value;
        },
        error: err => console.error(err),
        complete: () => console.log('Armas cargadas.')
      }
    )
  }
}
