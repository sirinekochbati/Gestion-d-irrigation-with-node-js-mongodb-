const express = require('express');
const router = express.Router();
const Flotteur = require ("../models/flotteur");
const Bassin = require ("../models/bassin");

const mongoose = require ('mongoose');
const flotteurcontroller= require ('../controllers/flotteur');

router.get('/', flotteurcontroller.flotteurgetall);
router.post ('/', flotteurcontroller.newflotteur);
router.get('/:flotteurId',flotteurcontroller.getflotteur);
router.patch('/:flotteurId', flotteurcontroller.updateflotteur);
router.delete('/:flotteurId', flotteurcontroller.deleteflotteur);
router.delete('/', flotteurcontroller.deleteAll);
router.post("/:flotteurId/bassin", flotteurcontroller.addbassintoflotteur);
router.get("/:flotteurId/bassin",flotteurcontroller.getbassinbyflotteur);


module.exports= router; 