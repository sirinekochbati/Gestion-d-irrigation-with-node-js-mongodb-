const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Parcelle = require("../models/parcelle");
const ParcelleElementaire = require("../models/parcelleElementaire");
const Reseautuyauterie = require("../models/reseautuyauterie");

exports.parcellegetall = async (req, res, next) => {
    const parcelle = await Parcelle.find({});
    res.status(200).json(parcelle);
}


 exports.newparcelle = async (req, res, next) => {
    parcelle = new Parcelle(req.body);
    await parcelle.save();
    res.status(200).json(parcelle);
}
exports.getparcelle = async (req, res, next) => {
    const parcelle = await Parcelle.findById(req.params.parcelleId);
    res.status(200).json(parcelle);
}

exports.updateparcelle = async (req, res, next) => {
               
    const newparcelle = req.body;
    const parcelle = await Parcelle.findByIdAndUpdate(req.params.parcelleId, newparcelle);
    res.status(200).json('success');
}
exports.deleteparcelle = async (req, res, next) => {
    const parcelle = await Parcelle.findOneAndDelete(req.params.parcelleId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'parcelle not found'});
            }  
            res.json({success: true, msg: 'parcelle deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const parcelle = await Parcelle.deleteMany();
    res.status(200).json('success');
}
exports.addparcelleElementairetoparcelle =  async (req, res, next) => { 
    const newparcelleElementaire = new ParcelleElementaire (req.body); 
    const findparcelle = await  Parcelle.findById(req.params.parcelleId);
    newparcelleElementaire.parcelle = findparcelle;
    await newparcelleElementaire.save();
    findparcelle.parcelleElementaires.push(newparcelleElementaire);
    await findparcelle.save();
    res.status(201).json((findparcelle));
}
exports.getparcelleElementairebyparcelle = async (req, res, next) => {
    const parcelle = await Parcelle.findById(req.params.parcelleId).populate("parcelleElementaires")
    res.status(200).json(parcelle.parcelleElementaires);
}

exports.addreseautuyauterietoparcelle =  async (req, res, next) => { 
    const newreseautuyauterie = new Reseautuyauterie (req.body); 
    const findparcelle = await  Parcelle.findById(req.params.parcelleId);
    newreseautuyauterie.parcelle = findparcelle;
    await newreseautuyauterie.save();
    findparcelle.reseautuyauteries.push(newreseautuyauterie);
    await findparcelle.save();
    res.status(201).json((findparcelle));
}
exports.getreseautuyauteriebyparcelle = async (req, res, next) => {
    const parcelle = await Parcelle.findById(req.params.parcelleId).populate("reseautuyauteries")
    res.status(200).json(parcelle.reseautuyauteries);
}
