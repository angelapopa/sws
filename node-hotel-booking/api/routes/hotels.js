import { 
    addNewHotel,
    getHotels,
    getHotelByName,
    getHotelImages,
    getHotelLocation,
    getHotelsAtLocation
 } from "../controllers/hotelController";

const routes = (app) => {

    app.route('/api/hotels')
    //GET endpoint
    .get((req, res, next) => {
        next(); //continues with next function
    }, getHotels)
    //POST endpoint
    .post(addNewHotel);

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

    app.route('/api/locations/:locationName/hotels')
    .get((req, res, next) => {
        next();
    }, getHotelsAtLocation);
    //TODO add other endpoints
}

export default routes;