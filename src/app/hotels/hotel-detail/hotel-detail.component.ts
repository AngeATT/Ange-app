import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from '../shared/model/hotel';
import { HotelListeService } from '../hotel-liste/hotel-liste.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private hotelListeService : HotelListeService,
    private router : Router
  ) {}

  public hotelRecu : IHotel = <IHotel>{};
  

  ngOnInit(): void {
    const idNumber = +this.route.snapshot.paramMap.get('id')!;
    
    this.hotelListeService.getListHotels().subscribe( (hotels : IHotel[]) =>
      {this.hotelRecu = hotels.find(hotel => hotel.hotelId == idNumber)!;
      } 
    )

    console.log("hotel" + this.hotelRecu);
  }

  public retourALaListe() : void {

    this.router.navigate(['/hotels'])
  }
  



}
