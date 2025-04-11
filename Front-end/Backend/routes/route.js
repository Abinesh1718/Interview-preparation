const express =require('express')
const { getProducts, getSingleProduct, getListCategoryBased, getSearchProduct } = require('../controller/ProductController')
const { createOrder } = require('../controller/OrderController')
const route=express.Router()


route.get("/products",getProducts)

route.get("/product/:id",getSingleProduct)
route.post("/product/category",getListCategoryBased)
route.post("/product/search",getSearchProduct)

route.post("/order",createOrder)


module.exports=route