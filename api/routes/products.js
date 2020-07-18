const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require ('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });

});
router.post('/', (req, res, next) => {
  
    const product= new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price

    });
    product
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });

});
 router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id == 'special'){
    res.status(200).json({
        message: 'you discovered the special id',
        id :id 
    });
}
    else { 
        res.status(200).json({
            message: 'you passed an ID'
        });
    }
});
router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'updateproduct'
    });

});
router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'deleted product'
    });

});


module.exports=router; 