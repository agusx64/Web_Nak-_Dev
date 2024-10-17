var express = require('express');
const OpenAI = require("openai");
require('dotenv').config();
var router = express.Router();

const openai = new OpenAI({

    apiKey: process.env.OPENAI_KEY

});

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

module.exports = router;