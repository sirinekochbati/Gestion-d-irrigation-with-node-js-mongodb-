const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Historiquebassin = require("../models/historiquebassin");
const Bassin = require("../models/bassin");


exports.historiquebassingetall = async (req, res, next) => {
    const historiquebassin = await Historiquebassin.find({});
    res.status(200).json(historiquebassin);
}


 exports.newhistoriquebassin = async (req, res, next) => {
    historiquebassin = new Historiquebassin(req.body);
    await historiquebassin.save();
    res.status(200).json(historiquebassin);
}
exports.gethistoriquebassin = async (req, res, next) => {
    const historiquebassin = await Historiquebassin.findById(req.params.historiquebassinId);
    res.status(200).json(historiquebassin);
}

exports.updatehistoriquebassin = async (req, res, next) => {
               
    const newhistoriquebassin = req.body;
    const historiquebassin = await Historiquebassin.findByIdAndUpdate(req.params.historiquebassinId, newhistoriquebassin);
    res.status(200).json('success');
}
exports.deletehistoriquebassin = async (req, res, next) => {
    const historiquebassin = await Historiquebassin.findOneAndDelete(req.params.historiquebassinId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'historiquebassin not found'});
            }  
            res.json({success: true, msg: 'historiquebassin deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const historiquebassin = await Historiquebassin.deleteMany();
    res.status(200).json('success');
}

exports.addhistoriquebassintobassin =  async (req, res, next) => { 
    const historiquebassin = new Historiquebassin (req.body); 
    
    const findbassin = await Bassin.findById(req.params.bassinId);
    historiquebassin.bassin= findbassin;
    await historiquebassin.save();
    findbassin.historiquebassins.push(historiquebassin);
    await findbassin.save(); 
    
    res.status(201).json(findbassin);
}
exports.gethistoriquebassinbybassin = async (req, res, next) => {
    const bassin = await Bassin.findById(req.params.bassinId).populate("historiquebassins")
    res.status(200).json(bassin.historiquebassins);
}
exports.getlasthistoriquebassinbybassin = async (req, res, next) => {
    bassin = await Bassin.findById(req.params.bassinId).populate("historiquebassins");
   var last ;
   if(bassin.historiquebassins.pop()!=undefined){

         last= bassin.historiquebassins.pop();  
   }
   else if(bassin.historiquebassins.pop()==undefined){last={value:0,date:null}}
   res.status(200).json(last);

}


