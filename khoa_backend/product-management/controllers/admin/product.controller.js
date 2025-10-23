const product = require("../../models/products.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const Product = require("../../models/products.model");

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
    let objectPagination={
        currentPage:1,
        limitItem:4
    }

    if(req.query.page){
        objectPagination.currentPage=parseInt(req.query.page);
    }

    objectPagination.skip=(objectPagination.currentPage-1) * objectPagination.limitItem

    const countProduct = await Product.countDocuments(find);
    const totalPage=Math.ceil(countProduct/objectPagination.limitItem);
    const products = await product.find(find).limit(objectPagination.limitItem).skip(objectPagination.skip);
    objectPagination.totalPage=totalPage;
    
    
    //console.log(products);
    res.render("admin/pages/products/index", {
        pageTitle: "Trang tong quan",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
};
