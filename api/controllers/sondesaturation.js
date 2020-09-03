const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Sondesaturation = require("../models/sondesaturation");
const ParcelleElementaire = require("../models/parcelleElementaire");
const { find } = require('../models/parcelleElementaire');

exports.sondesaturationgetall = async (req, res, next) => {
    const sondesaturation = await Sondesaturation.find({});
    res.status(200).json(sondesaturation);
}


 exports.newsondesaturation= async (req, res, next) => {
    sondesaturation = new Sondesaturation(req.body);
    await sondesaturation.save();
    res.status(200).json(sondesaturation);
}
exports.getsondesaturation = async (req, res, next) => {
    const sondesaturation = await Sondesaturation.findById(req.params.sondesaturationId);
    res.status(200).json(sondesaturation);
}

exports.updatesondesaturation = async (req, res, next) => {
               
    const newsondesaturation = req.body;
    const sondesaturation = await Sondesaturation.RouterfindByIdAndUpdate(req.params.sondesaturationId, newsondesaturation);
    res.status(200).json('success');
}
exports.deletesondesaturation = async (req, res, next) => {
    const sondesaturation = await Sondesaturation.findOneAndDelete(req.params.sondesaturationId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'sondesaturation not found'});
            }  
            res.json({success: true, msg: 'sondesaturation deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const sondesaturation = await Sondesaturation.deleteMany();
    res.status(200).json('success');
}
exports.addparcelleElementairetosondesaturation =  async (req, res, next) => { 
    const newparcelleElementaire = new ParcelleElementaire (req.body); 
    console.log("1",newparcelleElementaire);
    const findsondesaturation = await  Sondesaturation.findById(req.params.sondesaturationId);
    console.log("12",findsondesaturation);
    newparcelleElementaire.sondesaturation = findsondesaturation;
    await newparcelleElementaire.save();
    console.log("123",newparcelleElementaire);
    findsondesaturation.parcelleElementaire= newparcelleElementaire._id; 
    await findsondesaturation.save();
    console.log("1234",findsondesaturation);
    res.status(201).json((findsondesaturation)); 
}
exports.getparcelleElementairebysondesaturation = async (req, res, next) => {
    const sondesaturation = await Sondesaturation.findById(req.params.sondesaturationId).populate("parcelleElementaire")
    res.status(200).json(sondesaturation.parcelleElementaire);
}
