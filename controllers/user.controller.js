const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');








function signUp(req, res){
   //Sign up
   models.User.findOne({where:{email:req.body.email}}).then(result => {
       if(result){
           res.status(409).json({
               message: "Email already exists!",
           });
       }else{
           bcryptjs.genSalt(10, function(err, salt){
               bcryptjs.hash(req.body.password, salt, function(err, hash){
                   const user = {
                       firstName: req.body.firstName,
                       lastName: req.body.lastName,
                       email:req.body.email,
                       password: hash,
                       mobilePhone:req.body.mobilePhone
                   }
                   models.User.create(user).then(result => {
                       res.status(201).json({
                           message: "User created successfully",
                       });
                   }).catch(error => {
                       res.status(500).json({
                           message: "Something went wrong!",
                       });
                   });
               });
           });
       }


   }).catch(error => {
       res.status(500).json({
           message: "Something went wrong!",
       });
   });
}

function login(req, res){
   models.User.findOne({where:{email: req.body.email}}).then(user => {
       if(user === null){
           res.status(401).json({
               message: "Invalid credentials!",
           });
       }else{
           bcryptjs.compare(req.body.password, user.password, function(err, result){
               if(result){
                    //TODO add rules id to the token
                   const token = jwt.sign({
                       email: user.email,
                       userId: user.id
                   }, process.env.JWT_KEY, function(err, token){
                       res.status(200).json({
                           message: "Authentication successful!",
                           token: token
                       });
                   });
               }else{
                   res.status(401).json({
                       message: "Invalid credentials!",
                   });
               }
           });
       }
   }).catch(error => {
       res.status(500).json({
           message: "Something went wrong!",
       });
   });
}


function index(req, res){
    models.User.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function test(req,res){   
        res.json({'message': 'ok'});   
      
}


module.exports = {
   signUp: signUp,
   login: login,
   index: index,
   test: test
}

