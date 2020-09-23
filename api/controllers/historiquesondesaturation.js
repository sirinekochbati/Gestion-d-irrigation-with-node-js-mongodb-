const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Historiquesondesaturation = require("../models/historiquesondesaturation");
const Sondesaturation = require("../models/sondesaturation");

exports.historiquesondesaturationgetall = async (req, res, next) => {
    const historiquesondesaturation = await Historiquesondesaturation.find({});
    res.status(200).json(historiquesondesaturation);
}


 exports.newhistoriquesondesaturation = async (req, res, next) => {
    historiquesondesaturation = new Historiquesondesaturation(req.body);
    await historiquesondesaturation.save();
    res.status(200).json(historiquesondesaturation);
}
exports.gethistoriquesondesaturation = async (req, res, next) => {
    const historiquesondesaturation = await Historiquesondesaturation.findById(req.params.historiquesondesaturationId);
    res.status(200).json(historiquesondesaturation);
}

exports.updatehistoriquesondesaturation = async (req, res, next) => {
               
    const newhistoriquesondesaturation = req.body;
    const historiquesondesaturation = await Historiquesondesaturation.findByIdAndUpdate(req.params.historiquesondesaturationId, newhistoriquesondesaturation);
    res.status(200).json('success');
}
exports.deletehistoriquesondesaturation = async (req, res, next) => {
    const historiquesondesaturation = await Historiquesondesaturation.findOneAndDelete(req.params.historiquesondesaturationId).exec(function(err, item) {
            if (err) {
                return res.json({success: false, msg: 'Cannot remove item'});
            }       
            if (!item) {
                return res.status(404).json({success: false, msg: 'historiquesondesaturation not found'});
            }  
            res.json({success: true, msg: 'historiquesondesaturation deleted.'});
        });
   
}

exports.deleteAll = async (req, res, next) => {
    const historiquesondesaturation = await Historiquesondesaturation.deleteMany();
    res.status(200).json('success');
}
exports.addhistoriquesondesaturationtosondesaturation =  async (req, res, next) => { 
    const historiquesondesaturation = new Historiquesondesaturation (req.body); 
    
    const findsondesaturation = await Sondesaturation.findById(req.params.sondesaturationId);
    historiquesondesaturation.sondesaturation= findsondesaturation;
    await historiquesondesaturation.save();
    findsondesaturation.historiquesondesaturations.push(historiquesondesaturation);
    await findsondesaturation.save(); 
    
    res.status(201).json(findsondesaturation);
}
exports.gethistoriquesondesaturationbysondesaturation = async (req, res, next) => {
    const sondesaturation = await Sondesaturation.findById(req.params.sondesaturationId).populate("historiquesondesaturations")
    res.status(200).json(sondesaturation.historiquesondesaturations);
}
exports.getlasthistoriquesondesaturationbysondesaturation = async (req, res, next) => {
    sondesaturation = await Sondesaturation.findById(req.params.sondesaturationId).populate("historiquesondesaturations");
   var last ;
   if(sondesaturation.historiquesondesaturations.pop()!=undefined){

         last= sondesaturation.historiquesondesaturations.pop();  
   }
   else if(sondesaturation.historiquesondesaturations.pop()==undefined){last={value:0,date:null}}
   res.status(200).json(last);

}


