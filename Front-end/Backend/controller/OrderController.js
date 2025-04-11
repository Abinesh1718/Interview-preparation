const orderModel = require("../model/OrderModel")

exports.createOrder=async (req,res)=>{
    const cartItems=req.body
    const amount =cartItems.reduce((acc,value)=>(acc + value.product.price*value.product.qty),0)
    console.log("ANOUNT",amount);
    let body={
        cartItems:cartItems,
        amount,
        status:"Pending"
    }
    
try {
    const orderData=await orderModel.create(body)
    res.status(200).json({success:true,msg:"Order Created",orderData})


} catch (error) {
    res.status(404).json({success:false,msg:"Order Not Created"})

}
}

