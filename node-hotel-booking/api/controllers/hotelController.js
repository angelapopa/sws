import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';

const Hotel = mongoose.model('Hotel', HotelSchema);

export const addNewHotel = (req, res) => {
    let newHotel = new Hotel(req.body);

    newHotel.save((err, hotel) => {
        if (err) {
            res.send(err);
        }
        res.json(hotel);
    });
};

export const getHotels = (req, res) => {
    Hotel.find({}, (err, hotel) => {
        if (err) {
            res.send(err);
        }
        res.json(hotel);
    });
};

//TODO add some more actions for hotel