var express = require('express');
const OpenAI = require("openai");
require('dotenv').config();
var router = express.Router();
var database = require('./sql')

//Here must be a code functions
router.post('/send_email', function(req, res){

    const userData = req.body;
    console.log(userData);

})


module.exports = router;