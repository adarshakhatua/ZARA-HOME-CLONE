const mongoose = require ("mongoose");


const footwear_men_womenSchema= new mongoose.Schema({
    name:{type:String,},
    price:{type:String,},
    qty:{type:Number,},
    ref:{type:String,},
    description:{type:String,},
    size:[{type:String},],
    product_details:{
                     COMPOSITION:{UPPER:{type:String,},LINING:{type:String,},SOLE:{type:String,},INSOLE:{type:String,},},
                     CARE:[{type:String,},],
                     ORIGIN:{type:String,},
                     },
    imagelink1:{type:String,},                                 
    imagelink2:{type:String,},
    imagelink3:{type:String,},
    imagelink4:{type:String,},
    imagelink5:{type:String,},
    
},
{
    versionKey:false,
    timestamps:true,
})


const Footwear_men_women = mongoose.model("footwear_men_women", footwear_men_womenSchema);

module.exports = Footwear_men_women