const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({

      message: "get request to products"


  });

});
router.post('/', (req, res, next) => {
    res.status(200).json({
  
        message: "post request to products"
  
    });
  
  });
   
  router.get('/:products', (req, res, next) => {
       const id = req.params.productsId;
       
     if (id === 'special' ){
       res.status(200).json({
           message: "spacial id here is discovered"
         
       });
     } else {
        res.status(200).json({
            message: "passed id"
        });
     }
    
  });
  module.exports = router;