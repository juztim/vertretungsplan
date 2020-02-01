var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var HandlebarsIntl = require('handlebars-intl');
var Handlebars     = require('handlebars');

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });
  connection.connect()
  connection.query("USE vertretungsplan");
  HandlebarsIntl.registerWith(Handlebars);

var result;
/* GET /vertretungsplan listing. */
router.get('/', function(req, res, next) {
    connection.query(`SELECT
    c.*, t.teacher_name
    FROM classes AS c
    INNER JOIN teacher as t
    ON c.teacher_id=t.id;
    `, function (err, rows, fields) {
      console.log(rows)
      res.render('vertretungsplan', {data: rows, date: new Date()})
    });
  });

module.exports = router;
