var express = require('express');
const OpenAI = require("openai");
const multer = require('multer');
const mysql = require('mysql2');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
require('dotenv').config();
var router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ dest: '/uploads' });

cloudinary.config({

    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET

})

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

router.post('/insert_description', function(req, res){

    let JSONDescription = req.body;
    let insert_text = JSONDescription.description;
    console.log(insert_text);

    let insert_query = 'INSERT INTO registro_inicio (descripcion) VALUES (?)';

    connection.query(insert_query, [insert_text], function (error, results) {

        if (error) throw error;
        console.log('Descripcion changed successfully', results);

    });


});

router.post('/insert_image', upload.single('background_image'), async function(req, res){

    try {

        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath, {

            folder: 'imagenes_inicio'

        });

        const imageURL = result.secure_url;
        console.log('Image uploaded successfully', imageURL);

        let insert_query = `UPDATE registro_inicio
        SET img_producto = ?
        WHERE id = (
            SELECT id FROM (
                SELECT id
                FROM registro_inicio
                ORDER BY created_at DESC
                LIMIT 1
            ) AS temp
        );`

        connection.query(insert_query, [imageURL], function (error, results) {

            if (error) throw error
            console.log('Image changed successfully', results);

        });

    } catch(error)  {
        console.error("Error al subir la imagen:", error);
        res.status(500).send("Hubo un error al subir la imagen.");
    }

});

router.post('/insert_slogan', function(req, res){

    let slogan = req.body;
    let insert_text = slogan.slogan;
    console.log(insert_text);

    let insert_query = `UPDATE registro_inicio
                        SET slogan = ?
                        WHERE id = (
                            SELECT id FROM (
                                SELECT id
                                FROM registro_inicio
                                ORDER BY created_at DESC
                                LIMIT 1
                            ) AS temp
                        );`

    connection.query(insert_query, [insert_text], function(error, results){

        if (error) throw error
        console.log('Slogan changed successfully', results);

    })

});


module.exports = router;