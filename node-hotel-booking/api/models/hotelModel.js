import mongoose from 'mongoose';

export const Schema = mongoose.Schema;
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
    }
    //TODO add more fields
});