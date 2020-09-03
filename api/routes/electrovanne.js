const express = require('express');
const router = express.Router();
const Electrovanne = require ("../models/electrovanne");
const mongoose = require ('mongoose');
const electrovannecontroller= require ('../controllers/electrovanne');
const ParcelleElementaire = require ('../controllers/parcelleElementaire');

router.get('/', electrovannecontroller.electrovannegetall);
router.post ('/', electrovannecontroller.newelectrovanne);
router.get('/:electrovanneId',electrovannecontroller.getelectrovanne);
router.patch('/:electrovanneId', electrovannecontroller.updateelectrovanne);
router.delete('/:electrovanneId', electrovannecontroller.deleteelectrovanne);
router.delete('/', electrovannecontroller.deleteAll);
router.post("/:electrovanneId/parcelleElementaire", electrovannecontroller.addparcelleElementairetoelectrovanne);
router.get("/:electrovanneId/parcelleElementaire",electrovannecontroller.getparcelleElementairebyelectrovanne);

module.exports= router; 