import {Component, inject, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MonsterHunterService} from "../../../services/monster-hunter.service";
import {weaponMHW} from "../../../common/interfaceMHW";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-detalles-weapon',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './detalles-weapon.component.html',
  styleUrl: './detalles-weapon.component.css'
})
export class DetallesWeaponComponent implements OnInit{
  @Input('id') id!: number;
  private readonly mhService: MonsterHunterService =
    inject(MonsterHunterService);
   weapon!: weaponMHW;

  ngOnInit(): void {
    this.loadWeapon();
  }

  private loadWeapon() {
    this.mhService.getOneWeapon(this.id).subscribe(
      {
        next: value => {
          this.weapon = value;
        },
        error: err => console.error(err),
        complete: () => console.log('Weapon loaded')
      }
    )
  }
}
