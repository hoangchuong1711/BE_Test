const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    thumbnail: { type: String },
    status: {
        type: String,
        enum: ["active", "inactive", "draft"],
        default: "active",
    },
    position: { type: Number, default: 0 },
    deleted: { type: Boolean, default: false },
});

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
