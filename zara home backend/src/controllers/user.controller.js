const express =require("express");
const router = express.Router();
const User = require("../models/user.model");
const authanticate= require('../middleware/authantication');


router.get("",async(req,res)=>{
    try{
        const user = await User.find().lean().exec();
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findOne(req.params.id).lean().exec();
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.post("",authanticate,async(req,res)=>{
    try{
        const user = await User.create(req.body);
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})


module.exports =router;