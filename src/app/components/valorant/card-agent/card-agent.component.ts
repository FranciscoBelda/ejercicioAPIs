import {Component, Input} from '@angular/core';
import {Agent} from "../../../common/interfaceValorantAgent";

@Component({
  selector: 'app-card-agent',
  standalone: true,
  imports: [],
  templateUrl: './card-agent.component.html',
  styleUrl: './card-agent.component.css'
})
export class CardAgentComponent {
  @Input() agent!: Agent;


  constructor() {
    console.log(this.agent);
  }
}
