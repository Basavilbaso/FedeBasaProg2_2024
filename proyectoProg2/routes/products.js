const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");

router.get("/", productsControllers.products);
router.get("/detail/:id", productsControllers.productDetail);
router.get("/product-add", productsControllers.productAdd);
router.get("/search", productsControllers.search);



module.exports = router;