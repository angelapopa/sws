import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { RoomSchema } from '../models/roomModel';
import { BookingSchema } from '../models/bookingModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Room = mongoose.model('Room', RoomSchema);
const Booking = mongoose.model('Booking', BookingSchema);

export const getHotelRoomBookings = (req, res) => {
    let hotelId = req.params.hotelId;
    let roomName = req.params.roomName;
    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            let found = false;
            hotel.makesOffer.forEach(function(element) {
                if (element.name == roomName){
                    console.log("Found "+ element.bookings.length+" bookings for room "+ element.name);
                    res.status(200).json(element.bookings);
                    found = true;
                }
            });

            if (!found){
                res.status(404).send("No room '"+ roomName + "' "+ "for hotel '" + hotelId + "' was not found!");
            }
        }
    });
};

export const addNewHotelRoomBooking = (req, res) => {
    let hotelId = req.params.hotelId;
    let roomName = req.params.roomName;
    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            let found = false;
            hotel.makesOffer.forEach(function(room) {
                if (room.name == roomName){
                    found = true;
                    console.log("Found room "+ roomName);
                    let newBooking = Booking(req.body);

                    //add the new booking to the array of bookings
                    room.bookings.push(newBooking);
                    
                    //mark the array as modified, so that mongoose is informed about a change
                    hotel.markModified('makesOffer');

                    //save hotel
                    hotel.save(function(err) {
                        console.log("Adding 1 booking for room "+ room.name);
                        res.status(201).json(room.bookings);
                    });
                }
            });

            if (!found){
                res.status(404).send("No room '"+ roomName + "' "+ "for hotel '" + hotelId + "' was not found!");
            }
        }
    });
};
