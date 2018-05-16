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
    links: [LinkSchema], //subdocument for HATEOS links

    //TODO add more fields (if needed)
});

//hiding mongo db fields _id and _v 
//from the json object that is returned
//by a GET request
HotelSchema.method('toJSON', function() {
    var hotel = this.toObject();
    delete hotel._id;
    delete hotel.__v;
    return hotel;
});