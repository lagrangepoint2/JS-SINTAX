// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'j54zic5myt78e553',
    password: 'qxk36e200akj1pcj',
    database: 'xab9uqbcld3rat3s'
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;