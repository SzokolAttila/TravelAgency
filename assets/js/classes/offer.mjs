class Offer{
    #hotel;
    #id;
    #cost;
    #summary;
    #available;
    constructor(hotel, id, cost, summary, available){
        this.#hotel = hotel;
        this.#id = id;
        this.#cost = cost;
        this.#summary = summary;
        this.#available = available;
    }
    get hotelFeatures(){
        return this.#hotel.allFeatures;
    }
    get hotelName(){
        return this.#hotel.name;
    }
    get hotelImage(){
        return this.#hotel.image;
    }
    get cost(){
       return this.#cost; 
    }
    get summary(){
        return this.#summary;
    }
    get available(){
        return this.#available;
    }
}