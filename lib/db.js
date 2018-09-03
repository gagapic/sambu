var mysql = require('mysql');
var db = mysql.createConnection({

  host:'123.21.33.187',
  user:'root',
  password:'1q1q',
  database:'opentutorials'
});
db.connect();
module.exports = db;