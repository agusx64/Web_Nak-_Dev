var express = require('express');
const OpenAI = require("openai");
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();
var router = express.Router();
var database = require('./sql');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

router.post('/insert_description', function(req, res){

    let JSONDescription = req.body;
    console.log(JSONDescription);

});

router.post('/insert_image', upload.single('background_image'), function(req, res){

    let image = req.file;
    console.log(image);

});

router.post('/insert_slogan', function(req, res){

    let slogan = req.body;
    console.log(slogan);

});


module.exports = router;