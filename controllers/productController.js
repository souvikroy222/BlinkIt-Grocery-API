const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const fs=require('fs')
const {upload}=require('../utils/helper')

//@description add new product
//@route POST /api/products/create
//@access public
const createProduct = asyncHandler(async (req, res,next) => {
    if(!req.files){
        res.status(400)
        throw new Error('no file uploaded')
    }
    const files=req.files
    try {
        let urls=[]
        let multiple=async(path)=>await upload(path)
        for(const file of files){
            const {path}=file
            console.log(file)
            const newPath=await multiple(path)
            urls.push(newPath)
            fs.unlinkSync(path)
        }
        if(urls){
            const product=new Product({
                brand : req.body.brand,
                inventory:req.body.brand,
                name:req.body.brand,
                newPrice: req.body.brand,
                oldPrice :req.body.brand,
                offer:req.body.brand,
                images:req.body.multiple_image,
                country_of_origin:req.body.brand,
                customer_care_details:req.body.brand,
                description:req.body.brand,
                disclaimer:req.body.brand,
                key_features:req.body.brand,
                manufacturer_details:req.body.brand,
                shelf_life:req.body.brand,
              }) = req.body;
              const newProduct=await product.save()
              if(newProduct){
                res.status(200)
                res.json({msg:"product created"}) 
              }}
        else{
            res.status(400)
             throw new Error('product created fail')
        }
    } catch (error) {
        res.status(400)
        throw new Error('cloduinary error occured')        
    } 
});

module.exports={createProduct}