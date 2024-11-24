const db = require("../databse/models");
const bcryptjs = require("bcryptjs");
const op = db.Sequelize.Op;
const products = db.Product;

const productsControllers = {
    products: function(req, res){
        let filtrado = {
            include: [
              {association: "user"}],
            order:[["createdAt", "DESC"]],
          };

        products.findAll(filtrado)
        .then(function(results){
            return res.render('homePage', {products: results});
        })
        .catch(function(e) {
            return console.log(e);
        });
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