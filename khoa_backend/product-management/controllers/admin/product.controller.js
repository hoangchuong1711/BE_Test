const product = require("../../models/products.model");
const filterStatusHelper = require("../../helpers/filterStatus");
// [GET] /admin/products
module.exports.index = async (req, res) => {
    const filterStatus= filterStatusHelper(req.query);

    // console.log(req.query.status);
    let find={
        deleted: false,
    };
    if(req.query.status) {
        find.status= req.query.status;
    }

    let keyword="";

    if(req.query.keyword) {
        keyword= req.query.keyword
        const re = new RegExp(keyword, "i");
        find.title= re;
    }

    const products = await product.find(find);
    //console.log(products);
    res.render("admin/pages/products/index", {
        pageTitle: "Trang tong quan",
        products: products,
        filterStatus: filterStatus,
        keyword: keyword
    });
};
