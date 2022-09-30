interface  IHotel {        // notre interface qui va permettre de définir le squelette de nos composantes

    hotelId : Number;
    hotelName : string;
    description : string;
    price : number;
    imageUrl : string;
    rating : number;

}

export {IHotel};