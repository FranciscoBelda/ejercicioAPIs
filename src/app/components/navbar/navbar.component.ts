import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  enlaces: { nombre: string; ruta: string }[] = [
    {
      nombre: 'Valorant',
      ruta: '/valorant'
    },
    {
      nombre: 'Pokemon',
      ruta: '/pokemon'
    },
    {
      nombre: 'Monster Hunter',
      ruta: '/monster-hunter'
    },
    {
      nombre: 'Final Space',
      ruta: '/final-space'
    }
  ];

}
