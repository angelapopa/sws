import { 
    addNewHotel,
    getHotels,
 } from "../controllers/hotelController";

const routes = (app) => {
    //GET endpoint
    app.route('/hotels')
    .get((req, res, next) => {
        next(); //continues with next function
    }, getHotels)
    
    //POST endpoint
    .post(addNewHotel);
    
    //TODO add other endpoints
}

export default routes;