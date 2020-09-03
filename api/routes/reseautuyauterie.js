const express = require('express');
const router = express.Router();
const Reseautuyauterie = require ("../models/reseautuyauterie");

const mongoose = require ('mongoose');
const reseautuyauteriecontroller= require ('../controllers/reseautuyauterie');

router.get('/', reseautuyauteriecontroller.reseautuyauteriegetall);
router.post ('/', reseautuyauteriecontroller.newreseautuyauterie);
router.get('/:reseautuyauterieId',reseautuyauteriecontroller.getreseautuyauterie);
router.patch('/:reseautuyauterieId', reseautuyauteriecontroller.updatereseautuyauterie);
router.delete('/:reseautuyauterieId', reseautuyauteriecontroller.deletereseautuyauterie);
router.delete('/', reseautuyauteriecontroller.deleteAll);



module.exports= router; 