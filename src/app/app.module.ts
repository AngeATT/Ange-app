import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { HotellisteComponent } from './hotel-liste/hotel-liste.component';
import { StartRatingComponent } from './shared/components/star-ratings.component.ts/star-rating.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel-liste/hotel-detail/hotel-detail.component';




registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent, 
    HotellisteComponent,
    StartRatingComponent,
    HomeComponent,
    HotelDetailComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'home', component : HomeComponent },
      { path : '', redirectTo :'home',  pathMatch : 'full' },
      { path : 'hotels/:id', component : HotelDetailComponent  },
      { path : 'hotels', component : HotellisteComponent  },
      { path : '**', redirectTo : 'home', pathMatch : 'full'}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
