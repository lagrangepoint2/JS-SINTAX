var users = require('users.js');

module.exports = function(sequelize, dataTypes){
    var lesson = sequelize.define("lessons", {
        title: dataTypes.STRING,
        creator: dataTypes.STRING,
        body: dataTypes.STRING,
        rating: dataTypes.INTEGER,
    });

    lesson.belongsTo(users);
}