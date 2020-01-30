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

connection.query("SELECT * FROM teacher", function (err, rows, fields) {
  if (err) console.log(error)
  result = rows;
})

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
    var today = new Date()
    var day = today.getDay();
    var month = (today.getMonth()+1);
    var year = today.getFullYear();
    var date = (`${day} ${month} ${year}`)
    
    
})

module.exports = router;
