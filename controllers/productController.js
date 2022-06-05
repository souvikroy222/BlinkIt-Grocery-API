const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const fs = require("fs");
const upload = require("../utils/helper");

//@description add new product
//@route POST /api/products/create
//@access public
const createProduct = asyncHandler(async (req, res) => {
  if (!req.files) {
    res.status(400);
    throw new Error("no file uploaded");
  }
  const files = req.files;
  console.log(files);

  let urls = [];
  let multiple = async (path) => await upload(path);
  for (const file of files) {
    const { path } = file;
    const newPath = await multiple(path);
    urls.push(newPath);
    fs.unlinkSync(path);
  }
  if (urls) {
    console.log(urls);
    const product = new Product({
      brand: req.body.brand,
      category: req.body.category,
      inventory: req.body.inventory,
      name: req.body.name,
      newPrice: req.body.newPrice,
      oldPrice: req.body.oldPrice,
      offer: req.body.offer,
      images: urls,
      country_of_origin: req.body.country_of_origin,
      customer_care_details: req.body.customer_care_details,
      description: req.body.description,
      disclaimer: req.body.disclaimer,
      key_features: req.body.key_features,
      manufacturer_details: req.body.manufacturer_details,
      shelf_life: req.body.shelf_life,
    });
    const newProduct = await product.save();
    if (newProduct) {
      res.status(200);
      res.json(newProduct);
    }
  } else {
    res.status(400);
    throw new Error("product created fail");
  }
});

//@description add new product
//@route POST /api/products/:id
//@access public
const getSingleProduct = asyncHandler(async (req, res) => {
  const findProductID = req.params.id;
  const findProduct = await Product.findById({ findProductID });
  if (findProduct) {
    res.json(findProduct);
  } else {
    res.status(200).json("the product not found");
  }
});

module.exports = { createProduct, getSingleProduct };
