var express = require('express');
const mysql = require('mysql2');
var router = express.Router();

let connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function(err) {
    if (err) { throw err; }
    console.log('Connected to database from gets');
});

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

router.get('/chatbot', function(req, res) {

    res.render('chathv');

})

router.get('/recetas', function(req, res) {

    res.render('recetas');

})

router.get('/celular', function(req, res) {

    res.render('celular');

})

//Selección de valor mas reciente para actualizacioón de index
router.get('/get_start_changes',function(req, res) {

    let select_query = 'SELECT * FROM registro_inicio ORDER BY created_at DESC LIMIT 1;'
    
    connection.query(select_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

})

//Selección para historial de cambios
router.get('/start_log', function (req, res) {

    let select_query = 'SELECT * FROM registro_inicio ORDER BY created_at DESC'

    connection.query(select_query, function (err, results) {

        if (err) throw err;
        res.json(results);

    });

});

router.get('/us_log', function (req, res) {

    let select_query = 'SELECT * FROM registro_nosotros ORDER BY created_at DESC'

    connection.query(select_query, function (err, results) {

        if (err) throw err;
        res.json(results);

    });

});

router.get('/history_log', function (req, res) {

    let select_query = 'SELECT * FROM registro_historia ORDER BY created_at DESC';

    connection.query(select_query, function (err, results) {

        if (err) throw err;
        res.json(results);

    });
    
});


router.get('/get_products_changes', function (req, res) {

    let select_query = `(SELECT * FROM registro_producto1 ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM registro_producto2 ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM registro_producto3 ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM registro_producto4 ORDER BY created_at DESC LIMIT 1)`;

    connection.query(select_query, function (err, results) {
        
        if (err) throw err;
        res.json(results);

    }); 

});

router.get('/get_team_changes', function (req, res) {

    let select_query = `(SELECT * FROM  registro_perfil1 ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM  registro_perfil2 ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM  registro_perfil3 ORDER BY created_at DESC LIMIT 1)`;

    connection.query(select_query, function (err, results) {
        
        if (err) throw err;
        res.json(results);
                    
    }); 

});

router.get('/get_team_log', function (req, res) {

    let insert_query = `(SELECT * FROM registro_perfil1 ORDER BY created_at DESC)
                        UNION ALL
                        (SELECT * FROM registro_perfil2 ORDER BY created_at DESC)
                        UNION ALL
                        (SELECT * FROM registro_perfil3 ORDER BY created_at DESC)`
    
    connection.query(insert_query, function (err, results) {

        if (err) throw err
        res.json(results);

    });

});

router.get('/get_test_logs', function (req, res){

     const insert_query =  `(SELECT * FROM registro_testimonio1 ORDER BY created_at DESC)
                            UNION ALL
                            (SELECT * FROM registro_testimonio2 ORDER BY created_at DESC)
                            UNION ALL
                            (SELECT * FROM registro_testimonio3 ORDER BY created_at DESC)`;

    connection.query(insert_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

});

router.get('/get_products_log', function (req, res) {

    let insert_query = `(SELECT * FROM registro_producto1)
                        UNION ALL
                        (SELECT * FROM registro_producto2)
                        UNION ALL
                        (SELECT * FROM registro_producto3)
                        UNION ALL
                        (SELECT * FROM registro_producto4)`;
    
    connection.query(insert_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

});

router.get('/get_recipe_random', function (req, res) {

    let insert_query = `SELECT * 
                        FROM (
                            SELECT * FROM registro_desayuno
                            UNION ALL
                            SELECT * FROM registro_comida
                            UNION ALL
                            SELECT * FROM registro_postre
                        ) AS union_result
                        ORDER BY RAND()
                        LIMIT 1;`;
    
    connection.query(insert_query, function (err, result) {

        if (err ) throw err;
        res.json(result);

    });

})

router.get('/get_breakfast_list', function (req, res) {

    let insert_query = 'SELECT * FROM registro_desayuno ORDER BY created_at DESC';

    let jsonTitle = { Title_list: 'Breakfast List'}

    connection.query(insert_query, function (err, result) {

        if (err) throw err;
        res.json(result);
        
    });

});

router.get('/get_food_list', function (req, res) {

    let insert_query = 'SELECT * FROM registro_comida ORDER BY created_at DESC'
    
    connection.query(insert_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

});

router.get('/get_dessert_list', function (req, res) {

    let insert_query = 'SELECT * FROM registro_postre ORDER BY created_at DESC'

    connection.query(insert_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

});

router.get('/get_recipes_log', function (req, res) {

    let insert_query = `(SELECT * FROM registro_desayuno ORDER BY created_at DESC)
                        UNION ALL
                        (SELECT * FROM registro_comida ORDER BY created_at DESC)
                        UNION ALL
                        (SELECT * FROM registro_postre ORDER BY created_at DESC)`
    
    connection.query(insert_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

});

router.get('/get_us_changes', function(req, res) {

    let select_query = 'SELECT * FROM registro_nosotros ORDER BY created_at DESC LIMIT 1;'

    connection.query(select_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });
    
});


router.get('/get_hist_changes', function(req, res) {

    let select_query = 'SELECT * FROM registro_historia ORDER BY created_at DESC LIMIT 1;'

    connection.query(select_query, function (err, result){

        if (err) throw err;
        res.json(result);

    });
});



router.get('/get_testimony_changes', function(req, res) {

    let select_query = `(SELECT * FROM registro_testimonio1 ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM registro_testimonio2 ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM registro_testimonio3 ORDER BY created_at DESC LIMIT 1)`;

        connection.query(select_query, function (err, result) {

            if (err) throw err;
            res.json(result);
                    
        });
                    
});

router.get('/get_descriptionTestimony_changes', function(req, res) {

    let select_query = 'SELECT * FROM registro_testimonio ORDER BY created_at DESC LIMIT 1;'

    connection.query(select_query, function (err, result){

        if (err) throw err;
        res.json(result);

    });
});

router.get('/get_location_changes',function(req, res) {

    let select_query = 'SELECT * FROM registro_ubicacion ORDER BY created_at DESC LIMIT 1;'
    
    connection.query(select_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

});

router.get('/get_huevo_changes', function(req, res) {

    let select_query = `(SELECT * FROM registro_cono_huevo ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM registro_caja_huevo ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM registro_alimento ORDER BY created_at DESC LIMIT 1)
                        UNION ALL
                        (SELECT * FROM registro_gallinas ORDER BY created_at DESC LIMIT 1)`;

        connection.query(select_query, function (err, result) {

            if (err) throw err;
            res.json(result);
                    
        });
                    
});


router.get('/get_egg_log', function (req, res) {

    let insert_query = `(SELECT * FROM registro_alimento ORDER BY created_at DESC)
                        UNION ALL
                        (SELECT * FROM registro_caja_huevo ORDER BY created_at DESC)
                        UNION ALL
                        (SELECT * FROM registro_cono_huevo ORDER BY created_at DESC)
                        UNION ALL
                        (SELECT * FROM registro_gallinas ORDER BY created_at DESC)`;
    
    connection.query(insert_query, function (err, result) {

        if (err) throw err;
        res.json(result);

    });

});


module.exports = router;

