import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { ContactSchema } from '../models/contactModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Contact = mongoose.model('Contact', ContactSchema);

export const getHotelContacts = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName}, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel.contacts);
        }
    });
};

export const addNewHotelContact = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName}, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            let newContact = Contact(req.body);
            //add the new contact to the array of contacts
            hotel.contacts.push(newContact);
                    
            //mark the array as modified, so that mongoose is informed about the change
            hotel.markModified('contacts');

            //save hotel
            hotel.save(function(err) {
                console.log("Adding 1 contact for hotel "+ hotel.name + " :");
                res.status(201).json(hotel.contacts);
            });
        }
    });
};
