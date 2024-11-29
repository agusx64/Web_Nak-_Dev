var express = require('express');
const OpenAI = require("openai");
const nodemailer = require('nodemailer');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
require('dotenv').config();
var router = express.Router();

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(function(err) {
    if (err) { throw err; }
    console.log('Connected to database from API');
});

const openai = new OpenAI({

    apiKey: process.env.OPENAI_API_KEY

});

//Hola

//Here must be a code functions
router.post('/api_response', async function(req, res) {

    try {

        const APIprompt = req.body;
        var prompt_var = APIprompt.api_prompt;

        const completion = await openai.chat.completions.create({

            model: "gpt-4o-mini",
            messages: [

                { role: "system", content: "Eres un asistente chatbot y tu nombre es Hueviberto, que debe de atender a posibles clientes, solo debes de proporcionar la informacion necesaria para que el usuario pueda contactarse con la empresa, los datos que debes de proporcionar son los siguientes, numero telefonico: 55 3232 8238 y nombre del contacto: NAKÚ, ubicacion: https://maps.app.goo.gl/q1ow2phNWDxWnQgm9, los pructos que ofrecemos son: conos de huevo al menudeo y cajas de huevo a mayoreo y menudeo, el usuario solo tiene tres intentos, debes de proporcionar la informacion en esos tres intentos" },
                { role: "user", content: prompt_var }

            ],

        });

        // Envía la respuesta al cliente
        res.json(completion.choices[0].message);
        console.log(completion.choices[0].message);
        
    } catch (error) {

        console.error('Error al obtener la respuesta de OpenAI:', error);
        res.status(500).send('Error en el servidor');

    }

});

const transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {

        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL
    
    

    },

})

router.post('/send_email', async function(req, res) {

    const userData = req.body
    console.log(userData);

    const mailOptions = {
        from: 'naku0824@gmail.com',
        to: 'naku0824@gmail.com',
        subject: 'Solicitud de Información',
        html: `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <!-- Contenedor centrado para la imagen y el texto -->
            <table width="100%" cellpadding="0" cellspacing="0" style="text-align: center;">
                <tr>
                    <td>
                        <img style="width: 50px; height: 50px;" src="https://res.cloudinary.com/dj4jsxc1l/image/upload/v1730838948/vrjiyx487qxcuubcl7kw.png" alt="logo" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1 style="font-size: 30px; font-family: 'Times New Roman', serif; color: #4CAF50; margin: 10px 0;">NAKÚ</h1>
                    </td>
                </tr>
            </table>
            <!-- Información del usuario -->
            <h2 style="color: #4CAF50;">Solicitud de Información</h2>
            <p><strong>Nombre:</strong> ${userData.full_name}</p>
            <p><strong>Teléfono:</strong> ${userData.telephone}</p>
            <p><strong>Correo Electrónico:</strong> ${userData.mail}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; color: #555;">${userData.text}</p>
            <!-- Pie de página -->
            <footer style="margin-top: 20px; text-align: center; color: #aaa; font-size: 12px;">
                <p>Este mensaje fue enviado automáticamente desde el formulario de contacto.</p>
            </footer>
        </div>`
    };
    

    try {

        await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado correctamente');
        res.status(200).send('Correo enviado');

    } catch (error) {

        console.error('Error al enviar el correo electrónico:', error.message);
        res.status(500).send('Error en el servidor');
        
    }
    

})

router.post('/forgot_password', function(req, res) {

    let email = req.body.mail;
    console.log(email);
    
    const query = 'SELECT * FROM usuarios WHERE email = ?'

    connection.query(query, [email], function(err, result) {

        if (err) return res.status(500).json({ message: 'Error en el servidor' });
        if (result.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });

        const token = crypto.randomBytes(20).toString('hex');
        const expires = Date.now() + 3600000;

        console.log(token, expires, result);

        const updateQuery = 'UPDATE usuarios SET reset_token = ?, reset_token_expires = ? WHERE email = ?'

        connection.query(updateQuery, [token, expires, email], function(err, result) {

            if (err) return res.status(500).json({ message: 'Error al guardar el token' });

            const mailOptions = {

                from: process.env.USER_EMAIL,
                to: email,
                subject: 'Recuperar contraseña',
                text: `Haz clic en el siguiente enlace para reestablecer tu contraseña: http://naku.fly.dev/reset_password/${token}`

            }

            transporter.sendMail(mailOptions, function(err, info){

                if (err) return res.status(500).json({ message: 'Error al enviar el correo' });
                res.status(200).json({ message: 'Correo enviado con éxito' });

            })

        });

    });

});

router.get('/reset_password/:token', function(req, res){

    const { token } = req.params;
    const query = 'SELECT * FROM usuarios WHERE reset_token = ? AND reset_token_expires > ?';

    connection.query(query, [token, Date.now()], function(err, result) {

        if (err) return res.status(500).send('Error en el servidor');
        if (result.length === 0) return res.status(400).send('Token inválido o expirado');
        res.render('update_password', { token }); // Envía el token a la vista

    });

})

router.post('/reset_password/:token', function(req, res) {

    const token = req.params.token;
    const password = req.body.password;
    const query = 'SELECT * FROM usuarios WHERE reset_token = ? AND reset_token_expires > ?'

    connection.query(query, [token, Date.now()], function(err, result) {

        if (err) return res.status(500).send('Error en el servidor');
        if (result.length === 0) return res.status(400).send('Token inválido o expirado');

        bcrypt.hash(password, 10, function(err, hashedPassword) {

            if (err) return res.status(500).send('Error al hashear la contraseña');
            const updateQuery = 'UPDATE usuarios SET contrasena = ?, reset_token = NULL, reset_token_expires = NULL WHERE id = ?'

            connection.query(updateQuery, [hashedPassword, result[0].id], function(err, result){

                if (err) return res.status(500).send('Error al actualizar la contraseña');
                res.render('insec', { message: '¡Contraseña actualizada con éxito!' });

            });
            
        });

    });

});

module.exports = router;