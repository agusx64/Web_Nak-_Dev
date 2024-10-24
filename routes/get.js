var express = require('express');
var sql  = require('./sql');
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

module.exports = router;

router.get('/chatbot', function(req, res) {

    res.render('chathv');

})

module.exports = router;
router.get('/recetas', function(req, res) {

    res.render('recetas');

})

module.exports = router;

router.get('/celular', function(req, res) {

    res.render('celular');

})

module.exports = router;