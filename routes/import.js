require('dotenv').config()

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser')

var result;

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});
connection.connect()
//var jsonParser = bodyParser.json()
connection.query("USE vertretungsplan");

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM teacher", function (err, rows, fields) {
    if (err) console.log(error)
    result = rows;
    res.render('import', { data: result });
  })
});

router.post('/', function(req, res, next){
    var className = req.body.class;
    var hourName = req.body.hour;
    var teacher = req.body.teacher;
    var subject = req.body.subject;
    var room = req.body.room;
    var reason = req.body.reason;

    connection.query(`INSERT INTO classes (class, hour, classroom, subject, reason, teacher_id) VALUES("${className}", "${hourName}", "${room}", "${subject}", "${reason}", ${teacher});`, function (err, rows, fields) {
      if (err) console.log(err)
      result = rows;
      res.redirect('/import');
    })
    
    
})

module.exports = router;
