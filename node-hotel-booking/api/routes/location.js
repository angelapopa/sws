import { 
    getAllHotelsAtLocation,
    getHotelsAtLocationWithPagination
} from "../controllers/locationController";

const locationRoutes = (app) => {

    //GET all hotels with pagination
    app.route('/api/locations/:locationName/hotels/:page([0-9]+)')
    .get((req, res, next) => {
        next();
    }, getHotelsAtLocationWithPagination);

    //GET all hotels without pagination
    app.route('/api/locations/:locationName/hotels')
    .get((req, res, next) => {
        next();
    }, getAllHotelsAtLocation);
}

export default locationRoutes;