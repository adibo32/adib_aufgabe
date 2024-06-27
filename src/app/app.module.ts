import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// IMPORT STAR RATING MODULE
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
  ],
})
export class AppModule {}
