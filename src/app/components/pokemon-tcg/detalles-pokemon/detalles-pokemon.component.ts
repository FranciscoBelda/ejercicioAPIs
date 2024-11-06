import {Component, inject, Input, OnInit} from '@angular/core';
import {PokemonService} from "../../../services/pokemon.service";
import {PokemonTCG} from "../../../common/interfacePokemonTCG";

@Component({
  selector: 'app-detalles-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './detalles-pokemon.component.html',
  styleUrl: './detalles-pokemon.component.css'
})
export class DetallesPokemonComponent implements OnInit{
@Input('id') id!: string;
private readonly pokeService: PokemonService = inject(PokemonService);
  pokemon!: PokemonTCG;

  ngOnInit(): void {
    this.loadPokemon();
  }

  private loadPokemon() {
    this.pokeService.getOnePokemon(this.id).subscribe(
      {
        next: value => {
          this.pokemon = value.data;
        },
        error: err => console.error(err),
        complete: () => console.log('Pokemon loaded.')
      }
    )
  }
}
