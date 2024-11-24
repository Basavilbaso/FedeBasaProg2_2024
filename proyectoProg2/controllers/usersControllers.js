const usersControllers = {
    showregister: function(req, res){
        return res.render('register');
    },

    showlogin: function(req, res){
        return res.render('login');
    },

};

module.exports = usersControllers;