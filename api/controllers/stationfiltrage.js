const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Stationfiltrage = require("../models/stationfiltrage");
const Bassin = require("../models/bassin");

exports.stationfiltragegetall = async (req, res, next) => {
    const stationfiltrage = await Stationfiltrage.find({});
    res.status(200).json(stationfiltrage);
}


 exports.newstationfiltrage= async (req, res, next) => {
    stationfiltrage = new Stationfiltrage(req.body);
    await stationfiltrage.save();
    res.status(200).json(stationfiltrage);
}
exports.getstationfiltrage = async (req, res, next) => {
    const stationfiltrage = await Stationfiltrage.findById(req.params.stationfiltrageId);
    res.status(200).json(stationfiltrage);
}

exports.updatestationfiltrage = async (req, res, next) => {
               
    const newstationfiltrage = req.body;
    const stationfiltrage = await Stationfiltrage.RouterfindByIdAndUpdate(req.params.stationfiltrageId, newstationfiltrage);
    res.status(200).json('success');
}
exports.deletestationfiltrage = async (req, res, next) => {
    const stationfiltrage = await Stationfiltrage.findOneAndDelete(req.params.stationfiltrageId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'stationfiltrage not found'});
            }  
            res.json({success: true, msg: 'stationfiltrage deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const stationfiltrage = await Stationfiltrage.deleteMany();
    res.status(200).json('success');
}
exports.addbassintostationfiltrage =  async (req, res, next) => { 
    const newbassin = new Bassin (req.body); 
    const findstationfiltrage = await Stationfiltrage.findById(req.params.stationfiltrageId);
    newbassin.stationfiltrage = findstationfiltrage;
    await newbassin.save();
    findstationfiltrage.bassins.push(newbassin);
    await findstationfiltrage.save();
    res.status(201).json((findstationfiltrage));
}
exports.getbassinbystationfiltrage = async (req, res, next) => {
    const stationfiltrage = await Stationfiltrage.findById(req.params.stationfiltrageId).populate("bassins")
    res.status(200).json(stationfiltrage.bassins);
}