const db = require("../databse/models");
const bcryptjs = require("bcryptjs");
const op = db.Sequelize.Op;
const products = db.Product;

const productsControllers = {
    products: function(req, res){
    return res.render('index')
},

productDetail: function(req, res){
    return res.render('product')
},

productAdd: function(req, res){
    return res.render('product-add')
},

search: function(req, res){
        return res.render('search-results');
}
};

module.exports = productsControllers;