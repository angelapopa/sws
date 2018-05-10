import { 
    addNewHotel,
    getHotels,
    getHotelByName,
 } from "../controllers/hotelController";

const routes = (app) => {

    app.route('/hotels')
    //GET endpoint
    .get((req, res, next) => {
        next(); //continues with next function
    }, getHotels)
    //POST endpoint
    .post(addNewHotel);

    app.route('/hotels/:name')
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

    //TODO add other endpoints
}

export default routes;