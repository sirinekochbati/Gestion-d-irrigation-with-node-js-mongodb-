const express = require ('express');
const app = express ();
const productRoutes = require('./api/routes/products');
app.use ((req, res, next) =>{
    res.status(200).json({
        message: 'IT WORKS!'
    });
}) ;
module.exports= app ;