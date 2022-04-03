const express = require("express");
const router =express.Router();
const Cart =require("../models/cart.model");
const Footwear_kids =require("../models/footwear_kids.model");
const Footwear_men_women =require("../models/footwear_men_women.model");
const Bebroom =require("../models/bedroom.model");
const authanticate = require("../middleware/authantication")


router.post("/addToCart/:userId",authanticate(),async(req,res)=>{
    try{
        let cart=await Cart.find({userId:req.params.userId}).lean().exec();
        let match=cart.filter((elem)=>elem.productId==req.body.productId);
        if(match[0]){
            const qty=req.body.qty+match[0].qty
            await Cart.findByIdAndUpdate(match[0]._id,{productId:match[0].productId,userId:match[0].userId,qty:qty},{new:true});   
        }
        else{
            await Cart.create(req.body);
        }
        cart=await Cart.find({userId:req.params.userId}).lean().exec();
        const footwear_kids=await Footwear_kids.find().lean().exec();
        const footwear_men_women=await Footwear_men_women.find().lean().exec();
        const bedroom=await Bebroom.find().lean().exec();
        const id=cart.map((elem)=>{ return elem.productId});
        const result1=footwear_kids.filter((elem)=> id.includes(elem._id.toString()));
        const result2=footwear_men_women.filter((elem)=> id.includes(elem._id.toString()));
        const result3=bedroom.filter((elem)=> id.includes(elem._id.toString()));
        res.status(201).send({product:[...result1,...result2,...result3],cart:cart});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})
router.post("/removeItemFromCart/:userId",authanticate(),async(req,res)=>{
    try{
        let cart=await Cart.find({userId:req.params.userId}).lean().exec();
        let match=cart.filter((elem)=>elem.productId==req.body.productId);
        if(match[0]){
            await Cart.findByIdAndDelete(match[0]._id);   
            cart=await Cart.find().lean().exec();
        }
        const footwear_kids=await Footwear_kids.find().lean().exec();
        const footwear_men_women=await Footwear_men_women.find().lean().exec();
        const bedroom=await Bebroom.find().lean().exec();
        const id=cart.map((elem)=>{ return elem.productId});
        const result1=footwear_kids.filter((elem)=> id.includes(elem._id.toString()));
        const result2=footwear_men_women.filter((elem)=> id.includes(elem._id.toString()));
        const result3=bedroom.filter((elem)=> id.includes(elem._id.toString()));
        res.status(201).send({product:[...result1,...result2,...result3],cart:cart});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})
router.post("/removeItemBynumberFromCart/:userId",authanticate(),async(req,res)=>{
    try{
        let cart=await Cart.find({userId:req.params.userId}).lean().exec();
        let match=cart.filter((elem)=>elem.productId==req.body.productId);
        if(match[0]){
            await Cart.findByIdAndUpdate(match[0]._id,req.body,{new:true});   
        }
        else{
            await Cart.create(req.body);
        }
        cart=await Cart.find({userId:req.params.userId}).lean().exec();
        const footwear_kids=await Footwear_kids.find().lean().exec();
        const footwear_men_women=await Footwear_men_women.find().lean().exec();
        const bedroom=await Bebroom.find().lean().exec();
        const id=cart.map((elem)=>{ return elem.productId});
        const result1=footwear_kids.filter((elem)=> id.includes(elem._id.toString()));
        const result2=footwear_men_women.filter((elem)=> id.includes(elem._id.toString()));
        const result3=bedroom.filter((elem)=> id.includes(elem._id.toString()));
        res.status(201).send({product:[...result1,...result2,...result3],cart:cart});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})
router.get("/:userId",async(req,res)=>{
    try{
        
        const cart=await Cart.find({userId:req.params.userId}).populate({path:"userId",select:["name"]}).lean().exec();
        const footwear_kids=await Footwear_kids.find().lean().exec();
        const footwear_men_women=await Footwear_men_women.find().lean().exec();
        const bedroom=await Bebroom.find().lean().exec();
        const id=cart.map((elem)=>{ return elem.productId});
        const result1=footwear_kids.filter((elem)=> id.includes(elem._id.toString()));
        const result2=footwear_men_women.filter((elem)=> id.includes(elem._id.toString()));
        const result3=bedroom.filter((elem)=> id.includes(elem._id.toString()));
        res.status(200).send({product:[...result1,...result2,...result3],cart:cart});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }        
})

module.exports =router;