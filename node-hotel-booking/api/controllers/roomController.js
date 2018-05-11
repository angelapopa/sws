import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { RoomSchema } from '../models/roomModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Room = mongoose.model('Room', RoomSchema);

export const getHotelRooms = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName}, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            console.log("Found "+ hotel.makesOffer.length + " room offers.");
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
