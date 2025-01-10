var express = require('express');
const OpenAI = require("openai");
const multer = require('multer');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
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
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE 
});

connection.connect(function(err) {
    if (err) { throw err; }
    console.log('Connected to database from POST');
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

router.post('/insert_product_1', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let product = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'producto_1'
            
        })

        const imageURL = result.secure_url;
        console.log('Product 1 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_producto1 (titulo, descripcion, img, slogan, precio) VALUES(?, ?, ?, ?, ?);'

        connection.query(insert_query, [product.titulo, product.descripcion, imageURL, product.slogan, product.precio], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted product on table 1');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})

router.post('/insert_product_2', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let product = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'producto_2'
            
        })

        const imageURL = result.secure_url;
        console.log('Product 2 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_producto2  (titulo, descripcion, img, slogan, precio) VALUES(?, ?, ?, ?, ?);'

        connection.query(insert_query, [product.titulo, product.descripcion, imageURL, product.slogan, product.precio], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted product on table 2');
            }
            
        });

        
    } catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})

router.post('/insert_product_3', upload.single('imagen'), async function(req, res){
    
    try{ 
        let image = req.file;
        let product = req.body;
        const path_img = image.path;

        const result = await cloudinary.uploader.upload(path_img, {

            folder: 'producto_3'
            
        })

        const imageURL = result.secure_url;
        console.log('Product 3 uploaded succesfully', imageURL);

        let insert_query = 'INSERT INTO registro_producto3 (titulo, descripcion, img, slogan, precio) VALUES(?, ?, ?, ?, ?);'
        
        connection.query(insert_query, [product.titulo, product.descripcion, imageURL, product.slogan, product.precio], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted product on table 3');

            }
            
        });

    } catch (err) {

        console.error(err);
    }
}); 

router.post('/insert_product_4', upload.single('imagen'), async function(req, res) {

    try{

        let image = req.file;
        let product = req.body;
        const path_img = image.path;

        const result = await cloudinary.uploader.upload(path_img, {

            folder: 'producto_4'

        })

        const imageURL = result.secure_url;
        console.log('Product 4 uploaded succesfully', imageURL);

        let insert_query = 'INSERT INTO registro_producto4 (titulo, descripcion, img, slogan, precio) VALUES(?, ?, ?, ?, ?);'

        connection.query(insert_query, [product.titulo, product.descripcion, imageURL, product.slogan, product.precio], function (err, result) {

            if (err) {

                throw err;

            } else {

                console.log('Inserted product on table 4');

            }

        });

    } catch (err) {

        console.error(err);

    }

});

    
router.post('/insert_mision', function(req, res){

    let data = req.body.mision;
    let insert_text = 'INSERT INTO registro_nosotros (mision) VALUES (?)'
    connection.query(insert_text, [data], function(error, results){
        if (error) throw error
        console.log('Mision changed successfully', results);
    });

});

router.post('/insert_image_mision', upload.single('image'), async function(req, res){

    let data = req.file.path;
    const result = await cloudinary.uploader.upload(data,{
        folder: 'imagenes_nosotros'
    })

    const imageURL = result.secure_url;
    console.log('Image uploaded successfully', imageURL);
    
    let insert_query = `UPDATE registro_nosotros
                        SET img_mision = ?
                        WHERE id = (
                            SELECT id FROM ( 
                                SELECT id
                                FROM registro_nosotros
                                ORDER BY created_at DESC
                                LIMIT 1
                            ) AS temp
                        );`
    connection.query(insert_query, [imageURL], function(error, results){
        if (error) throw error
        console.log('Image changed successfully', results);
    });

});

router.post('/insert_vision', function(req, res){

    let data = req.body.vision;
    let insert_query = `UPDATE registro_nosotros
                        SET vision = ?
                        WHERE id = (
                            SELECT id FROM (
                                SELECT id
                                FROM registro_nosotros
                                ORDER BY created_at DESC
                                LIMIT 1
                            ) AS temp
                        );`
    connection.query(insert_query, [data], function(error, results){
        if (error) throw error
        console.log('Vision changed successfully', results);
    });
});

router.post('/insert_image_vision', upload.single('image'), async function(req, res){

    let data = req.file.path
    const result = await cloudinary.uploader.upload(data,{
        folder: 'imagenes_nosotros'
    })

    const imageURL = result.secure_url;
    console.log('Image uploaded successfully', imageURL);
    
    let insert_query = `UPDATE registro_nosotros
                        SET img_vision = ?
                        WHERE id = (
                            SELECT id FROM (
                                SELECT id
                                FROM registro_nosotros
                                ORDER BY created_at DESC
                                LIMIT 1
                            ) AS temp
                        );`
    connection.query(insert_query, [imageURL], function(error, results){
        if (error) throw error
        console.log('Image changed successfully', results);
    });
    
    

});

router.post('/insert_historia', function(req, res){

    let data = req.body.historia;
    let insert_text = 'INSERT INTO registro_historia (texto_historia) VALUES (?)'
    connection.query(insert_text, [data], function(error, results){
        if (error) throw error
        console.log('Historia changed successfully', results);
    });
});

router.post('/insert_image_historia', upload.single('image'), async function(req, res){

    let data = req.file.path;
    const result = await cloudinary.uploader.upload(data,{
        folder: 'imagenes_historia'
    })

    const imageURL = result.secure_url;
    console.log('Image uploaded successfully', imageURL);

    let insert_query = `UPDATE registro_historia
                        SET img_carousel_1 =?
                        WHERE id = (
                            SELECT id FROM (
                                SELECT id
                                FROM registro_historia
                                ORDER BY created_at DESC
                                LIMIT 1
                            ) AS temp
                        );`
    connection.query(insert_query, [imageURL], function(error, results){
        if (error) throw error
        console.log('Image changed successfully', results);
    });

})

router.post('/insert_image_historia1', upload.single('image'), async function(req, res){

    let data = req.file.path;
    const result = await cloudinary.uploader.upload(data,{
        folder: 'imagenes_historia'
    })

    const imageURL = result.secure_url;
    console.log('Image uploaded successfully', imageURL);

    let insert_query = `UPDATE registro_historia
                        SET img_carousel_2 =?
                        WHERE id = (
                            SELECT id FROM (
                                SELECT id
                                FROM registro_historia
                                ORDER BY created_at DESC
                                LIMIT 1
                            ) AS temp
                        );`
    connection.query(insert_query, [imageURL], function(error, results){
        if (error) throw error
        console.log('Image changed successfully', results);
    });

})

router.post('/insert_image_historia2', upload.single('image'), async function(req, res){

    let data = req.file.path;
    const result = await cloudinary.uploader.upload(data,{
        folder: 'imagenes_historia'
    })

    const imageURL = result.secure_url;
    console.log('Image uploaded successfully', imageURL);

    let insert_query = `UPDATE registro_historia
                        SET img_carousel_3 = ?
                        WHERE id = (
                            SELECT id FROM (
                                SELECT id
                                FROM registro_historia
                                ORDER BY created_at DESC
                                LIMIT 1
                            ) AS temp
                        );`
    connection.query(insert_query, [imageURL], function(error, results){
        if (error) throw error
        console.log('Image changed successfully', results);
    });

})


router.post('/insert_team_image1', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let team = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'perfil_1'
            
        })

        const imageURL = result.secure_url;
        console.log('Team 1 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_perfil1 (img_perfil, cargo, descripcion_perfil) VALUES(?, ?, ?);'

        connection.query(insert_query, [imageURL, team.cargo, team.descripcion], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted team on table 1');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})

router.post('/insert_team_image2', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let team = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'perfil_2'
            
        })

        const imageURL = result.secure_url;
        console.log('Team 2 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_perfil2 (img_perfil, cargo, descripcion_perfil) VALUES(?, ?, ?);'

        connection.query(insert_query, [imageURL, team.cargo, team.descripcion], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted team on table 2');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})

router.post('/insert_team_image3', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let team = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'perfil_3'
            
        })

        const imageURL = result.secure_url;
        console.log('Team 3 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_perfil3 (img_perfil, cargo, descripcion_perfil) VALUES(?, ?, ?);'

        connection.query(insert_query, [imageURL, team.cargo, team.descripcion], function (err, result){

            if (err) {
                
                throw err;

            }else {
                
                console.log('Inserted team on table 3');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})

router.post('/insert_testimony1', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let testim = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'testimonio_1'
            
        })

        const imageURL = result.secure_url;
        console.log('Testimony 1 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_testimonio1 (img_testimonio, nombre, descripcion_testimonio) VALUES(?, ?, ?);'

        connection.query(insert_query, [imageURL, testim.nombre, testim.testimonio], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted testimony on table 1');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})


router.post('/insert_testimony2', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let testim = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'testimonio_2'
            
        })

        const imageURL = result.secure_url;
        console.log('Testimony 2 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_testimonio2 (img_testimonio, nombre, descripcion_testimonio) VALUES(?, ?, ?);'

        connection.query(insert_query, [imageURL, testim.nombre, testim.testimonio], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted testimony on table 2');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})


router.post('/insert_testimony3', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let testim = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'testimonio_3'
            
        })

        const imageURL = result.secure_url;
        console.log('Testimony 3 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_testimonio3 (img_testimonio, nombre, descripcion_testimonio) VALUES(?, ?, ?);'

        connection.query(insert_query, [imageURL, testim.nombre, testim.testimonio], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted testimony on table 3');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})


router.post('/insert_description_testimony', function(req, res){

    let data = req.body.descriptionTestimony;
    let insert_text = 'INSERT INTO registro_testimonio (descripcion_testimonio) VALUES (?)'
    connection.query(insert_text, [data], function(error, results){
        if (error) throw error
        console.log('DescriptionTestimony changed successfully', results);
    });

});

router.post('/insert_desayunos', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let desayuno = req.body;
        let path = image.path;    

        const result = await cloudinary.uploader.upload(path, {

            folder: 'recetas_desayunos'

        })

        const imageURL = result.secure_url;
        console.log('Desayunos uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_desayuno (nombre, descripcion, ingredientes, preparacion, imagen) VALUES (?, ?, ?, ?, ?)';

        connection.query(insert_query, [desayuno.nombre, desayuno.descripcion, desayuno.calorias, desayuno.preparacion, imageURL], function (err, result) {

            if (err) throw err;
            console.log('Inserted desayunos on table');

        })

    } catch (err) {

        console.log('Error inserting data into table', err);

    }

});

router.post('/insert_comidas', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let comida = req.body;
        let path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'recetas_comidas'

        })

        const imageURL = result.secure_url;
        console.log('Comidas uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_comida (nombre, descripcion, ingredientes, preparacion, imagen) VALUES (?, ?, ?, ?, ?)';

        connection.query(insert_query, [comida.nombre, comida.descripcion, comida.calorias, comida.preparacion, imageURL], function (err, result) {

            if (err) throw err;
            console.log('Inserted comidas on table');

        });

    } catch (err) {

        console.log('Error inserting data into table', err);

    }

});

router.post('/insert_postres', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let postre = req.body;
        let path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'recetas_postres'

        });

        const imageURL = result.secure_url;
        console.log('Postres uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_postre (nombre, descripcion, ingredientes, preparacion, imagen) VALUES (?, ?, ?, ?, ?)';

        connection.query(insert_query, [postre.nombre, postre.descripcion, postre.calorias, postre.preparacion, imageURL], function (err, result) {

            if (err) throw err;
            console.log('Inserted postres on table');

        });

    } catch (err) {

        console.log('Error inserting data into table', err);

    }

});


router.post('/insert_location', upload.none(), function (req, res) {
    let location = req.body;
    console.log('Datos recibidos:', location);

    if (!location.descripcion || !location.ubicacion) {
        return res.status(400).json({ error: "Descripción y ubicación son requeridos." });
    }

    let insert_query = 'INSERT INTO registro_ubicacion (desc_ubicacion, ubicacion) VALUES(?, ?);';

    connection.query(insert_query, [location.descripcion, location.ubicacion], function (err, result) {
        if (err) {
            console.error("Error al insertar datos en la tabla:", err);
            return res.status(500).json({ error: "Error al insertar datos en la tabla." });
        }

        console.log('Ubicación insertada correctamente.');
        res.status(200).json({ message: "Ubicación insertada correctamente.", result });
    });
});


router.post('/insert_product1', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let product = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'producto_1'
            
        })

        const imageURL = result.secure_url;
        console.log('Product 1 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_cono_huevo (imagen, nombre, precio, descripcion) VALUES(?, ?, ?, ?);'

        connection.query(insert_query, [imageURL, product.nombre, product.precio, product.descripcion], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted product on table 1');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})

router.post('/insert_product2', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let product = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'producto_2'
            
        })

        const imageURL = result.secure_url;
        console.log('Product 2 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_caja_huevo (imagen, nombre, precio, descripcion) VALUES(?, ?, ?, ?);'

        connection.query(insert_query, [imageURL, product.nombre, product.precio, product.descripcion], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted product on table 2');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})

router.post('/insert_product3', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let product = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'producto_3'
            
        })

        const imageURL = result.secure_url;
        console.log('Product 3 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_alimento (imagen, nombre, precio, descripcion) VALUES(?, ?, ?, ?);'

        connection.query(insert_query, [imageURL, product.nombre, product.precio, product.descripcion], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted product on table 3');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
})

router.post('/insert_product4', upload.single('imagen'), async function(req, res){

    try {

        let image = req.file;
        let product = req.body;
        const path = image.path;

        const result = await cloudinary.uploader.upload(path, {

            folder: 'producto_4'
            
        })

        const imageURL = result.secure_url;
        console.log('Product 4 uploaded successfully', imageURL);

        let insert_query = 'INSERT INTO registro_gallinas (imagen, nombre, precio, descripcion) VALUES(?, ?, ?, ?);'

        connection.query(insert_query, [imageURL, product.nombre, product.precio, product.descripcion], function (err, result){

            if (err) {
                
                throw err;


            }else {
                
                console.log('Inserted product on table 4');
                
            }
            
        });

        
    }catch {

        console.error("Error al subir la imagen:", err);
        res.status(500).send("Hubo un error al subir la imagen.");
        
    }
    
});

router.post("/login", async function (req, res) {

    const { email, contrasena } = req.body;

    console.log(email, contrasena);

    try {
        // Validar que los campos no estén vacíos
        if (!email || !contrasena) {

            return res.json({ success: false, message: "Todos los campos son obligatorios." });

        }

        let query = 'SELECT * FROM usuarios WHERE email = ?';

        connection.query(query, [email], async function (err, result) {
            if (err) {

                throw err;

            } else {

                console.log(result);

                if (result.length === 0) {

                    return res.json({ success: false, message: "Email o contraseña incorrectos." });

                }

                const usuario = result[0];

                // Comparar contraseñas (bcrypt.compare es una función asíncrona)
                const match = await bcrypt.compare(contrasena, usuario.contrasena);

                if (match) {

                    return res.json({ success: true });

                } else {

                    return res.json({ success: false, message: "Email o contraseña incorrectos." });

                }

            }

        });

    } catch (error) {

        console.error(error);
        return res.status(500).json({ success: false, message: "Error del servidor." });

    }

});


module.exports = router;