var db = require('../models')

module.exports = function(app) {
  app.get("/official_lessons", function(req, res) {
    db.lessons.findAll({
        where:{
            owner: ""
        }
    }).then(function(dbLessons){
        res.render('official_courses', dbLessons)
  });

  app.get("/community_lessons", function(req, res) {
    
  });