const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Electrovanne = require("../models/electrovanne");
const ParcelleElementaire = require("../models/parcelleElementaire");

exports.electrovannegetall = async (req, res, next) => {
    const electrovanne = await Electrovanne.find({});
    res.status(200).json(electrovanne);
}


 exports.newelectrovanne = async (req, res, next) => {
    electrovanne = new Electrovanne(req.body);
    await electrovanne.save();
    res.status(200).json(electrovanne);
}
exports.getelectrovanne = async (req, res, next) => {
    const electrovanne = await Electrovanne.findById(req.params.electrovanneId);
    res.status(200).json(electrovanne);
}

exports.updateelectrovanne = async (req, res, next) => {
               
    const newelectrovanne = req.body;
    const electrovanne = await Electrovanne.findByIdAndUpdate(req.params.electrovanneId, newelectrovanne);
    res.status(200).json('success');
}
exports.deleteelectrovanne = async (req, res, next) => {
    const electrovanne = await Electrovanne.findOneAndDelete(req.params.electrovanneId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'electrovanne not found'});
            }  
            res.json({success: true, msg: 'electrovanne deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const electrovanne = await Electrovanne.deleteMany();
    res.status(200).json('success');
}

exports.addparcelleElementairetoelectrovanne =  async (req, res, next) => { 
    const newparcelleElementaire = new ParcelleElementaire (req.body); 
    console.log("1",newparcelleElementaire);
    const findelectrovanne = await  Electrovanne.findById(req.params.electrovanneId);
    
    newparcelleElementaire.electrovanne = findelectrovanne;
    await newparcelleElementaire.save();
    console.log("123",newparcelleElementaire);
    findelectrovanne.parcelleElementaire= newparcelleElementaire._id; 
    await findelectrovanne.save();
    console.log("1234",findelectrovanne);
    res.status(201).json((findelectrovanne)); 
}
exports.getparcelleElementairebyelectrovanne = async (req, res, next) => {
    const electrovanne = await Electrovanne.findById(req.params.electrovanneId).populate("parcelleElementaire")
    res.status(200).json(electrovanne.parcelleElementaire);
}
