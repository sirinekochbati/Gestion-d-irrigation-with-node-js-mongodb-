const express = require('express');
const router = express.Router();
const Historiquesondesaturation = require ("../models/historiquesondesaturation");
const Sondesaturation = require ("../models/sondesaturation");

const mongoose = require ('mongoose');
const historiquesondesaturationcontroller= require ('../controllers/historiquesondesaturation');

router.get('/',historiquesondesaturationcontroller.historiquesondesaturationgetall);
router.post ('/', historiquesondesaturationcontroller.newhistoriquesondesaturation);
router.get('/:historiquesondesaturationId',historiquesondesaturationcontroller.gethistoriquesondesaturation);
router.patch('/:historiquesondesaturationId', historiquesondesaturationcontroller.updatehistoriquesondesaturation);
router.delete('/:historiquesondesaturationId', historiquesondesaturationcontroller.deletehistoriquesondesaturation);
router.delete('/', historiquesondesaturationcontroller.deleteAll);
router.post("/:sondesaturationId/historiquesondesaturation", historiquesondesaturationcontroller.addhistoriquesondesaturationtosondesaturation);
router.get("/:sondesaturationId/historiquesondesaturation",historiquesondesaturationcontroller.gethistoriquesondesaturationbysondesaturation);
router.get("/:sondesaturationId/lasthistoriquesondesaturation",historiquesondesaturationcontroller.getlasthistoriquesondesaturationbysondesaturation);

module.exports= router; 