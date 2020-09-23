const express = require('express');
const router = express.Router();
const Pressostat = require ("../models/pressostat");
const Moteur = require ("../models/moteur");
const mongoose = require ('mongoose');
const pressostatcontroller= require ('../controllers/pressostat');

router.get('/', pressostatcontroller.pressostatgetall);
router.post ('/', pressostatcontroller.newpressostat);
router.get('/:pressostatId',pressostatcontroller.getpressostat);
router.patch('/:pressostatId', pressostatcontroller.updatepressostat);
router.delete('/:pressostatId', pressostatcontroller.deletepressostat);
router.delete('/', pressostatcontroller.deleteAll);
router.post("/:pressostatId/moteur", pressostatcontroller.addmoteurtopressostat);
router.get("/:pressostatId/moteur",pressostatcontroller.getmoteurbypressostat);


module.exports= router; 