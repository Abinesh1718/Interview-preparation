const ProductModel = require("../model/productModel")

exports.getProducts=async (req,res)=>{

    const data=await ProductModel.find()
    res.status(200).json({success:true,msg:"Product listed",data})
}



exports.getSingleProduct=async(req,res)=>{
    const id = req.params.id;

    try {
        const data=await ProductModel.findById(id)
    res.status(200).json({success:true,msg:"Product listed",data})
    } catch (error) {
        return res.status(500).json({success:false,msg:"Error"})
    }

}


exports.getListCategoryBased=async(req,res)=>{
    const category = req.body.category
    try {
        const data=await ProductModel.find({category})
    res.status(200).json({success:true,msg:"Product listed",data})
    } catch (error) {
        return res.status(500).json({success:false,msg:"Error"})
    }

}
exports.getSearchProduct = async (req, res) => {
    const { search } = req.body;

    if (!search || search.trim() === "") {
        return res.status(400).json({ success: false, msg: "Search term is required" });
    }

    try {
        const data = await ProductModel.find({
             $or : [
            { title: { $regex: search,} },
            { description: { $regex: search,} }
        ]
        });

        res.status(200).json({ success: true, msg: "Product listed", data });
    } catch (error) {
        console.error("Search Error:", error);  
        res.status(500).json({ success: false, msg: "Server error" });
    }
};
