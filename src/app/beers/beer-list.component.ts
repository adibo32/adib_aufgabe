import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerService } from '../service/beer.service';
import { NgbdModalBasic } from '../modal/modal-basic';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddBear } from '../modal/modal-add-bear';

@Component({
  standalone: true,
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  imports: [
    NgFor,
    NgIf,
    NgbdModalBasic,
    NgbdModalAddBear,
    NgbRatingModule,
  ],

  providers: [BeerService],
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [];
  selectedBeer: Beer | undefined;
  constructor(private service: BeerService) {}

  ngOnInit() {
    this.beers = this.service.getBeers();
  }

  updateBeer = (id: number, value: number) => {
    this.beers.filter((el: Beer) => el.id === id)[0].value = value;
  };
  addBeer = (name: string, origin: string, picture: string) => {
    let newBeer = new Beer(name, origin, 0, picture);
    this.beers.push(newBeer);
  };
  selectBeer(beer: Beer) {
    this.selectedBeer = beer;
  }
}
