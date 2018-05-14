import { 
    addNewHotel,
    getAllHotels,
    getHotelsWithPagination,
    getHotelByName,
    getHotelImages,
    getHotelLocation,
    getHotelsAtLocation,
    getHotelPayments
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

    app.route('/api/hotels/:name')
    .get((req, res, next) => {
        console.log("Search request for " + req.params.name);
        next();
    }, getHotelByName)
  
    .delete((req, res, next) => {
        console.log("Not supported yet");
        //TODO
        next();
    }, (req, res) => 
        console.log("Some text")
    );

    app.route('/api/hotels/:name/images')
    .get((req, res, next) => {
        console.log("Searching images for " + req.params.name);
        next();
    }, getHotelImages);

    app.route('/api/hotels/:name/location')
    .get((req, res, next) => {
        next();
    }, getHotelLocation);

    app.route('/api/hotels/:name/payments')
    .get((req, res, next) => {
        next();
    }, getHotelPayments);

    //TODO add other endpoints
}

export default routes;