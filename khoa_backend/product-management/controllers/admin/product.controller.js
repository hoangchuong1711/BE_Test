const product = require("../../models/products.model");

// [GET] /admin/products
module.exports.index = async (req, res) => {
    const products = await product.find({
        deleted: false,
    });
    console.log(products);
    res.render("admin/pages/products/index", {
        pageTitle: "Trang tong quan",
        products: products
    });
};
