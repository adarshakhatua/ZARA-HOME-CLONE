const mongoose = require ("mongoose");


const productSchema = new mongoose.Schema({
    productId:{type:String, required:true},
    productCategory:{type:String, required:true},
},
{
    versionKey:false,
    timestamps:true,
})

const Product =mongoose.model("product",productSchema);

module.exports=Product;