var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });
  connection.connect()
  //var jsonParser = bodyParser.json()
  connection.query("USE vertretungsplan");


/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query("SELECT * FROM classes", function (err, rows, fields) {
      connection.query("SELECT * FROM teacher JOIN classes ON teacher.id")
    })
  });

module.exports = router;
