import mongoose from 'mongoose';
import {BookingSchema} from './bookingModel';
import {LinkSchema} from './linkModel'

const Schema = mongoose.Schema;

//mongoose subdocument for rooms
export const RoomSchema = new Schema({
    name : {type: String},
    description: {type: String},
    bookings: [BookingSchema],
    priceSpecification: [{ //TODO consider moving this in its own schema
        description: {type: String},
        minPrice: {type: Number},
        maxPrice: {type: Number},
        priceCurrency: {type: String}
    }],
    links: [LinkSchema]
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
RoomSchema.method('toJSON', function() {
    var room = this.toObject();

    room.priceSpecification["@type"] = "PriceSpecification"

    delete room.__v;
    //in this dataset, availability has always schema.org value InStock, so it will not be displayed to the end user
    delete room.availability;
    //price specification is handled in it's own endpoint
    delete room.priceSpecification;
    return room;
  });