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
const user = require('../models/user');


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
router.delete('/:userID', usercontroller.grantAccess('deleteAny', 'user'), usercontroller.user_delete);
router.get("/", checkAuth,  usercontroller.grantAccess('readAny', 'user'),usercontroller.usergetall );
router.get("/:userId", checkAuth, usercontroller.grantAccessifown('readOwn','user'), usercontroller.getuser);
router.patch("/:userId", checkAuth, usercontroller.grantAccessifown('updateOwn','user'), usercontroller.userupdate);
router.delete("/", checkAuth, usercontroller.grantAccess('deleteAny', 'user'),  usercontroller.userdeleteall);
router.post("/resetpassword", usercontroller.resetpassword);
router.post("/:userId/parcelle",checkAuth,usercontroller.grantAccess('createAny', 'parcelleElementairetoUser'), usercontroller.addparcelleElementairetouser);
router.get("/:userId/parcelle",checkAuth,usercontroller.grantAccess('readAny', 'parcelleElementaireByUser'),  usercontroller.getparcelleElementaireByUser);

module.exports= router; 