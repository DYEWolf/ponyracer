import { Component, signal } from '@angular/core';
import { Races } from './races/races';

@Component({
  selector: 'ns-root',
  imports: [Races],
  template: `
    <h1>Pony Racer!</h1>
    <ns-races/>
  `,
})
export class App {
  protected readonly numberOfUsers = signal(146);
}
