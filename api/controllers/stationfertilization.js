const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Stationfertilization = require("../models/stationfertilization");
const ParcelleElementaire = require("../models/parcelleElementaire");


exports.stationfertilizationgetall = async (req, res, next) => {
    const stationfertilization = await Stationfertilization.find({});
    res.status(200).json(stationfertilization);
}


 exports.newstationfertilization= async (req, res, next) => {
    stationfertilization = new Stationfertilization(req.body);
    await stationfertilization.save();
    res.status(200).json(stationfertilization);
}
exports.getstationfertilization = async (req, res, next) => {
    const stationfertilization = await Stationfertilization.findById(req.params.stationfertilizationId);
    res.status(200).json(stationfertilization);
}

exports.updatestationfertilization = async (req, res, next) => {
               
    const newstationfertilization = req.body;
    const stationfertilization = await Stationfertilization.RouterfindByIdAndUpdate(req.params.stationfertilizationId, newstationfertilization);
    res.status(200).json('success');
}
exports.deletestationfertilization = async (req, res, next) => {
    const stationfertilization = await Stationfertilization.findOneAndDelete(req.params.stationfertilizationId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'stationfertilization not found'});
            }  
            res.json({success: true, msg: 'stationfertilization deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const stationfertilization = await Stationfertilization.deleteMany();
    res.status(200).json('success');
}

exports.addparcelleElementairetostationfertilization =  async (req, res, next) => { 
    const newparcelleElementaire = new ParcelleElementaire (req.body); 
    console.log(newparcelleElementaire); 
    const findstationfertilization = await  Stationfertilization.findById(req.params.stationfertilizationId);
    console.log(findstationfertilization);
    newparcelleElementaire.stationfertilization = findstationfertilization;
    await newparcelleElementaire.save();
    findstationfertilization.parcelleElementaires.push(newparcelleElementaire);
    await findstationfertilization.save();
    res.status(201).json((findstationfertilization));
}
exports.getparcelleElementairebystationfertilization = async (req, res, next) => {
    const stationfertilization = await Stationfertilization.findById(req.params.stationfertilizationId).populate("parcelleElementaires")
    res.status(200).json(stationfertilization.parcelleElementaires);
}

