const mongoose = require('mongoose');

// Trip Schema
const TripSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    isSaved: { type: Boolean, default: false },
}, { timestamps: true });

// TopPlace Schema
const TopPlaceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
}, { timestamps: true });

// Hotel Schema
const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    priceRange: { type: String, required: true },
    amenities: { type: [String], required: true },
}, { timestamps: true });
// specal offers Schema
const Sp_offers = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    priceRange: { type: String, required: true },
    amenities: { type: [String], required: true },
}, { timestamps: true });
// Most visited Schema
const M_visited = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    priceRange: { type: String, required: true },
    amenities: { type: [String], required: true },
}, { timestamps: true });
// butiful places Schema
const B_places = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    priceRange: { type: String, required: true },
    amenities: { type: [String], required: true },
}, { timestamps: true });
// Traditions Schema
const Trad = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    priceRange: { type: String, required: true },
    amenities: { type: [String], required: true },
}, { timestamps: true });
// monumants Schema

const Trip = mongoose.model("Trip", TripSchema);
const TopPlace = mongoose.model("TopPlace", TopPlaceSchema);
const Traditions = mongoose.model("Traditions", Trad);
const Butiful_places = mongoose.model("Butiful_places", B_places);
const Hotel = mongoose.model("Hotel", HotelSchema);
const Most_visited = mongoose.model("Most_visited", M_visited);
const Specal_offers = mongoose.model("Specal_offers", Sp_offers);



module.exports = { Trip, TopPlace, Hotel ,Traditions,Butiful_places,Most_visited,Specal_offers};
