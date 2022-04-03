const User = require("../models/user.model");
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');





const signup=async(req,res)=>{

  try{
    //express-validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    //express-validation
    
    let user = await User.findOne({email:req.body.email});

    if(!user){
        user = await User.create(req.body);
        return res.status(201).send(user)
    }
    return res.status(400).send({message:"Authoization failed, email already exist"})
  } 
  catch(err){
      return res.status(500).send({message:err.message})
  } 
}



const signin=async(req,res)=>{
    try{
        //express-validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        //express-validation

        let user =await User.findOne({email:req.body.email}).exec();
        

        if(!user){
            return res.status(400).send({message:"Authoization failed, email is not correct or invalid"})
        }


        const match =user.verifyPassword(req.body.password);
        if(!match){
            return res.status(400).send({message:"Authoization failed, password is invalid"})
        }

        const token =jwt.sign({user:user},'secret');
        console.log(token)

        return res.status(200).send({user:user,token:token});
  
    } 
    catch(err){
        return res.status(500).send({message:err.message})
    } 
  }


  module.exports={signin,signup}