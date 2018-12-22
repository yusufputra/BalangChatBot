var mysql = require('mysql');

var con = mysql.createConnection({
  host: "http://db.hosting.ub.ac.id/",
  user: "bemfilkom",
  password: "rpqrcdfzch",
  database: "db_bemfilkom"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;