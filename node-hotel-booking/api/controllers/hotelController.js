import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';

const Hotel = mongoose.model('Hotel', HotelSchema);

export const addNewHotel = (req, res) => {
    let newHotel = new Hotel(req.body);

    newHotel.save((err, hotel) => {
        res.status(201).json(hotel);
    });
};

//TODO add paging
export const getHotels = (req, res) => {
    Hotel.find({})
    .select(['name', 'url', 'description', 'priceRange', 'currenciesAccepted'])
    .exec(function (err, hotel){
        res.json(hotel);
    });
};

export const getHotelByName = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName})
    .select(['name', 'url', 'description', 'priceRange', 'currenciesAccepted'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const getHotelImages = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName}, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            console.log("Found "+ hotel.image.length + " images.");
            res.status(200).json(hotel.image);
        }
    });
};

export const getHotelLocation = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName})
    .select(['address', 'geo'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const getHotelsAtLocation = (req, res) => {
    let locationName = req.params.locationName;
    Hotel.find({"address.addressLocality":locationName})
    .select(['name', 'url', 'description', 'address', 'priceRange', 'currenciesAccepted'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

//TODO add some more actions for hotel