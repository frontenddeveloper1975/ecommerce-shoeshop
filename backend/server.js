import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import ImportData from './DataImport.js';
import productRoute from './Routes/ProductRoutes.js';
import { errorHandler, notFound } from './Middleware/Errors.js';
import userRoute from './Routes/UserRoutes.js';
import orderRouter from './Routes/orderRoutes.js';


dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// // LOAD PRODUCT FROM SERVER
// app.get("/api/products", (req, res) => {
//     res.json(products);
// })

// // LOAD SINGLE PRODUCT FROM SERVER
// app.get("/api/product/:id", (req, res) => {
//     const product = products.find(item => item._id === req.params.id);
//     res.json(product);
// })

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRouter);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));