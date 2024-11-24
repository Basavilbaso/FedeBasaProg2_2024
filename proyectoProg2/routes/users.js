const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");

router.get("/register", usersControllers.showregister);
router.get("/login", usersControllers.showlogin);

module.exports = router;