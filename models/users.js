module.exports = function(sequelize, dataTypes){
    var users = sequelize.define("users", {
        name_first: dataTypes.STRING,
        name_last: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING
    });
    return users;
}