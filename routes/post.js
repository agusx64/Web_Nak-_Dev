var express = require('express');
const OpenAI = require("openai");
require('dotenv').config();
var router = express.Router();
var database = require('./sql');

module.exports = router;