const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Moteur = require("../models/moteur");

exports.moteurgetall = async (req, res, next) => {
    const moteur = await Moteur.find({});
    res.status(200).json(moteur);
}


 exports.newmoteur = async (req, res, next) => {
    moteur = new Moteur(req.body);
    await moteur.save();
    res.status(200).json(moteur);
}
exports.getmoteur = async (req, res, next) => {
    const moteur = await Moteur.findById(req.params.moteurId);
    res.status(200).json(moteur);
}

exports.updatemoteur = async (req, res, next) => {
               
    const newmoteur = req.body;
    const moteur = await Moteur.findByIdAndUpdate(req.params.moteurId, newmoteur);
    res.status(200).json('success');
}
exports.deletemoteur = async (req, res, next) => {
    const moteur = await Moteur.findOneAndDelete(req.params.moteurId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'moteur not found'});
            }  
            res.json({success: true, msg: 'moteur deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const moteur = await Moteur.deleteMany();
    res.status(200).json('success');
}