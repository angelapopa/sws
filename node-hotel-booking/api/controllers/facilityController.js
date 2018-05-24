import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { FacilitySchema } from '../models/facilityModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Facility = mongoose.model('Facility', FacilitySchema);

export const getHotelFacilities = (req, res) => {
    let hotelId = req.params.hotelId;

    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            console.log("Found "+ hotel.facilities.length + " hotel facilities.");
            res.status(200).json(hotel.facilities);
        }
    });
};

export const addHotelFacilities = (req, res) => {
    let hotelId = req.params.hotelId;

    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){

            let newFacility = new Facility(req.body);
            
            hotel.facilities.push(newFacility);
            hotel.markModified('facilities');
        
            hotel.save(function(err) {
                console.log("Adding 1 facility for hotel "+ hotel.id + " :");
                res.status(201).json(hotel.facilities);
            });
        }
    });
};
