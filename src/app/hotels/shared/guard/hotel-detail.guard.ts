import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class HotelDetailGuard implements CanActivate {
  public idHotel! : number;

  constructor (private routeVersPageAcceuil : Router ) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      console.log(route);
      this.idHotel = +route.url[1].path;

      if (this.idHotel < 0 || isNaN(this.idHotel) || this.idHotel > 2 ){
        alert("Hotel introuvable");
        this.routeVersPageAcceuil.navigate(['/hotels']);

        return false;
      }

      
    return true;
  }
  
}
