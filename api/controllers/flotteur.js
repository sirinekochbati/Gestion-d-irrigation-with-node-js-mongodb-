const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Flotteur = require("../models/flotteur");
const Bassin = require("../models/bassin");


exports.flotteurgetall = async (req, res, next) => {
    const flotteur = await Flotteur.find({});
    res.status(200).json(flotteur);
}


 exports.newflotteur = async (req, res, next) => {
    flotteur = new Flotteur(req.body);
    await flotteur.save();
    res.status(200).json(flotteur);
}
exports.getflotteur = async (req, res, next) => {
    const flotteur = await Flotteur.findById(req.params.flotteurId);
    res.status(200).json(flotteur);
}

exports.updateflotteur = async (req, res, next) => {
               
    const newflotteur = req.body;
    const flotteur = await Flotteur.findByIdAndUpdate(req.params.flotteurId, newflotteur);
    res.status(200).json('success');
}
exports.deleteflotteur = async (req, res, next) => {
    const flotteur = await Flotteur.findOneAndDelete(req.params.flotteurId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'flotteur not found'});
            }  
            res.json({success: true, msg: 'flotteur deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const flotteur = await Flotteur.deleteMany();
    res.status(200).json('success');
}
exports.addbassintoflotteur =  async (req, res, next) => { 
    const newbassin = new Bassin (req.body); 
    const findflotteur = await Flotteur.findById(req.params.flotteurId);
    newbassin.flotteur = findflotteur;
    await newbassin.save();
    findflotteur.bassins.push(newbassin);
    await findflotteur.save();
    res.status(201).json((findflotteur));
}
exports.getbassinbyflotteur = async (req, res, next) => {
    const flotteur = await Flotteur.findById(req.params.flotteurId).populate("bassins")
    res.status(200).json(flotteur.bassins);
}


