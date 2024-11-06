import {Component, inject, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ValorantService} from "../../../services/valorant.service";
import {Agent} from "../../../common/interfaceValorantAgent";
import {NgStyle, NgTemplateOutlet} from "@angular/common";
import {NgbToast} from "@ng-bootstrap/ng-bootstrap";

export interface Toast {
  header?: string;
  classname?: string;
  delay?: number;
}

@Component({
  selector: 'app-detalles-agente',
  standalone: true,
  imports: [
    NgStyle,
    NgbToast,
    NgTemplateOutlet
  ],
  templateUrl: './detalles-agente.component.html',
  styleUrl: './detalles-agente.component.css'
})
export class DetallesAgenteComponent implements OnInit {
  @Input('uuid') uuid!: string;
  message: string = '';
  private readonly valorantService: ValorantService =
    inject(ValorantService);
  agent!: Agent;
  toast!: Toast;
  showToast: boolean = false;

  ngOnInit(): void {
    this.loadAgent();
  }


  private loadAgent() {
    this.valorantService.getDetailAgent(this.uuid).subscribe(
      {
        next: value => {
          this.agent = value.data;
        },
        error: err => console.error(err),
        complete: () => {
          this.showToast = true;
          this.message = 'Agents loaded';
          this.toast = {
            classname: 'bg-success text-light toast-container ' +
              'position-fixed top-0 end-50',
            delay: 1500
          };

        }
      }
    )
  }
}
