import { 
   getHotelFacilities,
   addHotelFacilities
} from "../controllers/facilityController";

const facilityRoutes = (app) => {

    app.route('/api/hotels/:hotelId/facilities')
    .get((req, res, next) => {
        next();
    }, getHotelFacilities)
    .post(addHotelFacilities);

    //TODO add other endpoints
}

export default facilityRoutes;