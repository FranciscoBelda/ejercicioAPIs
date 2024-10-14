import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  imagenes = [
    {
      imagen: "/images/monster-hunter-weapons.png",
      ruta: '/monster-hunter'
    },
    {
      imagen: "/images/pokemon-tcg.jfif",
      ruta: '/pokemon'
    },
    {
      imagen: "/images/final-space-characters.png",
      ruta: '/final-space'
    },
    {
      imagen: "/images/valorant-agents.webp",
      ruta: '/valorant'
    }
  ]
}
