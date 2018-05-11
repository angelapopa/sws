import mongoose from 'mongoose';
import {BookingSchema} from './bookingModel';

const Schema = mongoose.Schema;

//mongoose subdocument for rooms
export const RoomSchema = new Schema({ 
    name : {type: String},
    description: {type: String},
    bookings: [BookingSchema],
    priceSpecification: [{
        description: {type: String},
        minPrice: {type: Number},
        maxPrice: {type: Number},
        priceCurrency: {type: String}
    }]
 });

//hiding mongo db fields
//from the json object that is returned
//by a GET request
RoomSchema.method('toJSON', function() {
    var room = this.toObject();
    delete room._id;
    delete room.__v;
    //availability has always schema.org value InStock, in the db, so it will not be displayed to the end user
    delete room.availability;
    //price specification is handled in it's own endpoint
    delete room.priceSpecification;
    return room;
  });