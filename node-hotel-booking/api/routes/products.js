import { 
    addNewProduct,
    getProducts,
    getProductWithID,
 } from "../controllers/productController";

const routes = (app) => {
    app.route('/products')
    .get((req, res, next) => {
        next(); //continues with next function
    }, getProducts)
    
    //POST endpoint
    .post(addNewProduct);

    app.route('/products/:productId')
    //get specific product
    .get(getProductWithID);
}

export default routes;