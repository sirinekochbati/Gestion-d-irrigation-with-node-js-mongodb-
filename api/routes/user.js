const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');

const checkAuth = require('../middleware/check-auth');
const jwt = require ('jsonwebtoken');
const usercontroller= require ('../controllers/user');
const path = require('path');
const multer = require('multer');
const User = require ("../models/user");
const ParcelleElementaire = require ("../models/parcelleElementaire");


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/'); // RAW ELI FEL POST
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

router.post("/signup", upload.single('file'), usercontroller.user_postsignup);
router.post ('/login', usercontroller.user_postlogin);
router.delete('/:userID', usercontroller.user_delete);
router.get("/", usercontroller.usergetall );
router.get("/:userId", usercontroller.getuser);
router.patch("/:userId",  usercontroller.userupdate);
router.delete("/",  usercontroller.userdeleteall);
router.post("/resetpassword", usercontroller.resetpassword);
router.post("/:userId/parcelle", usercontroller.addparcelleElementairetouser);
router.get("/:userId/parcelle",usercontroller.getparcelleElementaireByUser);

module.exports= router; 