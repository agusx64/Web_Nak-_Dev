var express = require('express');
const mysql = require('mysql2');
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
    console.log('Connected to database from gets');
});

/* GET home page. */
router.get('/', function(req, res) {

    res.render('index');

});

//Here must be a code functions

router.get('/shop_page', function(req, res) {

    res.render('shop');

})

module.exports = router;

router.get('/cambios_admin', function(req, res) {

    res.render('admin');

});

router.get('/animate', function(req, res) {

    res.render('animate');

})

module.exports = router;

router.get('/inicio_admin', function(req, res) {

    res.render('insec');

})

router.get('/chatbot', function(req, res) {

    res.render('chathv');

})

router.get('/recetas', function(req, res) {

    res.render('recetas');

})

router.get('/celular', function(req, res) {

    res.render('celular');

})

//Selección de valor mas reciente para actualizacioón de index
router.get('/get_start_changes',function(req, res) {

    let select_query = 'SELECT * FROM registro_inicio ORDER BY created_at DESC LIMIT 1;'
    
    connection.query(select_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

})

//Selección para historial de cambios
router.get('/start_log', function (req, res) {

    let select_query = 'SELECT * FROM registro_inicio ORDER BY created_at DESC'

    connection.query(select_query, function (err, results) {

        if (err) throw err;
        res.json(results);

    });

});

router.get('/get_us_changes', function(req, res) {

    let select_query = 'SELECT * FROM registro_nosotros ORDER BY created_at DESC LIMIT 1;'

    connection.query(select_query, function (err, result) {

        if (err) throw err;
        res.json(result);
    });
});


router.get('/get_hist_changes', function(req, res) {

    let select_query = 'SELECT * FROM registro_historia ORDER BY created_at DESC LIMIT 1;'

    connection.query(select_query, function (err, result){

        if (err) throw err;
        res.json(result);

    });
});


module.exports = router;
