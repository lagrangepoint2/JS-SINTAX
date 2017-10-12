var db = require("../models");

var path = require("path");

module.exports = function(app) {
  app.get("/login/:user/:pass", function(req, res) {
    console.log("login request accepted");
    db.users
      .findOne({
        where: {
          email: req.params.user,
          password: req.params.pass
        }
      })
      .then(function(dbUsers) {
        console.log(dbUsers);
        res.redirect('/courses');
      });
  });

    app.post("/api/newUser", function(req, res) {
      db.users
        .create({
          name_first: req.body.first_name,
          name_last: req.body.last_name,
          email: req.body.email,
          password: req.body.password
        })
        .then(function(dbUsers) {
          // res.json(dbUsers);
              res.redirect('/courses');
        });
    });
};
