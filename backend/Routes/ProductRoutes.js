import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../Models/ProductModel.js';

const productRoute = express.Router();

// GET ALL PRODUCTS
productRoute.get(
    "/",
    asyncHandler(async (req, res) => {
        const products = await Product.find();
        res.json(products);
    })
);

// GET SINGLE PRODUCT
productRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const id = req.params.id;
        const product = await Product.findById(id);
        
        if(product) {
            res.json(product);
            return;
        } else {
            res.status(404).send("Fail");
            throw new Error("Product not Found");
        }
    })
);

export default productRoute;