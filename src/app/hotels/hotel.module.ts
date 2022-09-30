import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotellisteComponent } from './hotel-liste/hotel-liste.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelDetailGuard } from './shared/guard/hotel-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HotellisteComponent,
    HotelDetailComponent,
    
  ],
  imports: [
    RouterModule.forChild([
      { path : 'hotels/:id', component : HotelDetailComponent, canActivate : [HotelDetailGuard] },
      { path : 'hotels', component : HotellisteComponent  }]),
    SharedModule
  ]
})
export class HotelModule { }
