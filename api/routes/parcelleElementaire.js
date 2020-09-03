const express = require('express');
const router = express.Router();
const User = require ("../models/user");
const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');
const checkAuth = require('../middleware/check-auth');
const jwt = require ('jsonwebtoken');
const path = require('path');
const multer = require('multer');
const parcelleElementairecontroller= require ('../controllers/parcelleElementaire');
const Sondesaturation = require ("../models/sondesaturation");
const Electrovanne = require ("../models/electrovanne");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/'); 
    },
    filename: function(req, file, cb) {
        
        cb(null, Date.now() + file.originalname);
    }

});
const fileFilter = (req, file,cb) => {
    if (file.mimetype === 'image/jpeg' ) {
        cb(null, true);
    }
    else {
        cb (null, false);
    }
};
const upload = multer ({ 
    storage: storage, 
    limits: {
    fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/',parcelleElementairecontroller.parcelleElementairegetall);
router.post ('/', parcelleElementairecontroller.newparcelleElementaire);
router.get('/:parcelleElementaireId',parcelleElementairecontroller.getparcelleElementaire);
router.patch('/:parcelleElementaireId', parcelleElementairecontroller.updateparcelleElementaire);
router.delete('/:parcelleElementaireId', parcelleElementairecontroller.deleteparcelleElementaire);
router.delete('/', parcelleElementairecontroller.deleteAll);
router.post('/:parcelleElementaireId/User',upload.single('file'),parcelleElementairecontroller.addusertoparcelleElementaire);
router.get('/:parcelleElementaireId/User',parcelleElementairecontroller.getuserbyparcelleElementaire);
router.post("/:parcelleElementaireId/sondesaturation", parcelleElementairecontroller.addsondesaturationtoparcelleElementaire);
router.get("/:parcelleElementaireId/sondesaturation",parcelleElementairecontroller.getsondesaturationbyparcelleElementaire);
router.post("/:parcelleElementaireId/electrovanne", parcelleElementairecontroller.addelectrovannetoparcelleElementaire);
router.get("/:parcelleElementaireId/electrovanne",parcelleElementairecontroller.getelectrovannebyparcelleElementaire);





module.exports= router; 