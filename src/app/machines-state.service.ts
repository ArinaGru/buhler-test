import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MachinesStateService {
  private machines: Machine[] = [
    {
      id: 1,
      name: 'Scale',
      state: 'Running',
      icon: 'scale',
    },
    {
      id: 2,
      name: 'Attacher',
      state: 'Alarm',
      icon: 'library_books',
    },
    {
      id: 3,
      name: 'Packer',
      state: 'Running',
      icon: 'inventory',
    },
    {
      id: 4,
      name: 'Closer',
      state: 'Warning',
      icon: 'apps',
    },
  ];
  constructor() {}
  getMachines(): Observable<Machine[]> {
    return of(this.machines);
  }
}
export interface Machine {
  id: number;
  name: string;
  state: string;
  icon: string;
}
