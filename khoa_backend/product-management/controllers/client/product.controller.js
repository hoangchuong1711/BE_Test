const Product = require("../../models/products.model");

module.exports.index = async (req, res) => {
    const product = await Product.find({
        status: "active",
        deleted: false
    });

    const newProduct = product.map(item => {
        item.newPrice= item.price-(item.price*item.discountPercentage/100);
        return item;
    })

    console.log(newProduct);
    res.render("client/pages/products/index",{
        pageTitle:"San Pham",
        product: newProduct
    });
};