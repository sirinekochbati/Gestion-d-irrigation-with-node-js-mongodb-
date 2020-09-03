const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Pressostat = require("../models/pressostat");

exports.pressostatgetall = async (req, res, next) => {
    const pressostat = await Pressostat.find({});
    res.status(200).json(pressostat);
}


 exports.newpressostat = async (req, res, next) => {
    pressostat = new Pressostat(req.body);
    await pressostat.save();
    res.status(200).json(pressostat);
}
exports.getpressostat = async (req, res, next) => {
    const pressostat = await Pressostat.findById(req.params.pressostatId);
    res.status(200).json(pressostat);
}

exports.updatepressostat = async (req, res, next) => {
               
    const newpressostat = req.body;
    const pressostat = await Pressostat.RouterfindByIdAndUpdate(req.params.pressostatId, newpressostat);
    res.status(200).json('success');
}
exports.deletepressostat = async (req, res, next) => {
    const pressostat = await Pressostat.findOneAndDelete(req.params.pressostatId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'pressostat not found'});
            }  
            res.json({success: true, msg: 'pressostat deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const pressostat = await Pressostat.deleteMany();
    res.status(200).json('success');
}