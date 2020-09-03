const express = require('express');
const router = express.Router();
const Stationfiltrage = require ("../models/stationfiltrage");
const Bassin = require ("../models/bassin");
const mongoose = require ('mongoose');
const stationfiltragecontroller= require ('../controllers/stationfiltrage');

router.get('/', stationfiltragecontroller.stationfiltragegetall);
router.post ('/', stationfiltragecontroller.newstationfiltrage);
router.get('/:stationfiltrageId',stationfiltragecontroller.getstationfiltrage);
router.patch('/:stationfiltrageId', stationfiltragecontroller.updatestationfiltrage);
router.delete('/:stationfiltrageId', stationfiltragecontroller.deletestationfiltrage);
router.delete('/', stationfiltragecontroller.deleteAll);
router.post("/:stationfiltrageId/bassin", stationfiltragecontroller.addbassintostationfiltrage);
router.get("/:stationfiltrageId/bassin",stationfiltragecontroller.getbassinbystationfiltrage);

module.exports= router; 