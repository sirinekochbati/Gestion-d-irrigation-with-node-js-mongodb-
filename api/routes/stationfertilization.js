const express = require('express');
const router = express.Router();
const Stationfertilization = require ("../models/stationfertilization");
const parcelleElementaire = require ("../models/parcelleElementaire");
const Ravitaillement = require ("../models/ravitaillement");
const mongoose = require ('mongoose');
const stationfertilizationcontroller= require ('../controllers/stationfertilization');

router.get('/', stationfertilizationcontroller.stationfertilizationgetall);
router.post ('/', stationfertilizationcontroller.newstationfertilization);
router.get('/:stationfertilizationId',stationfertilizationcontroller.getstationfertilization);
router.patch('/:stationfertilizationId', stationfertilizationcontroller.updatestationfertilization);
router.delete('/:stationfertilizationId', stationfertilizationcontroller.deletestationfertilization);
router.delete('/', stationfertilizationcontroller.deleteAll);
router.post("/:stationfertilizationId/parcelleElementaire", stationfertilizationcontroller.addparcelleElementairetostationfertilization);
router.get("/:stationfertilizationId/parcelleElementaire",stationfertilizationcontroller.getparcelleElementairebystationfertilization);

module.exports= router; 