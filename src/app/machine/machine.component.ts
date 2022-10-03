import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Machine } from '../machines-state.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachineComponent {
  @Input() machine: Machine = {} as Machine;
  @Input() showIcon: boolean = false;
  iconMap:Record<string,string> = {
    Running: 'restart_alt',
    Warning: 'warning_amber',
    Alarm: 'error_outline',
  };
}
