const express = require("express");
const router =express.Router();
const Bedroom =require("../models/bedroom.model");
const Product=require("../models/product.model");


router.post("",async(req,res)=>{
    try{
        const bedroom=await Bedroom.create(req.body);
        const product=await Product.create({productId:bedroom._id.toString(),productCategory:"bedroom"})
        res.status(201).send(bedroom);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

router.get("",async(req,res)=>{
    try{
        const pageSize= req.query.pageSize;
        const pageNumber=req.query.pageNumber;
        const total= await Bedroom.find().countDocuments().lean().exec();
        const skip=(pageNumber-1)*pageSize;
        const bedroom=await Bedroom.find().skip(skip).limit(pageSize).lean().exec();
        res.status(201).send({Bedroom:bedroom,TotalPage:Math.ceil(total/pageSize)});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

router.get("/:id",async(req,res)=>{
    try{
        const bedroom=await Bedroom.findById(req.params.id).lean().exec();
        //console.log(bedroom._id.toString())
        res.status(201).send(bedroom);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

module.exports =router;