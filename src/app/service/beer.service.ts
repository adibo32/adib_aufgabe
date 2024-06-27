import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { BackendService } from '../models/backend.beer';

@Injectable({ providedIn: 'root' })
export class BeerService {
  private beers: Beer[] = [];

  constructor(private backend: BackendService) {}

  getBeers() {
    this.backend.getAll(Beer).then((beers: Beer[]) => {
      this.beers.push(...beers);
    });
    return this.beers;
  }

  addBeers(name: string, origin: string, picture: string) {
    let newBeer = new Beer(name, origin, 0, picture);
    this.beers.push(newBeer);
  }
}
