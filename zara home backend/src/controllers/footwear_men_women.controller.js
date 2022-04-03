const express = require("express");
const router =express.Router();
const Footwear_men_women =require("../models/footwear_men_women.model");
const Product=require("../models/product.model");

router.post("",async(req,res)=>{
    try{
        const footwear_men_women=await Footwear_men_women.create(req.body);
        const product=await Product.create({productId:footwear_men_women._id.toString(),productCategory:"footwear_men_women"})
        res.status(201).send(footwear_men_women);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

router.get("",async(req,res)=>{
    try{
        const pageSize= req.query.pageSize;
        const pageNumber=req.query.pageNumber;
        const total= await Footwear_men_women.find().countDocuments().lean().exec();
        const skip=(pageNumber-1)*pageSize;
        const footwear_men_women=await Footwear_men_women.find().skip(skip).limit(pageSize).lean().exec();
        res.status(201).send({footwear_men_women:footwear_men_women,TotalPage:Math.ceil(total/pageSize),TotalCount:total});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

router.get("/:id",async(req,res)=>{
    try{
        const footwear_men_women=await Footwear_men_women.findById(req.params.id).lean().exec();
        res.status(201).send(footwear_men_women);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

module.exports =router;