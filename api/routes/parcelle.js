const express = require('express');
const router = express.Router();
const Parcelle = require ("../models/parcelle");
const ParcelleElementaire = require ("../models/parcelleElementaire");
const mongoose = require ('mongoose');
const parcellecontroller= require ('../controllers/parcelle');
const Reseautuyauterie = require ("../models/reseautuyauterie");

router.get('/', parcellecontroller.parcellegetall);
router.post ('/', parcellecontroller.newparcelle);
router.get('/:parcelleId',parcellecontroller.getparcelle);
router.patch('/:parcelleId', parcellecontroller.updateparcelle);
router.delete('/:parcelleId', parcellecontroller.deleteparcelle);
router.delete('/', parcellecontroller.deleteAll);
router.post("/:parcelleId/parcelleElementaire", parcellecontroller.addparcelleElementairetoparcelle);
router.get("/:parcelleId/parcelleElementaire",parcellecontroller.getparcelleElementairebyparcelle);
router.post("/:parcelleId/reseautuyauterie", parcellecontroller.addreseautuyauterietoparcelle);
router.get("/:parcelleId/reseautuyauterie",parcellecontroller.getreseautuyauteriebyparcelle);


module.exports= router; 