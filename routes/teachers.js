require('dotenv').config()

var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var result;

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});
connection.connect()

connection.query("USE vertretungsplan");

connection.query("SELECT * FROM teacher", function (err, rows, fields) {
  if (err) console.log(error)
  result = rows;
})

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM teacher", function (err, rows, fields) {
    if (err) console.log(error)
    result = rows;
    res.render('teachers', { data: result });
  })
});

module.exports = router;
