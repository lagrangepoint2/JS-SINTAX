var db = require('../models');

module.exports = function(app){
    app.get('/api/users', function(req, res){
        db.user.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(function(dbUser){
            res.json(dbUser)
        });
    });
    
    app.post('/api/newUser', function(req, res){
         db.user.create({
             name_first: req.body.firstname,
             name_last: req.body.lastname,
             email: req.body.email,
             password: req.body.password
        }).then(function(dbUser){
             res.json(dbUser);
        });
    });
}