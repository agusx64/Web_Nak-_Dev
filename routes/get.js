var express = require('express');
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