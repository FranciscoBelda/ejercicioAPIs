import {Component, inject} from '@angular/core';
import {FinalSpaceService} from "../../../services/final-space.service";
import {PersonajeFinalSpace} from "../../../common/interfaceFinalSpace";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  private readonly fsService: FinalSpaceService =
    inject(FinalSpaceService);
  personajes: PersonajeFinalSpace[] = [];

  constructor() {
    this.loadPersonajes();
  }

  private loadPersonajes() {
    this.fsService.getPersonajes().subscribe(
      {
        next: value => {
          this.personajes = value;
        },
        error: err => console.error(err),
        complete: () => console.log('Personajes cargados correctamente.')
      }
    )
  }
}
