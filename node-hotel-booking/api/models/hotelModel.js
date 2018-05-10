import mongoose from 'mongoose';

export const Schema = mongoose.Schema;

//mongoose subdocument for rooms
export const roomSchema = new Schema({ 
    name : {type: String},
    description: {type: String}
 });

//fields used for POST
export const HotelSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a Hotel name'
    },
    description: {
        type: String,
        required: 'Enter a description for the hotel'
    },
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
    makesOffer: [roomSchema] //mongoose child subdocument

    //TODO add more fields (if needed)
});

//hiding mongo db fields
//from the json object that is returned
//by a GET request
roomSchema.method('toJSON', function() {
    var room = this.toObject();
    delete room._id;
    delete room.__v;
    //availability has always schema.org value InStock, in the db, so it will not be displayed to the end user
    delete room.availability;
    //price specification is handled in it's own endpoint
    delete room.priceSpecification;
    return room;
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