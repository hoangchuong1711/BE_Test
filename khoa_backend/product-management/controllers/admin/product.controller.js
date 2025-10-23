const product = require("../../models/products.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const Product = require("../../models/products.model");
const paginationHelper = require("../../helpers/pagination");

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

    const objectSearch= searchHelper(req.query);

    if(objectSearch.regex) {
        find.title= objectSearch.regex;
    }

    //pagination
    const countProduct = await Product.countDocuments(find);
    let objectPagination=paginationHelper(
        {
        currentPage:1,
        limitItem:4
        },
        req.query,
        countProduct
    )
    
    const products = await product.find(find).limit(objectPagination.limitItem).skip(objectPagination.skip);
    
    //console.log(products);
    res.render("admin/pages/products/index", {
        pageTitle: "Trang tong quan",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
};
