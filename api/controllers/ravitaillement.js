const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Ravitaillement = require("../models/ravitaillement");
const Stationfertilization = require("../models/stationfertilization");


exports.ravitaillementgetall = async (req, res, next) => {
    const ravitaillement = await Ravitaillement.find({});
    res.status(200).json(ravitaillement);
}


 exports.newravitaillement = async (req, res, next) => {
    ravitaillement = new Ravitaillement(req.body);
    await ravitaillement.save();
    res.status(200).json(ravitaillement);
}
exports.getravitaillement = async (req, res, next) => {
    const ravitaillement = await Ravitaillement.findById(req.params.ravitaillementId);
    res.status(200).json(ravitaillement);
}

exports.updateravitaillement = async (req, res, next) => {
               
    const newravitaillement = req.body;
    const ravitaillement = await Ravitaillement.findByIdAndUpdate(req.params.ravitaillementId, newravitaillement);
    res.status(200).json('success');
}
exports.deleteravitaillement = async (req, res, next) => {
    const ravitaillement = await Ravitaillement.findOneAndDelete(req.params.ravitaillementId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'ravitaillement not found'});
            }  
            res.json({success: true, msg: 'ravitaillement deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const ravitaillement = await Ravitaillement.deleteMany();
    res.status(200).json('success');
}
exports.addravitaillementtostationfertilization=  async (req, res, next) => { 
    const ravitaillement = new Ravitaillement (req.body); 
    
    const findstationfertilization = await Stationfertilization.findById(req.params.stationfertilizationId);
    ravitaillement.stationfertilization= findstationfertilization;
    await ravitaillement.save();
    findstationfertilization.ravitaillements.push(ravitaillement);
    await findstationfertilization.save(); 
    
    res.status(201).json(findstationfertilization);
}
exports.getravitaillementbystationfertilization = async (req, res, next) => {
    const stationfertilization = await Stationfertilization.findById(req.params.stationfertilizationId).populate("ravitaillements")
    res.status(200).json(stationfertilization.ravitaillements);
}

