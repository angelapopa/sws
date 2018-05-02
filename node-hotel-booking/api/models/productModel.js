import mongoose from 'mongoose';

export const Schema = mongoose.Schema;
export const ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a product name'
    },
    label: {
        type: String,
        required: 'Enter a label'
    },
    price: {
        type: Number,
        required: 'Enter an price'
    },
    created_date: {
        type: Date,
        default: Date.now    //default creates values automatically
    }

});