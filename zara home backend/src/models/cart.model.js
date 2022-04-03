const mongoose = require ("mongoose");
const Footwear_kids = require("./footwear_kids.model");

const cartSchema = new mongoose.Schema({
    productId:{type:String, required:true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    qty:{type:Number,required:true}
},
{
    versionKey:false,
    timestamps:true,
})

const Cart = mongoose.model("cart",cartSchema);

module.exports = Cart;