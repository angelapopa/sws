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
    .select(['name', 'url', 'description', 'priceRange'])
    .exec(function (err, hotel){
        res.json(hotel);
    });
};

export const getHotelByName = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName})
    .select(['name', 'url', 'description', 'priceRange'])
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
    .select(['name', 'url', 'description', 'address', 'priceRange'])
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

export const getHotelPayments = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({"name":hotelName})
    .select(['paymentAccepted', 'currenciesAccepted'])
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

export const getHotelRooms = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName}, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            console.log("Found "+ hotel.makesOffer.length + " room offers."); //TODO display the size
            res.status(200).json(hotel.makesOffer);
        }
    });
};

export const getHotelRoomPrices = (req, res) => {
    let hotelName = req.params.name;
    console.log(hotelName);
    let roomName = req.params.roomName;
    console.log(roomName);
    Hotel.findOne({name:hotelName}, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            let found = false;
            hotel.makesOffer.forEach(function(element) {
                if (element.name == roomName){
                    console.log("Found priceSpecification for offer "+ element.name + " :");
                    res.status(200).json(element.priceSpecification);
                    found = true;
                }
            });

            if (!found){
                res.status(404).send("No room offer named '"+ roomName + "' "+ "for hotel '" + hotelName + "' was not found!");
            }
        }
    });
};

//TODO add some more actions for hotel