const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Reseautuyauterie = require("../models/reseautuyauterie");

exports.reseautuyauteriegetall = async (req, res, next) => {
    const reseautuyauterie = await Reseautuyauterie.find({});
    res.status(200).json(reseautuyauterie);
}


 exports.newreseautuyauterie = async (req, res, next) => {
    reseautuyauterie = new Reseautuyauterie(req.body);
    await reseautuyauterie.save();
    res.status(200).json(reseautuyauterie);
}
exports.getreseautuyauterie = async (req, res, next) => {
    const reseautuyauterie = await Reseautuyauterie.findById(req.params.reseautuyauterieId);
    res.status(200).json(reseautuyauterie);
}

exports.updatereseautuyauterie = async (req, res, next) => {
               
    const newreseautuyauterie = req.body;
    const reseautuyauterie = await Reseautuyauterie.RouterfindByIdAndUpdate(req.params.reseautuyauterieId, newreseautuyauterie);
    res.status(200).json('success');
}
exports.deletereseautuyauterie = async (req, res, next) => {
    const reseautuyauterie = await Reseautuyauterie.findOneAndDelete(req.params.reseautuyauterieId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'reseautuyauterie not found'});
            }  
            res.json({success: true, msg: 'reseautuyauterie deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const reseautuyauterie = await Reseautuyauterie.deleteMany();
    res.status(200).json('success');
}