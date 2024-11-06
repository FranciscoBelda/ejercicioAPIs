import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ErrorComponent} from "./components/error/error.component";
import {AgentesComponent} from "./components/valorant/agentes/agentes.component";
import {WeaponsComponent} from "./components/monster-hunter/weapons/weapons.component";
import {CardsComponent} from "./components/pokemon-tcg/cards/cards.component";
import {CharactersComponent} from "./components/final-space/characters/characters.component";
import {DetallesAgenteComponent} from "./components/valorant/detalles-agente/detalles-agente.component";
import {DetallesPokemonComponent} from "./components/pokemon-tcg/detalles-pokemon/detalles-pokemon.component";
import {DetallesWeaponComponent} from "./components/monster-hunter/detalles-weapon/detalles-weapon.component";
import {
  DetallesCharacterFsComponent
} from "./components/final-space/detalles-character-fs/detalles-character-fs.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'valorant',
    component: AgentesComponent
  },
  {
    path: 'valorant/:uuid',
    component: DetallesAgenteComponent
  },
  {
    path: 'monster-hunter',
    component: WeaponsComponent
  },
  {
    path: 'monster-hunter/:id',
    component: DetallesWeaponComponent
  },
  {
    path: 'pokemon',
    component: CardsComponent
  },
  {
    path: 'pokemon/:id',
    component: DetallesPokemonComponent
  },
  {
    path: 'final-space',
    component: CharactersComponent
  },
  {
    path: 'final-space/:id',
    component: DetallesCharacterFsComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];
