import express from "express";
import mongoose from "mongoose";

import Product from "../models/Product.js";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product_controllers.js";

const router = express.Router();

export default router;

router.get("/", getProducts);

// allows for item creation on the webapp
router.post("/", createProduct);

//app.patch() // method lets you change indevidual attributes

// put() allows for updating all fields
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);