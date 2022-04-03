const mongoose = require ("mongoose");


const footwear_kidsSchema =new mongoose.Schema({
    name:{type:String},
     price:{type:String},
     qty:{type:Number},
     ref:{type:String},
     description:{type:String},
     size:{"30/31":{type:Number},
           "32/33":{type:Number},
           "34/35":{type:Number},},
     product_details:{
                      COMPOSITION:{UPPER:{type:String},LINING:{type:String},SOLE:{type:String},INSOLE:{type:String},},
                      CARE:[{type:String},],
                      ORIGIN:{type:String},
                      },
     imagelink1:{type:String},                               
     imagelink2:{type:String},
     imagelink3:{type:String},
     imagelink4:{type:String},
     imagelink5:{type:String}
     
},
{
    versionKey:false,
    timestamps:true,
})

const Footwear_kids =mongoose.model("footwear_kids", footwear_kidsSchema);

module.exports =Footwear_kids;