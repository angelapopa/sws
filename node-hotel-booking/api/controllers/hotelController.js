import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { ContactSchema } from '../models/contactModel';
import { LinkSchema} from '../models/linkModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Link = mongoose.model('Link', LinkSchema);

export const addNewHotel = (req, res) => {
    var body = req.body;
    let newHotel = new Hotel(req.body);
    var respond = function(err, results){
        if (err){
            res.send(JSON.stringify(err));
        }else{
            res.send(JSON.stringify(results));
      }

 };
 res.set('content-type','application/json');
    switch (body.action){

       case "getHotel":

           Hotel.find({},respond);
           break;
       case "addNewHotel":
          Hotel.create(HotelSchema, respond); 
          
          break;
       case "ratingHotel": 
          Hotel.update({name: body.name}, { 
              $set: { rating: body.rating}},
              function (err, num) {
              respond(err, {success: num+"record updated"}); 
          });
          break;
       default:
           res.send('does not get the hotel');
    
    };
    //add links to hotel at creation time
    const root_url = "/api/hotels";
    let hotelUrlPart = root_url + "/" + newHotel.id;

    newHotel.links = [];

    var newSelfLink0 = new Link ({
        href: hotelUrlPart,
        rel: "self",
        type: "GET"
    });

    newHotel.links.push(newSelfLink0);

    var newSelfLink = new Link ({
        href: hotelUrlPart +"/images",
        rel: "images",
        type: "GET"
    });

    newHotel.links.push(newSelfLink);

    var newSelfLink2 = new Link ({
        href: hotelUrlPart +"/payments",
        rel: "payments",
        type: "GET"
    });

    newHotel.links.push(newSelfLink2);

    var newSelfLink3 = new Link ({
        href: hotelUrlPart +"/location",
        rel: "location",
        type: "GET"
     });

    newHotel.links.push(newSelfLink3);

    var newSelfLink4 = new Link ({
        href: hotelUrlPart +"/rooms",
        rel: "rooms",
        type: "GET"
     });

    newHotel.links.push(newSelfLink4);

    var newSelfLink6 = new Link ({
        href: hotelUrlPart +"/contacts",
        rel: "contacts",
        type: "GET"
     });

    newHotel.links.push(newSelfLink6);

    var newSelfLink7 = new Link ({
        href: hotelUrlPart +"/facilities",
        rel: "facilities",
        type: "GET"
     });

    newHotel.links.push(newSelfLink7);

    newHotel.save((err, hotel) => {
        res.status(201).json(hotel);
    });
};

export const getAllHotels = (req, res) => {
    Hotel.find({})
    .select(['id', 'name', 'url', 'description', 'priceRange', 'links'])
    .sort({'name': 'ascending'})
    .exec(function (err, hotels){
        res.send(hotels);
    });
};

//TODO add fields like totalNumberOfPages, firstPage, lastPage etc.
//by using some node js package dedicated for pagination
export const getHotelsWithPagination = (req, res) => {
    var perPage = 10
    var page = req.params.page || 1
    Hotel.find({})
         .skip((perPage * page) - perPage)
         .limit(perPage)
         .select(['id', 'name', 'url', 'description', 'priceRange', 'links'])
         .sort({'name': 'ascending'})
         .exec(function(err, hotels) {
            res.json(hotels);
        });
};

export const getHotelById = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId)
    .select(['id', 'name', 'url', 'description', 'priceRange', 'links'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).end("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const getHotelImages = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            console.log("Found "+ hotel.image.length + " images.");
            res.status(200).json(hotel.image);
        }
    });
};

export const getHotelLocation = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId)
    .select(['address.name','address.streetAddress', 'address.addressLocality','address.postalCode','address.addressCountry', 'geo'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const getHotelPayments = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId)
    .select(['paymentAccepted', 'currenciesAccepted'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const deleteHotel = (req, res) => {
    let hotelId = req.params.hotelId;
    Hotel.findById(hotelId)
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel id "+ hotelId + " was not found!");
            res.status(404).send("The Hotel id "+ hotelId + " was not found!");
        }
    });
    Hotel.deleteOne({"_id":hotelId})
    .exec(function (err){
        res.status(204).send("Deleted");
    });
};

export const updateHotel = (req, res) => {
    let hotelId = req.params.hotelId;

    Hotel.findOneAndUpdate({"_id": hotelId}, req.body, function(err, uhotel){
        if (err) return handleError(err);
        res.status(200).json(uhotel);
    });
};

//TODO add some more actions for hotel