const express = require('express');
const router = express.Router();
const Sondesaturation = require ("../models/sondesaturation");
const historiquesondesaturation = require ("../models/historiquesondesaturation");
const mongoose = require ('mongoose');
const sondesaturationcontroller= require ('../controllers/sondesaturation');
const ParcelleElementaire= require ('../controllers/parcelleElementaire');

router.get('/', sondesaturationcontroller.sondesaturationgetall);
router.post ('/', sondesaturationcontroller.newsondesaturation);
router.get('/:sondesaturationId',sondesaturationcontroller.getsondesaturation);
router.patch('/:sondesaturationId', sondesaturationcontroller.updatesondesaturation);
router.delete('/:sondesaturationId', sondesaturationcontroller.deletesondesaturation);
router.delete('/', sondesaturationcontroller.deleteAll);
router.post("/:sondesaturationId/parcelleElementaire", sondesaturationcontroller.addparcelleElementairetosondesaturation);
router.get("/:sondesaturationId/parcelleElementaire",sondesaturationcontroller.getparcelleElementairebysondesaturation);


module.exports= router; 