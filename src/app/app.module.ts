import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelModule } from './hotels/hotel.module';




registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
     
  ],
  imports: [
    BrowserModule,
    HotelModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'home', component : HomeComponent },
      { path : '', redirectTo :'home',  pathMatch : 'full' },
      { path : '**', redirectTo : 'home', pathMatch : 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
