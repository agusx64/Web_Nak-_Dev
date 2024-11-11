var express = require('express');
const OpenAI = require("openai");
require('dotenv').config();
var router = express.Router();
var database = require('./sql');

router.post('/insert_description', function(req, res){

    let JSONDescription = req.body;
    console.log(JSONDescription);

});

module.exports = router;