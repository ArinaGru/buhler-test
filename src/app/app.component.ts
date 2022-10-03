import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MachinesStateService } from './machines-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  machines$ = this.machinesStateService.getMachines();
  date = new Date();
  constructor(private machinesStateService: MachinesStateService) {}
}
