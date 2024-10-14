import {Component, inject} from '@angular/core';
import {ValorantService} from "../../../services/valorant.service";
import {Agent} from "../../../common/interfaceValorantAgent";
import {CardAgentComponent} from "../card-agent/card-agent.component";

@Component({
  selector: 'app-agentes',
  standalone: true,
  imports: [
    CardAgentComponent
  ],
  templateUrl: './agentes.component.html',
  styleUrl: './agentes.component.css'
})
export class AgentesComponent {
  private readonly valorantService: ValorantService =
    inject(ValorantService);
  agents: Agent[] = [];

  constructor() {
    this.loadAgents();
  }

  private loadAgents() {
    this.valorantService.getAgents().subscribe(
      {
        next: value => {
          this.agents = value.data;
        },
        error: err => console.error(err),
        complete: () => console.log('Agents loaded.')
      }
    )
  }
}
