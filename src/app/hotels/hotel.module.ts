import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotellisteComponent } from './hotel-liste/hotel-liste.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { StartRatingComponent } from '../shared/components/star-ratings.component.ts/star-rating.component';
import { RouterModule } from '@angular/router';
import { HotelDetailGuard } from './shared/guard/hotel-detail.guard';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HotellisteComponent,
    HotelDetailComponent,
    StartRatingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path : 'hotels/:id', component : HotelDetailComponent, canActivate : [HotelDetailGuard] },
      { path : 'hotels', component : HotellisteComponent  }])
  ]
})
export class HotelModule { }
