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

var result;
/* GET /vertretungsplan listing. */
router.get('/', function(req, res, next) {
    connection.query("SELECT * FROM classes", function (err, rowsClass, fields) {
      connection.query("SELECT T.teacher_name FROM teacher AS C INNER JOIN classes AS c ON C.teacher_id = T.id WHERE C.teacher_id = 123", function (err, rowsTeacher, fields){
        console.log(fields)
        res.render('vertretungsplan', {data: rowsClass, dataTeacher: rowsTeacher})
      })   
    });
  });

module.exports = router;
