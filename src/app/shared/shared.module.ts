import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartRatingComponent } from './components/star-ratings.component.ts/star-rating.component';




@NgModule({
  declarations: [
    StartRatingComponent 
  ],
  imports: [
    CommonModule

  ],
  exports : [
    CommonModule,
    FormsModule,
    StartRatingComponent


  ]
})
export class SharedModule { }
