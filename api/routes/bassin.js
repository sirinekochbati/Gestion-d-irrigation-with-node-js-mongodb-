const express = require('express');
const router = express.Router();
const Bassin = require ("../models/bassin");
const Sondage = require ("../models/sondage");
const Moteur = require ("../models/moteur");
const mongoose = require ('mongoose');
const bassincontroller= require ('../controllers/bassin');
const Historiqueassin = require ("../models/historiquebassin");

router.get('/',bassincontroller.bassingetall);
router.post ('/', bassincontroller.newbassin);
router.get('/:bassinId',bassincontroller.getbassin);
router.patch('/:bassinId', bassincontroller.updatebassin);
router.delete('/:bassinId', bassincontroller.deletebassin);
router.delete('/', bassincontroller.deleteAll);
router.post("/:bassinId/sondage", bassincontroller.addsondagetobassin);
router.post("/:bassinId/moteur", bassincontroller.addmoteurtobassin);
router.get("/:bassinId/sondage",bassincontroller.getsondagebybassin);
router.get("/:bassinId/moteur",bassincontroller.getmoteurbybassin);

module.exports= router; 