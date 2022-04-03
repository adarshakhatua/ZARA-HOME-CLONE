const mongoose = require ("mongoose");

const bedroomSchema = new mongoose.Schema({
    name:{type:String},
    price:{type:String},
    ref:{type:String},
    description:{type:String},
    size:{  "Single (135 x 200 cm)":[{type:Number},],
            "Single (150 x 220 cm)":[{type:Number},],
            "Single (150 x 220 cm)":[{type:Number},],
            "Single (180 x 220 cm)":[{type:Number},],
            "Double (220 x 220 cm)":[{type:Number},],
            "Double (200 x 200 cm)":[{type:Number},],
            "Double (200 x 220 cm)":[{type:Number},],
            "King (240 x 220 cm)":[{type:Number},],
            "Superking (260 x 240 cm)":[{type:Number},],
            "Emperor (290 x 260 cm)":[{type:Number},],
           },
     product_details:{
                        MEASUREMENTS:{    "Single (135 x 200 cm)":{type:Number},
                                          "Single (150 x 220 cm)":{type:Number},
                                          "Single (150 x 220 cm)":{type:Number},
                                          "Single (180 x 220 cm)":{type:Number},
                                          "Double (220 x 220 cm)":{type:Number},
                                          "Double (200 x 200 cm)":{type:Number},
                                          "Double (200 x 220 cm)":{type:Number},
                                          "King (240 x 220 cm)":{type:Number},
                                          "Superking (260 x 240 cm)":{type:Number},
                                          "Emperor (290 x 260 cm)":{type:Number},
                                    },
                        CARE:[{type:String},],
                        ORIGIN:{type:String},
                      },
     imagelink1:{type:String},                                 
     imagelink2:{type:String},                                  
     imagelink3:{type:String},                                 
     imagelink4:{type:String},                                 
     imagelink5:{type:String},                            
     imagelink6:{type:String},                           
     imagelink7:{type:String},                           
     imagelink8:{type:String}, 
})


const Bedroom =mongoose.model("bedroom",bedroomSchema);

module.exports =Bedroom;