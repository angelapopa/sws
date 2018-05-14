import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';

const Hotel = mongoose.model('Hotel', HotelSchema);

export const getAllHotelsAtLocation = (req, res) => {
    let locationName = req.params.locationName;
    Hotel.find({"address.addressLocality":locationName})
    .select(['name', 'url', 'description', 'address', 'priceRange', 'links'])
    .sort({'name': 'ascending'})
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

export const getHotelsAtLocationWithPagination = (req, res) => {
    var perPage = 10
    var page = req.params.page || 1
    let locationName = req.params.locationName;
    Hotel.find({"address.addressLocality":locationName})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .select(['name', 'url', 'description', 'address', 'priceRange', 'links'])
    .sort({'name': 'ascending'})
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