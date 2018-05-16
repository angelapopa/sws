import mongoose from 'mongoose';
import { HotelSchema } from '../models/hotelModel';
import { ContactSchema } from '../models/contactModel';
import { LinkSchema} from '../models/linkModel';

const Hotel = mongoose.model('Hotel', HotelSchema);
const Link = mongoose.model('Link', LinkSchema);

export const addNewHotel = (req, res) => {
    let newHotel = new Hotel(req.body);

    //add links to hotel at creation time
    const root_url = "http://localhost:3000/api/hotels";
    let formattedHotelName0 = newHotel.name.replace(/\s+/g, "%20");
    let formattedHotelName = formattedHotelName0.replace(/\//g, "%2F");
    let hotelUrlNamePart = root_url + "/" + formattedHotelName;

    newHotel.links = [];

    var newSelfLink0 = new Link ({
        href: hotelUrlNamePart,
        rel: "self",
        type: "GET"
    });

    newHotel.links.push(newSelfLink0);

    var newSelfLink = new Link ({
        href: hotelUrlNamePart +"/images",
        rel: "images",
        type: "GET"
    });

    newHotel.links.push(newSelfLink);

    var newSelfLink2 = new Link ({
        href: hotelUrlNamePart +"/payments",
        rel: "payments",
        type: "GET"
    });

    newHotel.links.push(newSelfLink2);

    var newSelfLink3 = new Link ({
        href: hotelUrlNamePart +"/location",
        rel: "location",
        type: "GET"
     });

    newHotel.links.push(newSelfLink3);

    var newSelfLink4 = new Link ({
        href: hotelUrlNamePart +"/rooms",
        rel: "rooms",
        type: "GET"
     });

    newHotel.links.push(newSelfLink4);

    var newSelfLink6 = new Link ({
        href: hotelUrlNamePart +"/contacts",
        rel: "contacts",
        type: "GET"
     });

    newHotel.links.push(newSelfLink6);

    newHotel.save((err, hotel) => {
        res.status(201).json(hotel);
    });
};

export const getAllHotels = (req, res) => {
    Hotel.find({})
    .select(['name', 'url', 'description', 'priceRange', 'links'])
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
         .select(['name', 'url', 'description', 'priceRange', 'links'])
         .sort({'name': 'ascending'})
         .exec(function(err, hotels) {
            res.json(hotels);
        });
};

export const getHotelByName = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName})
    .select(['name', 'url', 'description', 'priceRange', 'links'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const getHotelImages = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName}, (err, hotel) =>{
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            console.log("Found "+ hotel.image.length + " images.");
            res.status(200).json(hotel.image);
        }
    });
};

export const getHotelLocation = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({name:hotelName})
    .select(['address', 'geo'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const getHotelPayments = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({"name":hotelName})
    .select(['paymentAccepted', 'currenciesAccepted'])
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
        if (hotel != null){
            res.status(200).json(hotel);
        }
    });
};

export const deleteHotel = (req, res) => {
    let hotelName = req.params.name;
    Hotel.findOne({"name":hotelName})
    .exec(function (err, hotel){
        if (hotel == null){
            console.log("The Hotel name "+ hotelName + " was not found!");
            res.status(404).send("The Hotel name "+ hotelName + " was not found!");
        }
    });
    Hotel.deleteOne({"name":hotelName})
    .exec(function (err){
        res.status(204).send("Deleted");
    });
};

export const updateHotel = (req, res) => {
    let hotelName = req.params.name;

    Hotel.findOneAndUpdate({"name":hotelName}, req.body, function(err, uhotel){
        if (err) return handleError(err);
        res.status(200).json(uhotel);
    });
};

//TODO add some more actions for hotel