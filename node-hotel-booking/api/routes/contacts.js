import { 
    getHotelContacts,
    addNewHotelContact
 } from "../controllers/contactController";

const contactRoutes = (app) => {

    app.route('/api/hotels/:hotelId/contacts')
    .get((req, res, next) => {
        next();
    }, getHotelContacts)
    .post(addNewHotelContact);
}

export default contactRoutes;