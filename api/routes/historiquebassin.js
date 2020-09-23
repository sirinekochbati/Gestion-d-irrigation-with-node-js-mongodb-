const express = require('express');
const router = express.Router();
const Historiquebassin = require ("../models/historiquebassin");
const Bassin = require ("../models/bassin");

const mongoose = require ('mongoose');
const historiquebassincontroller= require ('../controllers/historiquebassin');

router.get('/',historiquebassincontroller.historiquebassingetall);
router.post ('/', historiquebassincontroller.newhistoriquebassin);
router.get('/:historiquebassinId',historiquebassincontroller.gethistoriquebassin);
router.patch('/:historiquebassinId', historiquebassincontroller.updatehistoriquebassin);
router.delete('/:historiquebassinId', historiquebassincontroller.deletehistoriquebassin);
router.delete('/', historiquebassincontroller.deleteAll);
router.post("/:bassinId", historiquebassincontroller.addhistoriquebassintobassin);
router.get("/:bassinId/historiquebassin",historiquebassincontroller.gethistoriquebassinbybassin);
router.get("/:bassinId/lasthistoriquebassin",historiquebassincontroller.getlasthistoriquebassinbybassin);

module.exports= router; 