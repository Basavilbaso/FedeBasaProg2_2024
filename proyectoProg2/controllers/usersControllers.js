const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const op = db.Sequelize.Op;
const users = db.User;

const usersControllers = {
    showregister: function(req, res){
        return res.render('register');
    },

    showlogin: function(req, res){
        return res.render('login');
    },

};

module.exports = usersControllers;