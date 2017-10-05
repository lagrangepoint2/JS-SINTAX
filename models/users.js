module.exports = function(sequelize, dataTypes){
    var user = sequelize.define("users", {
        name_first: dataTypes.STRING,
        name_last: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING
    });
    return user;
}