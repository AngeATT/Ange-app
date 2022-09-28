import {Component, Input, OnChanges, SimpleChanges,EventEmitter, Output} from '@angular/core'
import { OutletContext } from '@angular/router';

@Component({
    selector: 'star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls : ['./star-rating.component.css']
})


export class  StartRatingComponent implements OnChanges {

    public starWidth!: number;

    @Output()
    public starRatingClicked : EventEmitter<string>  = new EventEmitter<string>(); // pour faire passer la variable de la composante enfant vers la composante parente

    @Input()

    public rating! : number; // pour faire passer la variable de la composante parent vers la composante enfant

    ngOnChanges(): void {        
        this.starWidth = this.rating * 125/ 5;
    }

    public sendRating() : void {
        this.starRatingClicked.emit(`La note de cet hotel est de ${this.rating} `); 
    }

}