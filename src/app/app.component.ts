import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeerListComponent } from './beers/beer-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <app-beer-list></app-beer-list> `,
  imports: [BeerListComponent],
})
export class AppComponent {
  title = 'adib_aufgabe';
}
