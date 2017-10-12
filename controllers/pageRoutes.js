var db = require('../models')

var path = require('path');

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test-modal.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test-about-t.html"));
  });

  app.get("/courses", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test-course.html"));
  });

  app.get("/lesson", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test-lesson.html"));
  });
}