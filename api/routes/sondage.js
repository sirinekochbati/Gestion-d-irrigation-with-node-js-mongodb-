const express = require('express');
const router = express.Router();
const Sondage = require ("../models/sondage");
const mongoose = require ('mongoose');
const sondagecontroller= require ('../controllers/sondage');

router.get('/', sondagecontroller.sondagegetall);
router.post ('/', sondagecontroller.newsondage);
router.get('/:sondageId', sondagecontroller.getsondage);
router.patch('/:sondageId', sondagecontroller.updatesondage);
router.delete('/:sondageId', sondagecontroller.deletesondage);
router.delete('/', sondagecontroller.deleteAll);

module.exports= router; 