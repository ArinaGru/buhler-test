import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { MachinesStateService } from './machines-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  machines$ = this.machinesStateService.getMachines();
  updatedDate: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));
  constructor(private machinesStateService: MachinesStateService) {}
}
