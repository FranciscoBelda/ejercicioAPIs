import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ErrorComponent} from "./components/error/error.component";
import {AgentesComponent} from "./components/valorant/agentes/agentes.component";
import {WeaponsComponent} from "./components/monster-hunter/weapons/weapons.component";
import {CardsComponent} from "./components/pokemon-tcg/cards/cards.component";
import {CharactersComponent} from "./components/final-space/characters/characters.component";

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
    path: 'monster-hunter',
    component: WeaponsComponent
  },
  {
    path: 'pokemon',
    component: CardsComponent
  },
  {
    path: 'final-space',
    component: CharactersComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];
