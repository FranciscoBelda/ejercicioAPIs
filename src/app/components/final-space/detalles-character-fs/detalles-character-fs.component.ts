import {Component, inject, Input, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FinalSpaceService} from "../../../services/final-space.service";
import {PersonajeFinalSpace} from "../../../common/interfaceFinalSpace";

@Component({
  selector: 'app-detalles-character-fs',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './detalles-character-fs.component.html',
  styleUrl: './detalles-character-fs.component.css'
})
export class DetallesCharacterFsComponent implements OnInit{
  @Input('id') id!: number;
  private readonly fsService: FinalSpaceService = inject(FinalSpaceService);
  personaje!: PersonajeFinalSpace;

  ngOnInit(): void {
    this.loadCharacter();
  }

  private loadCharacter() {
    this.fsService.getOnePersonaje(this.id).subscribe(
      {
        next: value => {
          this.personaje = value;
        },
        error: err => console.error(err),
        complete: () => console.log('Character loaded')
      }
    )
  }
}
