const express = require("express");
const router = express.Router();
const { createProduct,getAllProducts } = require("../controllers/productController");


const multer = require("multer");

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log("file", file);
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        // console.log("multer file:", file);
        callback(null, file.originalname);
    }
});
let maxSize = 1000000 * 1000;
let upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
});

router.get('/allproducts',getAllProducts)
router.post("/create", upload.array("multiple_image", 4), createProduct);


module.exports = router;
