"use strict";

import data from "./data/data.mjs";

const features = data.features.map(x => x);
const hotels = data.hotels.map(x => x);
const offers = data.offers.map(x => x);
let filtered = features;

