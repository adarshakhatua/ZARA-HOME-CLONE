const express = require("express");
const router =express.Router();
const Footwear_kids =require("../models/footwear_kids.model");
const Product=require("../models/product.model");

router.post("",async(req,res)=>{
    try{
        const footwear_kids=await Footwear_kids.create(req.body);
        const product=await Product.create({productId:footwear_kids._id.toString(),productCategory:"footwear_kids"})
        res.status(201).send(footwear_kids);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

router.get("",async(req,res)=>{
    try{
        const pageSize= req.query.pageSize;
        const pageNumber=req.query.pageNumber;
        const total= await Footwear_kids.find().countDocuments().lean().exec();
        const skip=(pageNumber-1)*pageSize;
        const footwear_kids=await Footwear_kids.find().skip(skip).limit(pageSize).lean().exec();
        res.status(201).send({footwear_kids:footwear_kids,TotalPage:Math.ceil(total/pageSize)});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

router.get("/:id",async(req,res)=>{
    try{
        const footwear_kids=await Footwear_kids.findById(req.params.id).lean().exec();
        res.status(201).send(footwear_kids);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

module.exports =router;