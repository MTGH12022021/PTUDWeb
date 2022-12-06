const Product = require("../models/Product");
const Category = require("../models/Category");
const utils = require("../utils/mongoose");
const utilsPagination = require("../utils/pagination");


async function getAllProduct(req, res) {
    let perPage = 6,
        page = Math.max(parseInt(req.param("page")) || 1, 1);
    if (req.param("page") == null) {
        page = 1;
    }

    const products = await Product.find({})
        .skip(perPage * (page - 1))
        .limit(perPage);

    const size = await Product.count({});
    const sizePage = Math.max(parseInt(size / perPage + 1));

    const categories = await Category.find({});
    const leftPage = await utilsPagination.getLeftPage(
        "/shop-grid",
        page,
        sizePage
    );
    const pagination = await utilsPagination.getPagination(
        "/shop-grid",
        page,
        sizePage
    );
    const rightPage = await utilsPagination.getRightPage(
        "/shop-grid",
        page,
        sizePage
    );

    let latestProducts = await Product.find({});
    latestProducts = latestProducts.slice(0, 3);

    res.render("shop-grid/shop-grid", {
        products: utils.mutipleMongooseToObject(products),
        size: size,
        currentPage: page,
        category: utils.mutipleMongooseToObject(categories),
        pagination: pagination,
        leftPage: leftPage,
        rightPage: rightPage,
        latestProducts: utils.mutipleMongooseToObject(latestProducts),
    });
}



module.exports = {
    getAllProduct
}