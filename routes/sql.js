var express = require('express');
var mysql = require('mysql2');
require('dotenv').config();
var router = express.Router();

// Verificar si las variables de entorno están definidas
if (process.env.HOST && process.env.USER && process.env.PASSWORD && process.env.DATABASE) {
    let connection = mysql.createConnection({
        host: process.env.HOST,
        port: '3306',
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    // Si quieres habilitar la conexión más adelante, solo descomenta el bloque a continuación
    // connection.connect(function(err) {
    //     if (err) { throw err; }
    //     console.log('Connected to database');
    // });

} else {
    console.log('No database configuration found, skipping connection.');
}

module.exports = router;
