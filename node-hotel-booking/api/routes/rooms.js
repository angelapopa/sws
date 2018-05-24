import { 
   getHotelRooms,
   getHotelRoomPrices
} from "../controllers/roomController";

const roomRoutes = (app) => {

    app.route('/api/hotels/:hotelId/rooms')
    .get((req, res, next) => {
        next();
    }, getHotelRooms);

    app.route('/api/hotels/:hotelId/rooms/:roomName/prices')
    .get((req, res, next) => {
        next();
    }, getHotelRoomPrices);
}

export default roomRoutes;