const express = require('express');
const router = express.Router();
const Ravitaillement = require ("../models/ravitaillement");
const Stationfertilization = require ("../models/stationfertilization");

const mongoose = require ('mongoose');
const ravitaillementcontroller= require ('../controllers/ravitaillement');

router.get('/',ravitaillementcontroller.ravitaillementgetall);
router.post ('/', ravitaillementcontroller.newravitaillement);
router.get('/:ravitaillementId',ravitaillementcontroller.getravitaillement);
router.patch('/:ravitaillementId', ravitaillementcontroller.updateravitaillement);
router.delete('/:ravitaillementId', ravitaillementcontroller.deleteravitaillement);
router.delete('/', ravitaillementcontroller.deleteAll);
router.post("/:stationfertilizationId/ravitaillement", ravitaillementcontroller.addravitaillementtostationfertilization);
router.get("/:stationfertilizationId/ravitaillement",ravitaillementcontroller.getravitaillementbystationfertilization);


module.exports= router; 