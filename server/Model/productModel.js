const mongoose = require("mongoose");
const ProductSchema = require('../Migration/ProductSchema.json')
const productSchema = new mongoose.Schema(ProductSchema);

module.exports = mongoose.model("productModel", productSchema);
