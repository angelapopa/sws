import mongoose from 'mongoose';

export const Schema = mongoose.Schema;

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
        type:String,
        required:'Enter the pricerange for rooms'
    },
    image: [{
        url: { type:String},
        caption : { type: String}
    }]
    //TODO add more fields (if needed)
});

//hiding mongod db fields _id and _v 
//from the json object that is returned
//by a GET request
HotelSchema.method('toJSON', function() {
    var hotel = this.toObject();
    delete hotel._id;
    delete hotel.__v;
    return hotel;
  });