var express = require('express');
var mysql = require('mysql2');
require('dotenv').config
var router = express.Router();

let connection = mysql.createConnection({

    host: process.env.HOST,
    port: '3306',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE

});

connection.connect(function(err) {

    if (err) { throw err; }
    console.log('Connected to database');

});

module.exports = router