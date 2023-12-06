"use strict";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import data from "./data/data.mjs";
import "../css/style.css";
import {priceFormatter} from "../../assets/js/utils/formatter.mjs";

const features = data.features.map(x => x);
const hotels = data.hotels.map(x => x);
const offers = data.offers.map(x => x);
let filtered = offers;

function loadOffers(){
    const offersRow = document.getElementById("offers");
    while(offersRow.firstChild){
        offersRow.firstChild.remove();
    }
    const template = document.querySelector("template");
    for (const offer of filtered) {
        const clone = template.content.cloneNode(true);
        const hotel = hotels.filter(x => x.id == offer.hotel_id)[0];
        clone.querySelector("img").src = hotel.img;
        clone.querySelector("h5").textContent = hotel.name;
        clone.querySelector(".card-text").textContent = offer.summary;
        clone.querySelector("small").textContent = features.filter(x => hotel.features.includes(x.id)).map(x => x.name).join(", ");
        clone.querySelector(".card-footer").textContent = `Ára: ${priceFormatter.format(offer.cost)}/fő/éj`;
        offersRow.append(clone);
    }   
}

const filterOffers = document.getElementById("run-filter");
const clearFilters = document.getElementById("clear-filter");

filterOffers.addEventListener("click", filter);
clearFilters.addEventListener("click", clearFilter);

function filter(){
    filtered = offers;
    const min = document.getElementById("min-price").value;
    const max = document.getElementById("max-price").value;
    if (min != "")
        filtered = filtered.filter(x => x.cost >= min);
    if (max != "")
        filtered = filtered.filter(x => x.cost <= max);
    loadOffers();
}

function clearFilter(){
    document.getElementById("min-price").value = '';
    document.getElementById("max-price").value = '';
    filtered = offers;
    loadOffers();
}

loadOffers();