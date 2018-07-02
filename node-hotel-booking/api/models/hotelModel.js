import mongoose from 'mongoose';
import {ContactSchema} from './contactModel';
import {RoomSchema} from './roomModel';
import {LinkSchema} from './linkModel';
import {FacilitySchema} from './facilityModel';

const Schema = mongoose.Schema;

//fields used for POST
export const HotelSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a Hotel name'
    },
    url: {
        type: String,
        required: 'Enter a Hotel name'
    },
    description: {
        type: String,
        required: 'Enter a description for the hotel'
    },
    contacts: [ContactSchema],
    currenciesAccepted: {
        type: String,
        required: 'Enter the accepted currency'
    },
    priceRange: {
        type: String,
        required: 'Enter the pricerange for rooms'
    },
    image: [{
        url: { type: String},
        caption : { type: String}
    }],
    makesOffer: [RoomSchema], //mongoose child subdocument
    facilities: [FacilitySchema],
    links: [LinkSchema], //subdocument for HATEOAS links

    //TODO add more fields (if needed)
});

//wrapper for a json object (in case of a GET Request)
//hiding mongo db fields _id and __v 
//adding annotations to the hotel json object
HotelSchema.method('toJSON', function() {
    var hotel = this.toObject();

    hotel["@id"] = "/api/hotels/" + hotel._id;
    
    //does not work
    //hotel["@context"] = "/api/vocab";
    //hotel["@type"] = "http://schema.org/Hotel";

    //works
    hotel["@context"] = "http://schema.org/";
    hotel["@type"] = "Hotel";

    //TODO: handle links somehow different
    delete hotel.links;

    delete hotel._id; //_id was assigned previously to the new field @id
    delete hotel.__v; //version is not needed now
    return hotel;
});
