import { Component, OnInit } from "@angular/core";  
import { subscribeOn } from "rxjs";
import {  IHotel } from "./hotel";
import { HotelListeService } from "./hotel-liste.service";

@Component(
    {
        selector: 'hotel-liste',
        templateUrl: "./hotel-liste.component.html"
    }
 )

 
export class HotellisteComponent implements OnInit {       

    public errMsg! : string;           
    ngOnInit(): void { // permet de définir des actions lorsque le composant va se lancer à l'initialisation quoi
        this.hotelListes.getListHotels().subscribe({     // subscribe permet d'écouter les observables
            next : hotel => {                            // next correspond aux éléments qui arrive et met en 
                                                         //parametre ces elements
                this.hotels = hotel;                     // Stock les valeurs obtenus dans notre variable
                this.filteredHotel = this.hotels;        // est indispensable car les données sont asynchrones si on le met en dehors, il risque de lire les données avant qu'elles y soient
            },

            error : err => this.errMsg = err             // en cas d'erreur, on stock le message d'erreur dans notre variable
        })
        this.hotelFilter = '';
        
    }
    hotels: IHotel[] = [];
    public titre = "Liste d'hotels";

    constructor (private hotelListes : HotelListeService ) {}; // pour faire appel au service HotelListeService et créer une dépendance (hotelListes) 

    public showBadge: boolean = false;

    public toggleNewBadge() : void {
        this.showBadge = !this.showBadge;
    }

    private _hotelFilter = "";

    public filteredHotel: IHotel[] = [];

    public get hotelFilter() : string {   // getter de notre variable hotelfilter qui sera mis en privé pour éviter detre accessible partout : c'est l'encapsulation
        return this._hotelFilter
    }

    public set hotelFilter(filter : string){  // setter on aura compris
        this._hotelFilter = filter;
        this.filteredHotel = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
    }

    private filterHotels(criteria : string) : IHotel[]{ // pour appliquer le filtre
        criteria = criteria.toLocaleLowerCase();
        
        const res = this.hotels.filter(
            (hotel : IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1  
        );

        return res;
    }
    
    public elementRecu! : string; 
    
    public ratingReceived(message: string) : void{
           this.elementRecu = message;
    }

 } 