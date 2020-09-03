const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Sondage = require("../models/sondage");

exports.sondagegetall = async (req, res, next) => {
    const sondage = await Sondage.find({});
    res.status(200).json(sondage);
}


 exports.newsondage= async (req, res, next) => {
    sondage = new Sondage(req.body);
    await sondage.save();
    res.status(200).json(sondage);
}
exports.getsondage = async (req, res, next) => {
    const sondage = await Sondage.findById(req.params.sondageId);
    res.status(200).json(sondage);
}

exports.updatesondage = async (req, res, next) => {
               
    const newsondage = req.body;
    const sondage = await Sondage.RouterfindByIdAndUpdate(req.params.sondageId, newsondage);
    res.status(200).json('success');
}
exports.deletesondage = async (req, res, next) => {
    const sondage = await Sondage.findOneAndDelete(req.params.sondageId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'sondage not found'});
            }  
            res.json({success: true, msg: 'sondage deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const sondage = await Sondage.deleteMany();
    res.status(200).json('success');
}
