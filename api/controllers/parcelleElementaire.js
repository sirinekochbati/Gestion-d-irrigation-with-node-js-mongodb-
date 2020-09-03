
const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const path = require('path');
const multer = require('multer');
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const ParcelleElementaire = require ("../models/parcelleElementaire");
const Sondesaturation = require ("../models/sondesaturation");
const User = require("../models/user");
const parcelleElementaire = require('../models/parcelleElementaire');
const Electrovanne = require('../models/electrovanne');
const user = require("../models/user");





exports.parcelleElementairegetall = async (req, res, next) => {
    const parcelleElementaire = await ParcelleElementaire.find({});
    res.status(200).json(parcelleElementaire);
}


 exports.newparcelleElementaire = async (req, res, next) => {
    parcelleElementaire = new ParcelleElementaire (req.body);
    await parcelleElementaire.save();
    res.status(200).json(parcelleElementaire);
}
exports.getparcelleElementaire = async (req, res, next) => {
    const parcelleElementaire = await ParcelleElementaire.findById(req.params.parcelleElementaireId);
    res.status(200).json(parcelleElementaire);
}

exports.updateparcelleElementaire = async (req, res, next) => {
               
    const newparcelleElementaire = req.body;
    const parcelleElementaire = await ParcelleElementaire.findByIdAndUpdate(req.params.parcelleElementaireId, newparcelleElementaire);
    res.status(200).json('success');
}
exports.deleteparcelleElementaire = async (req, res, next) => {
    const parcelleElementaire = await ParcelleElementaire.findOneAndDelete(req.params.parcelleElementaireId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'parcelleElementaire not found'});
            }  
            res.json({success: true, msg: 'parcelleElementaire deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const parcelleElementaire = await ParcelleElementaire.deleteMany();
    res.status(200).json('success');
}

 exports.addusertoparcelleElementaire = async (req, res, next) => { 
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const parcelleelementaire = await ParcelleElementaire.findById(req.params.parcelleElementaireId); 

            const newuser = new User({
                userImage: req.file.filename,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password : hash,
                phone: req.body.phone
            });

            newuser.parcelleElementaires = parcelleelementaire;
            await newuser.save();
            parcelleelementaire.users.push(newuser);
            await parcelleelementaire.save();
            
            res.status(200).json({newlycreatedUser: newuser,updatedparcelle: parcelleelementaire});

            
        }
    });
}
exports.getuserbyparcelleElementaire = async (req, res, next) => {
    const parcelleelementaire = await ParcelleElementaire.findById(req.params.parcelleElementaireId).populate("users")
    
    res.status(200).json(parcelleelementaire);
}
exports.addsondesaturationtoparcelleElementaire =  async (req, res, next) => { 
    const newsondesaturation = new Sondesaturation (req.body); 
    
    const findparcelleElementaire = await  ParcelleElementaire.findById(req.params.parcelleElementaireId);
    
    newsondesaturation.parcelleElementaire = findparcelleElementaire;
    await newsondesaturation.save();

    findparcelleElementaire.sondesaturation= newsondesaturation._id; 
    await findparcelleElementaire.save();

    res.status(201).json((findparcelleElementaire)); 
}
exports.getsondesaturationbyparcelleElementaire = async (req, res, next) => {
    const parcelleElementaire = await ParcelleElementaire.findById(req.params.parcelleElementaireId).populate("sondesaturation")
    res.status(200).json(parcelleElementaire.sondesaturation);
}

exports.addelectrovannetoparcelleElementaire =  async (req, res, next) => { 
    const newelectrovanne = new Electrovanne (req.body); 
    
    const findparcelleElementaire = await  ParcelleElementaire.findById(req.params.parcelleElementaireId);
    
    newelectrovanne.parcelleElementaire = findparcelleElementaire;
    await newelectrovanne.save();

    findparcelleElementaire.electrovanne= newelectrovanne._id; 
    await findparcelleElementaire.save();

    res.status(201).json((findparcelleElementaire)); 
}
exports.getelectrovannebyparcelleElementaire = async (req, res, next) => {
    const parcelleElementaire = await ParcelleElementaire.findById(req.params.parcelleElementaireId).populate("electrovanne")
    res.status(200).json(parcelleElementaire.electrovanne);
}











