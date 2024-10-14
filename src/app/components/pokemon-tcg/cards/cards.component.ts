import {Component, inject} from '@angular/core';
import {PokemonService} from "../../../services/pokemon.service";
import {PokemonTCG} from "../../../common/interfacePokemonTCG";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  private readonly pokemnTCGService: PokemonService =
    inject(PokemonService);
  coleccionCartas: PokemonTCG[] = [];
  constructor() {
    this.loadPokemons();
  }
  private loadPokemons() {
    this.pokemnTCGService.getPokemons().subscribe(
      {
        next: (value) => {
          this.coleccionCartas = value.data;
        },
        error: err => console.error(err),
        complete: () => console.log('Cartas cargadas.')
      }
    )
  }
}
