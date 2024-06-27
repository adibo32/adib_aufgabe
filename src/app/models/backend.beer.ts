import { Injectable, Type } from "@angular/core";
import { Beer } from "./beer";


const BIERS = [
    new Beer('Heiniken','Holland',1 ,'https://ww1.valuecellars.com.au/files/2016/05/93497466-1-1024x1024.png'),
    new Beer('Alt', 'Düsseldorf',2 ,'https://www.thebrewery.co.za/wp-content/uploads/2015/06/Mainstream-Brewing-Altbier-171x600.jpg'),
    new Beer('Kölsch', 'Köln',3 ,'https://cdn02.plentymarkets.com/99cbvkn2wswt/item/images/1317/full/Reissdorf-Koelsch-0-5-l-Bierflasche-kaufen.jpg')
  ];

@Injectable({providedIn: 'root'})
export class BackendService {
constructor() {}

getAll(type: Type<any>): PromiseLike<any[]> {
if (type === Beer) {
  return Promise.resolve<Beer[]>(BIERS);
}
const err = new Error('Cannot get object of this type');
throw err;
}
}