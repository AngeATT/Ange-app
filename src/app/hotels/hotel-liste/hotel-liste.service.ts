import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IHotel } from "../shared/model/hotel";
import { tap, catchError } from "rxjs";

@Injectable({
    providedIn : "root"     //permet de spécifier que ce service est disponible à usage pour tout le monde (root)
})

export class HotelListeService {


  private readonly HOTEL_API_URL = "api/hotels.json"; //url ou fichier json ou on va chercher les données

  
  constructor (private http : HttpClient) {}; // c'est le HttpClient http2 = new HttpClient(); en java

    public getListHotels() : Observable<IHotel[]>{           // Notre méthode qui va se charger de soit envoyer les données recu en console avec le tap, soit d'appeler la fonciton de gstion d'erreur avec catchError les deux sont à importer de RxJS
        return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
          /*tap(hotel => console.log("hotels : "+ hotel)), */  // pour mettre en console ce qu'on reçoit 
          catchError(this.handleError)
        )
        
    }


    private handleError(error: HttpErrorResponse) {   // fonction prise dans la documentation de angular pour gerer les erreurs du get
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}