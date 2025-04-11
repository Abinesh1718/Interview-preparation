const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    category:String,
    image: String

})


const ProductModel=mongoose.model('products',ProductSchema)

module.exports=ProductModel
