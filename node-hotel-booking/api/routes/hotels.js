import { 
    addNewHotel,
    getAllHotels,
    getHotelsWithPagination,
    getHotelById,
    getHotelImages,
    getHotelLocation,
    getHotelPayments,
    updateHotel,
    deleteHotel
} from "../controllers/hotelController";

const routes = (app) => {

    //GET all hotels
    app.route('/api/hotels/')
    .get((req, res, next) => {
        
        next(); //continues with next function
    }, getAllHotels)
    //POST endpoint
    .post(addNewHotel);
    


    //GET hotels with pagination
    app.route('/api/hotels/:page([0-9]+)')
    .get((req, res, next) => {
        next();
    }, getHotelsWithPagination);

    app.route('/api/hotels/:hotelId')
    .get((req, res, next) => {
        console.log("Search request for " + req.params.hotelId);
        next();
    }, getHotelById)
    .put(updateHotel)
    .delete(deleteHotel);

    app.route('/api/hotels/:hotelId/images')
    .get((req, res, next) => {
        console.log("Searching images for " + req.params.hotelId);
        next();
    }, getHotelImages);

    app.route('/api/hotels/:hotelId/location')
    .get((req, res, next) => {
        next();
    }, getHotelLocation);

    app.route('/api/hotels/:hotelId/payments')
    .get((req, res, next) => {
        next();
    }, getHotelPayments);

    //TODO add other endpoints
}

export default routes;