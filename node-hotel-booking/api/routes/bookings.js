import { 
   getHotelRoomBookings,
   addNewHotelRoomBooking
} from "../controllers/bookingController";

const bookingRoutes = (app) => {

    app.route('/api/hotels/:hotelId/rooms/:roomName/bookings')
    .get((req, res, next) => {
        next();
    }, getHotelRoomBookings)
    .post(addNewHotelRoomBooking);

    //TODO add other endpoints
}

export default bookingRoutes;