import express from 'express';
import users from './data/Users.js';
import User from './Models/UserModel.js';
import Product from './Models/ProductModel.js'
import products from './data/Products.js';
import asyncHandler from 'express-async-handler';

const ImportData = express.Router();

ImportData.post("/user",
asyncHandler(async (req, res) => {
        await User.remove({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })
);

ImportData.post(
    "/products", 
    asyncHandler(async (req, res) => {
            await Product.remove({});
            const importProduct = await Product.insertMany(products);
            res.send({ importProduct });
        })
    );

export default ImportData;