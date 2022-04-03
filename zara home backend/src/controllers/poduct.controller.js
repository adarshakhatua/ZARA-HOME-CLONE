const express = require("express");
const router =express.Router();
const Product =require("../models/product.model");
const Footwear_kids =require("../models/footwear_kids.model");
const Footwear_men_women =require("../models/footwear_men_women.model");
const Bebroom =require("../models/bedroom.model");

router.get("",async(req,res)=>{
    try{
        const pageSize= req.query.pageSize;
        const pageNumber=req.query.pageNumber;
        const total= await Product.find().countDocuments().lean().exec();
        const skip=(pageNumber-1)*pageSize;
        const product=await Product.find().skip(skip).limit(pageSize).lean().exec();
        const footwear_kids=await Footwear_kids.find().lean().exec();
        const footwear_men_women=await Footwear_men_women.find().lean().exec();
        const bedroom=await Bebroom.find().lean().exec();
        const id=product.map((elem)=>{ return elem.productId});
        //console.log({footwear_kids:footwear_kids,footwear_men_women:footwear_men_women,bedroom:bedroom})
        const result1=footwear_kids.filter((elem)=> id.includes(elem._id.toString()));
        const result2=footwear_men_women.filter((elem)=> id.includes(elem._id.toString()));
        const result3=bedroom.filter((elem)=> id.includes(elem._id.toString()));
        // console.log([...result1,...result2,...result3])
        res.status(200).send({product:[...result1,...result2,...result3],TotalPage:Math.ceil(total/pageSize)});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})


router.get("/:id",async(req,res)=>{
    try{
        const footwear_kids=await Footwear_kids.find().lean().exec();
        const footwear_men_women=await Footwear_men_women.find().lean().exec();
        const bedroom=await Bebroom.find().lean().exec();
        const product=await Product.findOne({productId:req.params.id}).lean().exec();
        console.log(product.productCategory)
        if(product.productCategory=="bedroom"){
            return res.status(200).send(bedroom.filter((elem)=> product.productId.includes(elem._id.toString())));
        }
        else if(product.productCategory=="footwear_kids"){
            return res.status(200).send(footwear_kids.filter((elem)=> product.productId.includes(elem._id.toString())));
        }
        else if(product.productCategory=="footwear_men_women"){
            return res.status(200).send(footwear_men_women.filter((elem)=> product.productId.includes(elem._id.toString())));
        }
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

router.post("",async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(201).send(product);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

module.exports = router;