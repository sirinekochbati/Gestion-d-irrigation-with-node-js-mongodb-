const express = require('express');
const router = express.Router();
const Moteur = require ("../models/moteur");
const mongoose = require ('mongoose');
const moteurcontroller= require ('../controllers/moteur');

router.get('/', moteurcontroller.moteurgetall);
router.post ('/', moteurcontroller.newmoteur);
router.get('/:moteurId',moteurcontroller.getmoteur);
router.patch('/:moteurId', moteurcontroller.updatemoteur);
router.delete('/:moteurId', moteurcontroller.deletemoteur);
router.delete('/', moteurcontroller.deleteAll);

module.exports= router; 