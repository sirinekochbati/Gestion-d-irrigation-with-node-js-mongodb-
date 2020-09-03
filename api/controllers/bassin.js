const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Bassin = require("../models/bassin");
const Sondage = require ("../models/sondage");
const Moteur = require ("../models/moteur");

exports.bassingetall = async (req, res, next) => {
    const bassin = await Bassin.find({});
    res.status(200).json(bassin);
}


 exports.newbassin = async (req, res, next) => {
    bassin = new Bassin(req.body);
    await bassin.save();
    res.status(200).json(bassin);
}
exports.getbassin = async (req, res, next) => {
    const bassin = await Bassin.findById(req.params.bassinId);
    res.status(200).json(bassin);
}

exports.updatebassin = async (req, res, next) => {
               
    const newbassin = req.body;
    const bassin = await Bassin.findByIdAndUpdate(req.params.bassinId, newbassin);
    res.status(200).json('success');
}
exports.deletebassin = async (req, res, next) => {
    const bassin = await Bassin.findOneAndDelete(req.params.bassinId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'bassin not found'});
            }  
            res.json({success: true, msg: 'bassin deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const bassin = await Bassin.deleteMany();
    res.status(200).json('success');
}

exports.addsondagetobassin =  async (req, res, next) => { 
    const sondage = new Sondage (req.body); 
    
    const findbassin = await Bassin.findById(req.params.bassinId);
    
    sondage.bassin= findbassin;
    await sondage.save();
    findbassin.sondages.push(sondage);
    await findbassin.save();
    
    res.status(201).json((findbassin));
}

exports.addmoteurtobassin =  async (req, res, next) => { 
    const moteur = new Moteur (req.body); 
    
    const findbassin = await Bassin.findById(req.params.bassinId);
    moteur.bassin= findbassin;
    await moteur.save();
    findbassin.moteurs.push(moteur);
    await findbassin.save(); 
    
    res.status(201).json(findbassin);
}
exports.getsondagebybassin = async (req, res, next) => {
    const bassin = await Bassin.findById(req.params.bassinId).populate("sondages")
    res.status(200).json(bassin.sondages);
}

exports.getmoteurbybassin = async (req, res, next) => {
    const bassin = await Bassin.findById(req.params.bassinId).populate("moteurs")
    res.status(200).json(bassin.moteurs);
}