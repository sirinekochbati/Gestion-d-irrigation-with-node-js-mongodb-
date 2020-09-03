const User = require ('../models/user');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const ParcelleElementaire = require ("../models/parcelleElementaire");
const Parcelle = require ("../models/parcelle");
const Stationfertilization = require ("../models/stationfertilization");
const Electrovanne = require ("../models/electrovanne");
const Sondesaturation = require ("../models/sondesaturation");



exports.usergetall = async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);}
    
exports.getuser = async (req, res, next) => {

    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
}


exports.user_postsignup = (req, res, next) => {
    User.find({ email: req.body.email})
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message : 'mail exists'

            });
        } else { 
            bcrypt.hash(req.body.password, 10, (err,hash) =>{
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id:  new mongoose.Types.ObjectId(),
                        userImage: req.file.filename,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password :  hash,
                        phone: req.body.phone
                    });
                    user
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message : 'User created'
                            
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    res.status(500).json({
                        error: err
                    });
            
                    });
                    
                }
            });

        }
    }) 
    
    
}

exports.user_postlogin = (req,res,next) => {
    User.find({email : req.body.email})
    .exec()
    .then(user => {
        if (user.length < 1 ) { 
            return res.status(401).json({
               message : 'auth failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err,result) => {
            if (err) { 
                return res.status(401).json({
                   message: 'auth failed'
                });
            }
            if (result) {
                const token = jwt.sign(
                    {
                   email: user[0].email,
                   userId: user[0]._id

                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }
                );
                return res.status(200).json({
                   message: 'auth successful',
                   token: token
                });
            }
            res.status(401).json({
               message: 'auth failed'
            });
        });
    })
    .catch(err => {
        console.log(err); 
        res.status(500).json({
           error : err
        }); 
    }); 
}

exports.user_delete = (req, res, next) => {
    const id = req.params.userID;
   User.remove({_id: id})
   .exec()
   .then(result => {
       res.status(200).json({
        message: 'user deleted',
        request: {
            type: 'POST'
           
        } 
       });
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({
           error: err
       });
   });

}
exports.userdeleteall = async (req, res, next) => {
    const users = await User.deleteMany();
    res.status(200).json('success');
}


exports.userupdate= (req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    User.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'User updated',
            
        });

          })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        }); 
    });
  
}
 
exports.addparcelleElementairetouser =  async (req, res, next) => { 
    const parcelleelementaire = new ParcelleElementaire (req.body);  
    
    const user = await User.findById(req.params.userId);
    
    parcelleelementaire.users=user;
    await parcelleelementaire.save();
    user.parcelleElementaires.push(parcelleelementaire);
    await user.save();
    
    res.status(201).json((user));
}

exports.getparcelleElementaireByUser = async (req, res, next) => {
    const user = await User.findById(req.params.userId).populate("parcelleElementaires")
    res.status(200).json(user.parcelleElementaires);
}





exports.resetpassword = async (req, res, next) => {
    let user = await User.find({email: req.body.email });
    if (!user)   return res.status(400).send('user not registred');

    

    const token = jwt.sign({
       email: user.email,
       userId: user._id
    },
    process.env.JWT_KEY,
    {
        expiresIn: "1h"
    }
    );


    let transporter = nodemailer.createTransport({
            pool: true,
    	    host: 'smtp.gmail.com',
    	    port: 465,
    	    secure: false,
            service: 'Gmail',
            auth: {
                    user: 'testtest230297@@gmail.com',
                    pass : "TestTest97*", 
                    //https://myaccount.google.com/lesssecureapps  
            }, 
            tls: {
                rejectUnauthorized: false
            }  
    });
    let mailOptions = {

            from: 'testtest230297@@gmail.com', 
            to: "sirinekochbatisirine@gmail.com",
            subject: 'test works',
            text: 'welcom to our application if you need to navigate to http://localhost:4200/authentication/forgotPassword/'+token
    }

    transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                    console.log(err);
                    
                    res.status(400).json({error:"Error"});
            } else {
                    console.log(user.email);
                    console.log('email sent!! ');
                    res.status(200).json({Sucess:"sucess"});
            }

    })


}


