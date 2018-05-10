import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';

const Hotel = mongoose.model('Hotel', HotelSchema);

export const addNewHotel = (req, res) => {
    let newHotel = new Hotel(req.body);

    newHotel.save((err, hotel) => {
        res.status(201).json(hotel);
    });
};

//TODO
export const getHotels = (req, res) => {
    Hotel.find({}, (err, hotel) => {
        res.json(hotel);
    });
};

export const getHotelByName = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName}, (err, hotel) =>{
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