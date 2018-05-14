import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { ContactSchema } from '../models/contactModel';
import { LinkSchema} from '../models/linkModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Link = mongoose.model('Link', LinkSchema);

export const addNewHotel = (req, res) => {
    let newHotel = new Hotel(req.body);

    newHotel.save((err, hotel) => {
        res.status(201).json(hotel);
    });
};

export const getAllHotels = (req, res) => {
    Hotel.find({})
    .select(['name', 'url', 'description', 'priceRange', 'links'])
    .sort({'name': 'ascending'})
    .exec(function (err, hotels){
        res.send(hotels);
    });
};

//TODO add fields like totalNumberOfPages, firstPage, lastPage etc.
//by using some node js package dedicated for pagination
export const getHotelsWithPagination = (req, res) => {
    var perPage = 10
    var page = req.params.page || 1
    Hotel.find({})
         .skip((perPage * page) - perPage)
         .limit(perPage)
         .select(['name', 'url', 'description', 'priceRange', 'links'])
         .sort({'name': 'ascending'})
         .exec(function(err, hotels) {
            res.json(hotels);
        });
};

export const getHotelByName = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName})
    .select(['name', 'url', 'description', 'priceRange', 'links'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            console.log(hotel.name);
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

//TODO add some more actions for hotel