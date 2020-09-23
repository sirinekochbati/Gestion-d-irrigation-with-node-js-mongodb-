const express = require('express');
const router = express.Router();
const Moteur = require ("../models/moteur");
const mongoose = require ('mongoose');
const moteurcontroller= require ('../controllers/moteur');
const Pressostat = require("../models/pressostat");
const Reseautuyauterie = require("../models/reseautuyauterie");

router.get('/', moteurcontroller.moteurgetall);
router.post ('/', moteurcontroller.newmoteur);
router.get('/:moteurId',moteurcontroller.getmoteur);
router.patch('/:moteurId', moteurcontroller.updatemoteur);
router.delete('/:moteurId', moteurcontroller.deletemoteur);
router.delete('/', moteurcontroller.deleteAll);
router.post("/:moteurId/reseautuyauterie", moteurcontroller.addreseautuyauterietomoteur);
router.get("/:moteurId/reseautuyauterie",moteurcontroller.getreseautuyauteriebymoteur);
router.post("/:moteurId/pressostat", moteurcontroller.addpressostattomoteur);
router.get("/:moteurId/pressostat",moteurcontroller.getpressostatbymoteur);

module.exports= router; 