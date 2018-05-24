import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';

const Hotel = mongoose.model('Hotel', HotelSchema);

export const getAllHotelsAtLocation = (req, res) => {
    let locationId = req.params.locationId;
    Hotel.find({"address.addressLocality":locationId})
    .select(['id', 'url', 'description', 'address', 'priceRange', 'links'])
    .sort({'id': 'ascending'})
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const getHotelsAtLocationWithPagination = (req, res) => {
    var perPage = 10
    var page = req.params.page || 1
    let location = req.params.location;
    Hotel.find({"address.addressLocality":location})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .select(['id', 'name', 'url', 'description', 'address', 'priceRange', 'links'])
    .sort({'name': 'ascending'})
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};