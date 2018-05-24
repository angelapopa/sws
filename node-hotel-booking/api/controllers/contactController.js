import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { ContactSchema } from '../models/contactModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Contact = mongoose.model('Contact', ContactSchema);

export const getHotelContacts = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel.contacts);
        }
    });
};

export const addNewHotelContact = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            let newContact = Contact(req.body);
            //add the new contact to the array of contacts
            hotel.contacts.push(newContact);
                    
            //mark the array as modified, so that mongoose is informed about the change
            hotel.markModified('contacts');

            //save hotel
            hotel.save(function(err) {
                console.log("Adding 1 contact for hotel "+ hotel.id + " :");
                res.status(201).json(hotel.contacts);
            });
        }
    });
};
