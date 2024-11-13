var express = require('express');
const mysql = require('mysql2');
var router = express.Router();

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

router.get('/get_start_changes')

module.exports = router;