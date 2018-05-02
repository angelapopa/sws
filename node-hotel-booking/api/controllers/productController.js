import mongoose from 'mongoose';
import { ProductSchema } from '../models/productModel';

const Product = mongoose.model('Product', ProductSchema);

export const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};

export const getProducts = (req, res) => {
    Product.find({}, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};

export const getProductWithID = (req, res) => {
    Product.findById(req.params.productId, (err, product) =>{
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};