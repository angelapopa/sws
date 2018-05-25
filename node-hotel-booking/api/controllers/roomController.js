import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { RoomSchema } from '../models/roomModel';
import { LinkSchema} from '../models/linkModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Room = mongoose.model('Room', RoomSchema);
const Link = mongoose.model('Link', LinkSchema);

//FIXME: there is no id field in the db for rooms
export const getHotelRooms = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            console.log("Found "+ hotel.makesOffer.length + " room offers.");
            res.status(200).json(hotel.makesOffer);
        }
    });
};

export const getHotelRoomsByName = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            hotel.makesOffer.forEach(function(element) {
                if (element.name == req.params.roomName){
                    res.status(200).json(element);
                }
            });
        }
    });
};

export const getHotelRoomPrices = (req, res) => {
    let hotelId = req.params.hotelId;
    console.log(hotelId);
    let roomName = req.params.roomName;
    console.log("room " + roomName);
    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
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
                res.status(404).send("No room offer '"+ roomName + "' "+ "for hotel '" + hotelId + "' was not found!");
            }
        }
    });
};
