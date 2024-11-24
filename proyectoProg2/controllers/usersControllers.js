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
    login: function(req, res){
        let form = req.body;
        let filtrado = {
            where:{email: form.email}
        }
        users.findOne(filtrado)
        .then(function(results){
            if(!results){
                return res.send("Este email no existe");
            }else{
                let data = bcryptjs.compareSync(form.password, results.password);
                if(data){
                    req.session.user = results.dataValues;
                    return res.redirect("/products")
                }else{
                    return res.send("La contraseña es incorrecta");
                }
            }
        })
        .catch(function(e){
            return console.log(e);
        })
    },
};

module.exports = usersControllers;