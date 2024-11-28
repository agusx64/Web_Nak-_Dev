let insertDBChange;
let image_reference;

// Elementos del menú
const inicioBtn = document.getElementById('inicio');
const tiendaBtn = document.getElementById('tienda');
const nosotrosBtn = document.getElementById('nosotros');
const historiaBtn = document.getElementById('historia');
const equipoBtn = document.getElementById('equipo');
const testimoniosBtn = document.getElementById('testimonios');
const ubicacionBtn = document.getElementById('ubicacion');
const recetasBtn = document.getElementById('recetas');
const productosBtn = document.getElementById('productos');
const logo_home = document.getElementById('logo_return');

logo_home.addEventListener('click', function() {

  window.location.href = '/';

});

//Etiquetas de elemntos diamicos

//Venta de un solo texto
let input_tag_text = document.getElementById('single_input');
let input_placeholder = document.getElementById('send_text_component');

//Ventana de una sola imagen
let input_upload_tag = document.getElementById('title_tag_upload');

//Ventana de una imagen y 4 inputs
let label_tag_header = document.getElementById('title_tag_upload');
let label_text_header = document.getElementById('text_title_input');
let placeholder_text_input = document.getElementById('text_title_input')


//Contenido Activo
const listItems = document.querySelectorAll('.icon-list li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remover la clase 'active' de todos los elementos
        listItems.forEach(li => li.classList.remove('active'));
        
        // Agregar la clase 'active' al elemento clicado
        item.classList.add('active');
    });
});



// Secciones de contenido
const inicioContent = document.querySelector('.main-content_inicio');
const tiendaContent = document.querySelector('.main-content_tienda');
const nosotrosContent = document.querySelector('.main-content_nosotros');
const historiaContent = document.querySelector('.main-content_historia');
const equipoContent = document.querySelector('.main-content_equipo');
const testimoniosContent = document.querySelector('.main-content_testimonios');
const ubicacionContent = document.querySelector('.main-content_ubicacion');
const recetasContent = document.querySelector('.main-content_recetas');
const productosContent = document.querySelector('.main-content_productos');



// Función para ocultar todas las secciones
function ocultarSecciones() {
    inicioContent.hidden = true;
    tiendaContent.hidden = true;
    nosotrosContent.hidden = true;
    historiaContent.hidden = true;
    equipoContent.hidden = true;
    testimoniosContent.hidden = true;
    ubicacionContent.hidden = true;
    recetasContent.hidden = true;
    productosContent.hidden = true;
}

// Evento para mostrar la sección de 'inicio'
let currentAction = null;  // Variable global para almacenar la acción actual

document.addEventListener('DOMContentLoaded', function() {

  setInterval(getStartLog(), 4000);
  setInterval(getUsLog(), 4000);
  setInterval(getHistoryLog(), 4000);
  setInterval(getProductsChanges(), 4000);
  setInterval(getTeamLog(), 4000);
  setInterval(getTestLog(), 4000);
  setInterval(getRecipesLog(), 4000);
  setInterval(getEggLog(), 4000);
  

});

// Configura los botones del menú
inicioBtn.addEventListener('click', function() {
    ocultarSecciones();
    inicioContent.hidden = false;
    
    //Botones del menu
    const button_description = document.getElementById('btn_text_home');
    const button_slogan = document.getElementById('btn_text_home1');
    const button_image = document.getElementById('btn_image_home');
    
    const textConfirmButton = document.getElementById('idSwitcher');
    const imageConfirmButton = document.getElementById('confirm-btn');

    button_image.addEventListener('click', function() {
      currentAction = 'insert_image';

      input_upload_tag.textContent = 'Sube una imagen para el fondo principal'

    });

    button_slogan.addEventListener('click', function() {
      currentAction = 'insert_slogan';

      input_tag_text.textContent = 'Escribe un slogan aqui';
      input_placeholder.placeholder = 'Slogan';

    });

    button_description.addEventListener('click', function() {
      currentAction = 'insert_description';

      input_tag_text.textContent = 'Escribe una descripción aqui';
      input_placeholder.placeholder = 'Descripción';

    });

});


const imageConfirmButton = document.getElementById('confirm-btn');
imageConfirmButton.addEventListener('click', function() {
  if (currentAction === 'insert_image') {
    const insertImage = document.getElementById('file-upload');
    const form_data = new FormData();
    form_data.append('background_image', insertImage.files[0]);

    fetch('/insert_image', {
      method: 'POST',
      body: form_data
    });
  }
});

const textConfirmButton = document.getElementById('idSwitcher');
textConfirmButton.addEventListener('click', function() {
  if (currentAction === 'insert_slogan') {
    const insertSlogan = document.getElementById('send_text_component');

    let slogan = { slogan: insertSlogan.value };

    // Fetch para insertar slogan
    fetch('/insert_slogan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slogan)
    });
  }
  else if (currentAction === 'insert_description') {
    const insertDescription = document.getElementById('send_text_component');

    let description = { description: insertDescription.value };

    // Fetch para insertar descripción
    fetch('/insert_description', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(description)
    });
  }
});



// Evento para mostrar la sección de 'tienda'
tiendaBtn.addEventListener('click', function() {
    ocultarSecciones(); 
    tiendaContent.hidden = false;  

    const button_product_1 = document.getElementById('btn_text_shop');
    const button_product_2 = document.getElementById('btn_text_shop1');
    const button_product_3 = document.getElementById('btn_text_shop2');
    const button_product_4 = document.getElementById('btn_text_shop3');

    button_product_1.addEventListener('click', function() {
      currentAction = 'insert_product_1';  // Asigna la acción de producto 1
    });
  
    button_product_2.addEventListener('click', function() {
      currentAction = 'insert_product_2';  // Asigna la acción de producto 2
    });

    button_product_3.addEventListener('click', function() {
      currentAction = 'insert_product_3';  // Asigna la acción de producto 3
    });
    
    button_product_4.addEventListener('click', function() {
      currentAction = 'insert_product_4';  // Asigna la acción de producto 4
    });

});

const button_insert_data = document.getElementById('arrowShop');
button_insert_data.addEventListener('click', function() {

  if (currentAction === 'insert_product_1') {

    const image = document.getElementById('file-upload3');
    const title = document.getElementById('send_text_title');
    const description = document.getElementById('send_text_description');
    const slogan = document.getElementById('send_text_slogan');
    const price = document.getElementById('send_text_price');

    let valueTitle = title.value;
    let valueDescription = description.value;
    let valueSlogan = slogan.value;
    let valuePrice = price.value;

    let formData = new FormData();
    formData.append('imagen', image.files[0]);
    formData.append('titulo', valueTitle
    
    );
    formData.append('descripcion', valueDescription);
    formData.append('slogan', valueSlogan);
    formData.append('precio', valuePrice);

    fetch('/insert_product_1',{

      method: 'POST',
      body: formData

    })

  } else if (currentAction === 'insert_product_2') {

    const image = document.getElementById('file-upload3');
    const title = document.getElementById('send_text_title');
    const description = document.getElementById('send_text_description');
    const slogan = document.getElementById('send_text_slogan');
    const price = document.getElementById('send_text_price');

    let valueTitle = title.value;
    let valueDescription = description.value;
    let valueSlogan = slogan.value;
    let valuePrice = price.value;

    let formData = new FormData();
    formData.append('imagen', image.files[0]);
    formData.append('titulo', valueTitle);
    formData.append('descripcion', valueDescription);
    formData.append('slogan', valueSlogan);
    formData.append('precio', valuePrice);

    fetch('/insert_product_2',{

      method: 'POST',
      body: formData

    })

  } else if (currentAction === 'insert_product_3') {

    const image = document.getElementById('file-upload3');
    const title = document.getElementById('send_text_title');
    const description = document.getElementById('send_text_description');
    const slogan = document.getElementById('send_text_slogan');
    const price = document.getElementById('send_text_price');

    let valueTitle = title.value;
    let valueDescription = description.value;
    let valueSlogan = slogan.value;
    let valuePrice = price.value;

    let formData = new FormData();
    formData.append('imagen', image.files[0]);
    formData.append('titulo', valueTitle);
    formData.append('descripcion', valueDescription);
    formData.append('slogan', valueSlogan);
    formData.append('precio', valuePrice);

    fetch('/insert_product_3',{

      method: 'POST',
      body: formData

    })

  } else if (currentAction === 'insert_product_4') {

    const image = document.getElementById('file-upload3');
    const title = document.getElementById('send_text_title');
    const description = document.getElementById('send_text_description');
    const slogan = document.getElementById('send_text_slogan');
    const price = document.getElementById('send_text_price');

    
    let valueTitle = title.value;
    let valueDescription = description.value;
    let valueSlogan = slogan.value;
    let valuePrice = price.value;

    let formData = new FormData();
    formData.append('imagen', image.files[0]);
    formData.append('titulo', valueTitle);
    formData.append('descripcion', valueDescription);
    formData.append('slogan', valueSlogan);
    formData.append('precio', valuePrice);

    fetch('/insert_product_4',{

      method: 'POST',
      body: formData

    })

  }

})

// Evento para mostrar la sección de 'nosotros'
nosotrosBtn.addEventListener('click', function() {
    ocultarSecciones();  
    nosotrosContent.hidden = false;  

    const button_mision = document.getElementById('btn_text_us');
    const button_imgMision = document.getElementById('btn_image_us');
    const button_vision = document.getElementById('btn_text_us1');
    const button_imgVision = document.getElementById('btn_image_us1');
  

    button_mision.addEventListener('click', function() {
      currentAction = 'insert_mision';  // Asigna la acción de descripción
    })

    button_imgMision.addEventListener('click', function() {
      currentAction = 'insert_image_mision';  // Asigna la acción de imagen
    })

    button_vision.addEventListener('click', function() {
      currentAction = 'insert_vision';  
    })

    button_imgVision.addEventListener('click', function() {
      currentAction = 'insert_image_vision';  // Asigna la acción de imagen
    })

});

imageConfirmButton.addEventListener('click', function() {

  if (currentAction === 'insert_image_mision') {
    const insertImage = document.getElementById('file-upload');
    const form_data = new FormData();
    form_data.append('image', insertImage.files[0]);
    
    fetch('/insert_image_mision', {
      method: 'POST',
      body: form_data  // FormData maneja el Content-Type automáticamente
    });

  } else if (currentAction === 'insert_image_vision'){

    const insertImage = document.getElementById('file-upload');
    const form_data = new FormData();
    form_data.append('image', insertImage.files[0]);
    
    fetch('/insert_image_vision', {
      method: 'POST',
      body: form_data  // FormData maneja el Content-Type automáticamente
    });

  }

});
textConfirmButton.addEventListener('click',function(){
  
  if (currentAction === 'insert_mision'){
    const insertMision = document.getElementById('send_text_component');

    let mision = { mision: insertMision.value };

    // Fetch para insertar slogan
    fetch('/insert_mision', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mision)
    });

  } else if (currentAction === 'insert_vision'){
    const insertVision = document.getElementById('send_text_component');

    let vision = { vision: insertVision.value };

    // Fetch para insertar slogan
    fetch('/insert_vision', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vision)
    });


  }


})
// Evento para mostrar la sección de 'historia'
historiaBtn.addEventListener('click', function() {
    ocultarSecciones();  
  historiaContent.hidden = false; 

  const button_historia = document.getElementById('btn_text_hist');
  const button_image_historia = document.getElementById('btn_image_hist'); 
  const button_image_historia1 = document.getElementById('btn_image_hist1');
  const button_image_historia2 = document.getElementById('btn_image_hist2');

  button_historia.addEventListener('click', function() {
    currentAction = 'insert_historia';  
  })

  button_image_historia.addEventListener('click', function() {
    currentAction = 'insert_image_historia';  
  })

  button_image_historia1.addEventListener('click', function() {
    currentAction = 'insert_image_historia1';  
  })

  button_image_historia2.addEventListener('click', function() {
    currentAction = 'insert_image_historia2';  
  })

});

imageConfirmButton.addEventListener('click', function() {
  if (currentAction === 'insert_image_historia'){
    const insertImgHist = document.getElementById('file-upload');
    const form_data = new FormData();
    form_data.append('image', insertImgHist.files[0]);

    fetch('/insert_image_historia',{
      method: 'POST',
      body: form_data
    });
  } 

});

imageConfirmButton.addEventListener('click', function() {
  if (currentAction === 'insert_image_historia1'){
    const insertImgHist1 = document.getElementById('file-upload');
    const form_data = new FormData();
    form_data.append('image', insertImgHist1.files[0]);

    fetch('/insert_image_historia1',{
      method: 'POST',
      body: form_data
    });
  } 

});

imageConfirmButton.addEventListener('click', function() {
  if (currentAction === 'insert_image_historia2'){
    const insertImgHist2 = document.getElementById('file-upload');
    const form_data = new FormData();
    form_data.append('image', insertImgHist2.files[0]);

    fetch('/insert_image_historia2',{
      method: 'POST',
      body: form_data
    });
  } 

});


textConfirmButton.addEventListener('click', function() {
  
  if (currentAction === 'insert_historia'){
    const insertHistoria = document.getElementById('send_text_component');

    let historia = { historia: insertHistoria.value };

    fetch('/insert_historia',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(historia)

    });
  }

})
// Evento para mostrar la sección de 'equipo'
equipoBtn.addEventListener('click', function() {
    ocultarSecciones();  
  equipoContent.hidden = false; 


  const button_perfil_1 = document.getElementById('btn_image_team');
  const button_perfil_2 = document.getElementById('btn_image_team1');
  const button_perfil_3 = document.getElementById('btn_image_team2');

  button_perfil_1.addEventListener('click', function() {
    currentAction = 'insert_team_image1';  

  });

  button_perfil_2.addEventListener('click', function() {
    currentAction = 'insert_team_image2'; 

  });

  button_perfil_3.addEventListener('click', function() {
    currentAction = 'insert_team_image3'; 

  });

});


  const button_insert_team = document.getElementById('arrowTeam');

  button_insert_team.addEventListener('click', function() { 

    if (currentAction === 'insert_team_image1') {

      const image_team = document.getElementById('file-upload1');
      const position =  document.getElementById('position_team');
      const description_team = document.getElementById('description_team');


      let valuePosition = position.value;
      let valueDescription = description_team.value;

      let formData = new FormData();
      formData.append('imagen', image_team.files[0]);
      formData.append('cargo', valuePosition);
      formData.append('descripcion', valueDescription);

      fetch('/insert_team_image1', {
        method: 'POST',
        body: formData
        
      })


  }else  if (currentAction === 'insert_team_image2') {

      const image_team = document.getElementById('file-upload1');
      const position =  document.getElementById('position_team');
      const description_team = document.getElementById('description_team');


      let valuePosition = position.value;
      let valueDescription = description_team.value;

      let formData = new FormData();
      formData.append('imagen', image_team.files[0]);
      formData.append('cargo', valuePosition);
      formData.append('descripcion', valueDescription);

      fetch('/insert_team_image2', {
        method: 'POST',
        body: formData
        
      })


  }else if (currentAction === 'insert_team_image3'){

      const image_team = document.getElementById('file-upload1');
      const position =  document.getElementById('position_team');
      const description_team = document.getElementById('description_team');


      let valuePosition = position.value;
      let valueDescription = description_team.value;

      let formData = new FormData();
      formData.append('imagen', image_team.files[0]);
      formData.append('cargo', valuePosition);
      formData.append('descripcion', valueDescription);

      fetch('/insert_team_image3', {
        method: 'POST',
        body: formData 
        
      })

  }
  
});


// Evento para mostrar la sección de 'testimonios'
testimoniosBtn.addEventListener('click', function() {
    ocultarSecciones();  
  testimoniosContent.hidden = false; 

  
  const button_testimony1 = document.getElementById('btn_image_testim'); 
  const button_testimony2 = document.getElementById('btn_image_testim1');
  const button_testimony3 = document.getElementById('btn_image_testim2');

  const button_description_testimony = document.getElementById('btn_text_testim');

  button_description_testimony.addEventListener('click', function() {
    currentAction = 'insert_description_testimony';
  });
  
  button_testimony1.addEventListener('click', function() {
    currentAction = 'insert_testimony1';  
  
  });

  button_testimony2.addEventListener('click', function() {
    currentAction = 'insert_testimony2';  
  
  });

  button_testimony3.addEventListener('click', function() {
    currentAction = 'insert_testimony3';  
  
  });


});

textConfirmButton.addEventListener('click', function() {

  if (currentAction === 'insert_description_testimony'){
    const insertDescriptionTestimony = document.getElementById('send_text_component');

    let descriptionTestimony = {descriptionTestimony: insertDescriptionTestimony.value};

    fetch('/insert_description_testimony',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(descriptionTestimony)

      });

    }

});



  const button_insert_testimony = document.getElementById('arrowTeam');

  button_insert_testimony.addEventListener('click', function() {

    if (currentAction === 'insert_testimony1') {

      const image_testimony = document.getElementById('file-upload1');
      const name_testimony = document.getElementById('position_team');
      const description_testimony = document.getElementById('description_team');
    
      let valueName = name_testimony.value;
      let valueDescriptionTestimony = description_testimony.value;

      console.log("Nombre:", valueName); // Depuración
      console.log("Descripción:", valueDescriptionTestimony);
    
      let formData = new FormData();
      formData.append('imagen', image_testimony.files[0]);
      formData.append('nombre', valueName);
      formData.append('testimonio', valueDescriptionTestimony);
      
    

      fetch('/insert_testimony1', {
        method: 'POST',
        body: formData
        
      })

      
    }else if (currentAction === 'insert_testimony2') {

      const image_testimony = document.getElementById('file-upload1');
      const name_testimony = document.getElementById('position_team');
      const testimony = document.getElementById('description_team');
    

      let valueName = name_testimony.value;
      let valueTestimony = testimony.value;
    

      let formData = new FormData();
      formData.append('imagen', image_testimony.files[0]);
      formData.append('nombre', valueName);
      formData.append('testimonio', valueTestimony);
  +

      fetch('/insert_testimony2', {
        method: 'POST',
        body: formData
        
      })

    }else if (currentAction == 'insert_testimony3') {

      const image_testimony = document.getElementById('file-upload1');
      const name_testimony = document.getElementById('position_team');
      const testimony = document.getElementById('description_team');
    

      let valueName = name_testimony.value;
      let valueTestimony = testimony.value;
    

      let formData = new FormData();
      formData.append('imagen', image_testimony.files[0]);
      formData.append('nombre', valueName);
      formData.append('testimonio', valueTestimony);
    

      fetch('/insert_testimony3', {
        method: 'POST',
        body: formData
        
      })

    }

  });



// Evento para mostrar la sección de 'ubicacion'
ubicacionBtn.addEventListener('click', function() {
    ocultarSecciones();  
  ubicacionContent.hidden = false; 

  const button_location = document.getElementById('btn_text_location');
  

  button_location.addEventListener('click', function() {
    currentAction = 'insert_location';  
  });


});

const button_insert_location = document.getElementById('arrowLocation');

button_insert_location.addEventListener('click', function () {
    if (currentAction === 'insert_location') {
        const descLocation = document.getElementById('descLocation').value;
        const location = document.getElementById('location').value;

        const data = {
            descripcion: descLocation,
            ubicacion: location,
        };

        fetch('/insert_location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Cambiar a JSON
            },
            body: JSON.stringify(data), // Convertir datos a JSON
        })
            .then((response) => response.json())
            .then((data) => console.log('Respuesta del servidor:', data))
            .catch((error) => console.error('Error:', error));
    }
});



// Evento para mostrar la sección de 'recetas'
recetasBtn.addEventListener('click', function() {
  ocultarSecciones();  
recetasContent.hidden = false; 

const button_breakfast = document.getElementById('btn_text_recipes3');
const button_lunch = document.getElementById('btn_text_recipes1');
const button_dessert = document.getElementById('btn_text_recipes2');

const button_recipe = document.getElementById('btn_images_recipes');

button_breakfast.addEventListener('click', function() {

    currentAction = 'insert_desayunos';  

  });

button_lunch.addEventListener('click', function() {

    currentAction = 'insert_comidas';  

  });

button_dessert.addEventListener('click', function() {
  
    currentAction = 'insert_postres';  

  });

});

const buttonInsertRecipes = document.getElementById('arrowShop');

buttonInsertRecipes.addEventListener('click', function() {

  if (currentAction === 'insert_desayunos') {

    const img_recipe = document.getElementById('file-upload3');
    const name_recipe = document.getElementById('send_text_title');
    const desc_recipe = document.getElementById('send_text_description');
    const calorie = document.getElementById('send_text_slogan');
    const preparation_recipe = document.getElementById('send_text_price');

    let valueName = name_recipe.value;
    let valueDescription = desc_recipe.value;
    let valueCalorie = calorie.value;
    let valuePreparation = preparation_recipe.value;

    let formData = new FormData();
    formData.append('imagen', img_recipe.files[0]);
    formData.append('nombre', valueName);
    formData.append('descripcion', valueDescription);
    formData.append('calorias', valueCalorie);
    formData.append('preparacion', valuePreparation);

    fetch('/insert_desayunos', {
      method: 'POST',
      body: formData
      
    })

  }else if (currentAction === 'insert_comidas'){

    const img_recipe = document.getElementById('file-upload3');
    const name_recipe = document.getElementById('send_text_title');
    const desc_recipe = document.getElementById('send_text_description');
    const calorie = document.getElementById('send_text_slogan');
    const preparation_recipe = document.getElementById('send_text_price');

    let valueName = name_recipe.value;
    let valueDescription = desc_recipe.value;
    let valueCalorie = calorie.value;
    let valuePreparation = preparation_recipe.value;

    let formData = new FormData();
    formData.append('imagen', img_recipe.files[0]);
    formData.append('nombre', valueName);
    formData.append('descripcion', valueDescription);
    formData.append('calorias', valueCalorie);
    formData.append('preparacion', valuePreparation);

    fetch('/insert_comidas', {

      method: 'POST',
      body: formData
      
    })

  } else if (currentAction === 'insert_postres'){
    
    const img_recipe = document.getElementById('file-upload3');
    const name_recipe = document.getElementById('send_text_title');
    const desc_recipe = document.getElementById('send_text_description');
    const calories = document.getElementById('send_text_slogan');
    const preparation_recipe = document.getElementById('send_text_price');

    let valueName = name_recipe.value;
    let valueDescription = desc_recipe.value;
    let valueCalorie = calories.value;
    let valuePreparation = preparation_recipe.value;

    let formData = new FormData();
    formData.append('imagen', img_recipe.files[0]);
    formData.append('nombre', valueName);
    formData.append('descripcion', valueDescription);
    formData.append('calorias', valueCalorie);
    formData.append('preparacion', valuePreparation);

    fetch('/insert_postres', {

      method: 'POST',
      body: formData
      
    })

    }

});




//Evento para mostrar la sección de 'productos'
productosBtn.addEventListener('click', function() {
  ocultarSecciones();  
productosContent.hidden = false;

const button_producto1 = document.getElementById('btn_text_product');
const button_producto2 = document.getElementById('btn_text_product1');
const button_producto3 = document.getElementById('btn_text_product2');
const button_producto4 = document.getElementById('btn_text_product3');

button_producto1.addEventListener('click', function() {
  currentAction = 'insert_product1';
});

button_producto2.addEventListener('click', function() {
  currentAction = 'insert_product2';
});

button_producto3.addEventListener('click', function() {
  currentAction = 'insert_product3';
});

button_producto4.addEventListener('click', function() {
  currentAction = 'insert_product4';
});

});

const button_insert_product = document.getElementById('arrowProduct');

button_insert_product.addEventListener('click', function() {

  if (currentAction === 'insert_product1') {

    const img_product = document.getElementById('file-upload2');
    const name_product = document.getElementById('name_product');
    const price_product = document.getElementById('price_product');
    const desc_product = document.getElementById('description_product');

    let valueName = name_product.value;
    let valuePrice = price_product.value;
    let valueDescription = desc_product.value;

    let formData = new FormData();
    formData.append('imagen', img_product.files[0]);
    formData.append('nombre', valueName);
    formData.append('precio', valuePrice);
    formData.append('descripcion', valueDescription);
    
    fetch('/insert_product1',{
      method: 'POST',
      body: formData
    })
  
  }else if (currentAction === 'insert_product2'){

    const img_product = document.getElementById('file-upload2');
    const name_product = document.getElementById('name_product');
    const price_product = document.getElementById('price_product');
    const desc_product = document.getElementById('description_product');

    let valueName = name_product.value;
    let valuePrice = price_product.value;
    let valueDescription = desc_product.value;

    let formData = new FormData();
    formData.append('imagen', img_product.files[0]);
    formData.append('nombre', valueName);
    formData.append('precio', valuePrice);
    formData.append('descripcion', valueDescription);
    
    fetch('/insert_product2',{
      method: 'POST',
      body: formData
    })

  }else if (currentAction === 'insert_product3'){

    const img_product = document.getElementById('file-upload2');
    const name_product = document.getElementById('name_product');
    const price_product = document.getElementById('price_product');
    const desc_product = document.getElementById('description_product');

    let valueName = name_product.value;
    let valuePrice = price_product.value;
    let valueDescription = desc_product.value;

    let formData = new FormData();
    formData.append('imagen', img_product.files[0]);
    formData.append('nombre', valueName);
    formData.append('precio', valuePrice);
    formData.append('descripcion', valueDescription);
    
    fetch('/insert_product3',{
      method: 'POST',
      body: formData
    })

    
  }else if(currentAction === 'insert_product4') {

    const img_product = document.getElementById('file-upload2');
    const name_product = document.getElementById('name_product');
    const price_product = document.getElementById('price_product');
    const desc_product = document.getElementById('description_product');

    let valueName = name_product.value;
    let valuePrice = price_product.value;
    let valueDescription = desc_product.value;

    let formData = new FormData();
    formData.append('imagen', img_product.files[0]);
    formData.append('nombre', valueName);
    formData.append('precio', valuePrice);
    formData.append('descripcion', valueDescription);
    
    fetch('/insert_product4',{
      method: 'POST',
      body: formData
    })

    
  }


});



const toggleButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

/*----------------------------------------------Buttons Upload Content----------------------------------------------*/

let currentOpenModal = null; // Variable para rastrear el modal actualmente abierto

// Función para mostrar el modal correspondiente y ocultar los demás
function toggleModal(modalId) {
  // Si ya hay un modal abierto y es el mismo, no hace nada
  if (currentOpenModal === modalId) return;

  // Oculta el modal actualmente abierto, si existe
  if (currentOpenModal) {
    document.getElementById(currentOpenModal).style.display = 'none';
  }

  // Muestra el nuevo modal y actualiza la variable de seguimiento
  document.getElementById(modalId).style.display = 'block';
  currentOpenModal = modalId;

  // Limpia los campos del modal que se abre
  resetModalFields(modalId);
}

// Función para cerrar un modal específico y restablecer la variable
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  currentOpenModal = null; // Restablece la variable, ya que no hay modales abiertos
}

// Función para reiniciar los campos del modal
function resetModalFields(modalId) {
  const modal = document.getElementById(modalId);
  
  // Reinicia los campos de entrada (ej. inputs de texto y file inputs)
  modal.querySelectorAll('input[type="text"], input[type="file"]').forEach(input => {
    input.value = ''; // Limpia el valor
  });
}

// Botones de cierre para los modales
document.querySelectorAll('.close-btn_text').forEach(btn => {
  btn.addEventListener('click', function() {
    closeModal('upload_text_id');
  });
});


document.querySelectorAll('.close-btn_text2').forEach(btn => {
  btn.addEventListener('click', function() {
    closeModal('upload_text2_id');
  });
});

document.querySelectorAll('.close-btn_image1').forEach(btn => {
  btn.addEventListener('click', function() {
    closeModal('upload_image_id');
  });
});
document.querySelectorAll('.close-btn_text_and_image').forEach(btn => {
  btn.addEventListener('click', function() {
    closeModal('upload_image_and_text_id');
  });
});
document.querySelectorAll('.close-btn_text_and_image3').forEach(btn => {
  btn.addEventListener('click', function() {
    closeModal('upload_image_and_text3_id');
  });
});
document.querySelectorAll('.close-btn_text_and_image4').forEach(btn => {
  btn.addEventListener('click', function() {
    closeModal('upload_image_and_text4_id');
  });
});

// Función para abrir y cerrar un modal con clics dentro y fuera de él
function setupModalToggle(buttonId, modalId) {
  const button = document.getElementById(buttonId);
  const modal = document.getElementById(modalId);

  // Muestra el modal al hacer clic en el botón
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Evita el cierre inmediato del modal
    toggleModal(modalId);
  });

  // Cierra el modal si se hace clic fuera de él
  document.addEventListener('click', function(event) {
    if (modal.style.display === 'block' && !modal.contains(event.target) && !button.contains(event.target)) {
      closeModal(modalId);
    }
  });
}

// Uso de la función para configurar los botones y modales
//HOME (3)
setupModalToggle('btn_text_home', 'upload_text_id');
setupModalToggle('btn_text_home1', 'upload_text_id');
setupModalToggle('btn_image_home', 'upload_image_id');
//Shop (5)
setupModalToggle('btn_text_shop', 'upload_image_and_text4_id');
setupModalToggle('btn_text_shop1', 'upload_image_and_text4_id');
setupModalToggle('btn_text_shop2', 'upload_image_and_text4_id');
setupModalToggle('btn_text_shop3', 'upload_image_and_text4_id');
//US (4)
setupModalToggle('btn_text_us', 'upload_text_id');
setupModalToggle('btn_image_us', 'upload_image_id');
setupModalToggle('btn_text_us1', 'upload_text_id');
setupModalToggle('btn_image_us1', 'upload_image_id');
//History (4)
setupModalToggle('btn_text_hist', 'upload_text_id');
setupModalToggle('btn_image_hist', 'upload_image_id');
setupModalToggle('btn_image_hist1', 'upload_image_id');
setupModalToggle('btn_image_hist2', 'upload_image_id');
//Team (3)
setupModalToggle('btn_image_team', 'upload_image_and_text_id');
setupModalToggle('btn_image_team1', 'upload_image_and_text_id');
setupModalToggle('btn_image_team2', 'upload_image_and_text_id');
//Testimonials (4)
setupModalToggle('btn_text_testim', 'upload_text_id');
setupModalToggle('btn_image_testim', 'upload_image_and_text_id');
setupModalToggle('btn_image_testim1', 'upload_image_and_text_id');
setupModalToggle('btn_image_testim2', 'upload_image_and_text_id');
//Location (1)
setupModalToggle('btn_text_location', 'upload_text2_id');

//Recipes (4)
setupModalToggle('btn_image_recipes', 'upload_image_and_text4_id');
setupModalToggle('btn_text_recipes3', 'upload_image_and_text4_id');
setupModalToggle('btn_text_recipes1', 'upload_image_and_text4_id');
setupModalToggle('btn_text_recipes2', 'upload_image_and_text4_id');
//Products (4)
setupModalToggle('btn_text_product', 'upload_image_and_text3_id');
setupModalToggle('btn_text_product1', 'upload_image_and_text3_id');
setupModalToggle('btn_text_product2', 'upload_image_and_text3_id');
setupModalToggle('btn_text_product3', 'upload_image_and_text3_id');

//Inicio
function getStartLog() {
  
  fetch('/start_log')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const tableBody = document.getElementById('table_body');
      tableBody.innerHTML = '';

      data.forEach(row => {
        const id = row.id || 'N/A';
        const descripcion = row.descripcion || 'Sin descripción';
        const img = row.img_producto || '#';
        const slogan = row.slogan || 'Sin slogan';
        const created_at = row.created_at || 'Sin fecha';

        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
          <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
              </svg>
          </td>
          <td>${id}</td>
          <td>${truncateText(descripcion, 30)}</td>
          <td>
            <a href="${img}" class="preview-link" data-img="${img}">Imagen cargada</a>
          </td>
          <td>${truncateText(slogan, 30)}</td>
          <td>${created_at}</td>
        `;

        tableBody.appendChild(tableRow);
      });

      // Agrega los eventos para la previsualización
      addPreviewEvents();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
//Tienda
function getProductsChanges() {

  fetch('/get_products_log')

  .then(response => response.json())
  .then(data => {

    console.log(data);
    
    const tableBodyProducts = document.getElementById('table_body_products');
    tableBodyProducts.innerHTML = '';
    
    data.forEach(row => {

      const id = row.id || 'N/A';
      const titulo = row.titulo || 'Sin titulo';
      const descripcion = row.descripcion || 'Sin descripcion';
      const precio = row.precio || 'Sin precio';
      const img = row.img || '#';
      const slogan = row.slogan || 'Sin slogan';
      const created_at = row.created_at || 'Sin fecha';

      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
      <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
          </svg>
      </td>
      <td>${id}</td>
      <td>${truncateText(titulo, 30)}</td>
      <td>${truncateText(descripcion, 30)}</td>
      <td>${truncateText(precio, 30)}</td>
      <td><a href="${img}" class="preview-link" data-img="${img}">Imagen</a></td>
      <td>${truncateText(slogan, 30)}</td>
      <td>${created_at}</td>
    `;
    
    tableBodyProducts.appendChild(tableRow);

    })
      // Agrega los eventos para la previsualización
      addPreviewEvents();

  })

}
//Nosotros
function getUsLog() {
  fetch('/us_log')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const tableBodyUs = document.getElementById('table_body_us');

      tableBodyUs.innerHTML = '';

      data.forEach(row => {
        const id = row.id || 'N/A';
        const mision = row.mision || 'Sin descripción';
        const img_mision = row.img_mision || '#';
        const vision = row.vision || 'Sin descripción';
        const img_vision = row.img_vision || '#';
        const created_at = row.created_at || 'Sin fecha';

        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
          <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
              </svg>
          </td>
          <td>${id}</td>
          <td>${truncateText(mision, 30)}</td>
          <td>
            <a href="${img_mision}" class="preview-link" data-img="${img_mision}">Imagen cargada</a>
          </td>
          <td>${truncateText(vision, 30)}</td>
          <td>
            <a href="${img_vision}" class="preview-link" data-img="${img_vision}">Imagen cargada</a>
          </td>
          <td>${created_at}</td>
        `;

        tableBodyUs.appendChild(tableRow);
      });

      // Agrega los eventos para la previsualización
      addPreviewEvents();
    })
    .catch(error => {
      console.error(error);
    });
}
//Historia
function getHistoryLog() {
  fetch('/history_log')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const tableBodyHistory = document.getElementById('table_body_history');
      tableBodyHistory.innerHTML = '';

      data.forEach(row => {
        const id = row.id || 'N/A';
        const texto_historia = row.texto_historia || 'Sin historia';
        const img_carousel_1 = row.img_carousel_1 || '#';
        const img_carousel_2 = row.img_carousel_2 || '#';
        const img_carousel_3 = row.img_carousel_3 || '#';
        const created_at = row.created_at || 'Sin fecha';

        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
          <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
              </svg>
          </td>
          <td>${id}</td>
          <td>${truncateText(texto_historia, 30)}</td>
          <td>
            <a href="${img_carousel_1}" class="preview-link" data-img="${img_carousel_1}">Imagen 1</a>
          </td>
          <td>
            <a href="${img_carousel_2}" class="preview-link" data-img="${img_carousel_2}">Imagen 2</a>
          </td>
          <td>
            <a href="${img_carousel_3}" class="preview-link" data-img="${img_carousel_3}">Imagen 3</a>
          </td>
          <td>${created_at}</td>
        `;

        tableBodyHistory.appendChild(tableRow);
      });

      // Agrega los eventos para la previsualización
      addPreviewEvents();
    })
    .catch(error => {
      console.error(error);
    });
}
//Equipo
function getTeamLog() {

  fetch('/get_team_log')

  .then(response => response.json())
  .then(data => {

    console.log(data);

    const tableBodyTeam = document.getElementById('table_body_team')
    tableBodyTeam.innerHTML = '';
    
    data.forEach(row => {

      const id = row.id || 'N/A';
      const cargo = row.cargo || 'Cargo no disponible';
      const descripcion = row.descripcion_perfil || 'Descripcion no disponible';
      const img = row.img_perfil || '#';
      const created_at = row.created_at || 'Fecha no disponible';

      const tableRow = document.createElement('tr');

      tableRow.innerHTML = `
      <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
          </svg>
      </td>
      <td>${id}</td>
      <td>${truncateText(cargo, 30)}</td>
      <td>${truncateText(descripcion, 30)}</td>

      <td><a href="${img}" class="preview-link" data-img="${img}">Imagen</a></td>

      <td>${created_at}</td>
    `;

      tableBodyTeam.appendChild(tableRow);
      
    });
      // Agrega los eventos para la previsualización
      addPreviewEvents();
  });
}
//Testimonios
function getTestLog() {

  fetch('/get_test_logs')
  .then(response => response.json())
  .then(data => { 
    console.log(data); 
    
    const tableBodyTest = document.getElementById('table_body_test');
    tableBodyTest.innerHTML = '';

    data.forEach(row => {
      const id = row.id || 'N/A';
      const nombre = row.nombre || 'Sin nombre';
      const descripcion = row.descripcion_testimonio || 'Sin descripción';
      const img = row.img_testimonio || '#';
      const createdAt = row.created_at || 'Fecha no disponible';
    
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
      <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
          </svg> 
      </td>
      <td>${id}</td>
      <td>${truncateText(nombre, 30)}</td>
      <td>${truncateText(descripcion, 30)}</td>
      <td><a href="${img}" class="preview-link" target="_blank" data-img="${img}">Imagen</a></td>
      <td>${createdAt}</td>`;
      tableBodyTest.appendChild(tableRow);
    });
    
      // Agrega los eventos para la previsualización
      addPreviewEvents();
  })

}

function getRecipesLog() {

  fetch('/get_recipes_log')
  .then(response => response.json())
  .then(data => {

    console.log(data);

    const tableBodyRecipes = document.getElementById('table_body_recipes')
    tableBodyRecipes.innerHTML = '';

    data.forEach(row => {

      let id = row.id || 'N/A';
      let nombre = row.nombre || 'Nombre nulo';
      let descripcion = row.descripcion || 'Sin descripcion';
      let ingredientes = row.caloria || 'Sin ingredientes';
      let preparacion = row.preparacion || 'Sin preparacion';
      let img = row.imagen || 'Sin imagen';
      let created_at = row.created_at || 'Sin fecha';

      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
      <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
          </svg>
      </td>
      <td>${id}</td>
      <td>${truncateText(nombre, 30)}</td>
      <td>${truncateText(descripcion, 30)}</td>
      <td>${truncateText(ingredientes, 30)}</td>
      <td>${truncateText(preparacion, 30)}</td>
      <td><a href="${img}" class="preview-link" target="_blank" data-img="${img}">Imagen</a></td>
      <td>${created_at}</td>`;

      tableBodyRecipes.appendChild(tableRow);

    })

  })

}


function getEggLog() {

  fetch('/get_egg_log')
  .then(response => response.json())
  .then(data => { 
    console.log(data); 
    
    const tableBodyTest = document.getElementById('table_egg_text');
    tableBodyTest.innerHTML = '';

    data.forEach(row => {
      const id = row.id || 'N/A';
      const nombre = row.nombre || 'Sin nombre';
      const descripcion = row.descripcion || 'Sin descripción';
      const img = row.img_testimonio || '#';
      const precio = row.precio || 'Sin precio';
      const createdAt = row.created_at || 'Fecha no disponible';
    
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `;  
      <td>${id}</td>
      <td>${truncateText(nombre, 30)}</td>
      <td>${truncateText(descripcion, 30)}</td>
      <td><a href="${img}" class="preview-link" target="_blank" data-img="${img}">Imagen</a></td>
      <td>${truncateText(precio, 30)}</td>
      <td>${createdAt}</td>`;
      tableBodyTest.appendChild(tableRow);
    });
    
      // Agrega los eventos para la previsualización
      addPreviewEvents();
  })

}

//Ubicación
function getLocation() {
  fetch('/get_location')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // Obtén el contenedor donde se mostrará el mapa
      const mapContainer = document.getElementById('mapContainer');
      mapContainer.innerHTML = ''; // Limpia el contenido anterior

      // Crea un iframe para mostrar el mapa
      const iframe = document.createElement('iframe');
      iframe.src = data.src; // Usa el enlace obtenido del backend
      iframe.width = '600'; // Ajusta el ancho del iframe
      iframe.height = '450'; // Ajusta la altura del iframe
      iframe.style.border = '0';
      iframe.allowFullscreen = '';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';

      mapContainer.appendChild(iframe); // Añade el iframe al contenedor
    })
    .catch(error => console.error('Error al obtener la ubicación:', error));
}

//Elementos de la tabla fin
function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

//Previsualiza las imagenes de las tablas
function addPreviewEvents() {
  const previewLinks = document.querySelectorAll('.preview-link');
  const previewContainer = document.getElementById('preview-container');

  previewLinks.forEach(link => {
    link.addEventListener('mouseenter', event => {
      const imgSrc = event.target.dataset.img;

      if (imgSrc && imgSrc !== '#') {
        // Si la URL de la imagen es válida, mostramos la imagen
        previewContainer.style.backgroundImage = `url(${imgSrc})`;
        previewContainer.innerHTML = ''; // Limpiar mensaje de imagen no disponible
      } else {
        // Si la URL no es válida, mostramos el mensaje de "Imagen no disponible"
        previewContainer.style.backgroundImage = '';
        previewContainer.innerHTML = '<p>Imagen no disponible</p>';
      }

      previewContainer.style.display = 'block';
    });

    link.addEventListener('mousemove', event => {
      previewContainer.style.top = `${event.pageY + 10}px`;
      previewContainer.style.left = `${event.pageX + 10}px`;
    });

    link.addEventListener('mouseleave', () => {
      previewContainer.style.display = 'none';
      previewContainer.innerHTML = ''; // Limpiar contenido cuando el mouse sale
    });
  });
}


// ------------------------------------------------------------------------------------------------



// Se cambie a color y se quite despues de cerrar product
const closeButton = document.querySelector(".close-btn_text_and_image3");
const fileInput2 = document.getElementById("file-upload2");
const label2 = document.querySelector('label[for="file-upload2"]');

// Detectar cuando cambia el archivo seleccionado
fileInput2.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
        label2.classList.add("active");
    } else {
        label2.classList.remove("active");
    }
});

// Restaurar estado cuando se cierra la ventana emergente
closeButton.addEventListener("click", function () {
    // Eliminar la clase `active` si no hay un archivo seleccionado 
    if (!fileInput2.files || fileInput2.files.length === 0) {
        label2.classList.remove("active");
    }
});

// Inicio
const closeButton1 = document.querySelector(".close-btn_image1");
const fileInput = document.getElementById("file-upload"); // Ajustar ID al que usas en tu HTML
const label = document.querySelector('label[for="file-upload"]');

// Detectar cuando se selecciona un archivo
fileInput.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
        label.classList.add("active"); // Cambia de color al seleccionar un archivo
    } else {
        label.classList.remove("active");
    }
});

// Restaurar estado al cerrar la ventana
closeButton1.addEventListener("click", function () {
    if (!fileInput.files || fileInput.files.length === 0) {
        label.classList.remove("active"); // Se quita el color si no hay archivos seleccionados
    }
});

// Elementos relevantes
const closeButton4 = document.querySelector(".close-btn_text_and_image4");
const fileInput3 = document.getElementById("file-upload3");
const label3 = document.querySelector('label[for="file-upload3"]');

// Detectar cuando se selecciona un archivo
fileInput3.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
        label3.classList.add("active"); // Cambia de color al seleccionar un archivo
    } else {
        label3.classList.remove("active");
    }
});

// Restaurar estado al cerrar la ventana
closeButton4.addEventListener("click", function () {
    if (!fileInput3.files || fileInput3.files.length === 0) {
        label3.classList.remove("active"); // Quita el color si no hay archivos seleccionados
    }
});

// Elementos relevantes
const closeButton5 = document.querySelector(".close-btn_text_and_image"); // Botón de cierre
const fileInput5 = document.getElementById("file-upload1"); // Ajusta ID al que usas en tu HTML
const label5 = document.querySelector('label[for="file-upload1"]'); // Etiqueta asociada
const modal = document.querySelector("#upload_image_and_text_id"); // Modal completo

// Detectar cuando se selecciona un archivo
fileInput5.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
        label5.classList.add("active"); // Cambia de estilo al seleccionar un archivo
    } else {
        label5.classList.remove("active");
    }
});

// Restaurar estado al cerrar la ventana
closeButton.addEventListener("click", function () {
    fileInput.value = ""; // Limpia el input de archivo
    label.classList.remove("active"); // Quita el estilo del label
    modal.style.display = "none"; // Oculta el modal
});





// limite de palabras

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("send_text_component");
  const wordCountDisplay = document.querySelector(".word-count");
  const maxWords = 310; // Límite máximo de palabras

  if (inputField && wordCountDisplay) {
    inputField.addEventListener("input", () => {
      const text = inputField.value.trim(); // Elimina espacios innecesarios
      const words = text === "" ? [] : text.split(/\s+/); // Separa palabras por espacios
      const wordCount = words.length; // Cuenta las palabras

      // Actualiza el contador de palabras dinámicamente
      wordCountDisplay.textContent = `${wordCount}/${maxWords} Palabras`;

      // Cambia el color si excede el límite
      if (wordCount > maxWords) {
        wordCountDisplay.classList.add("over-limit");
      } else {
        wordCountDisplay.classList.remove("over-limit");
      }
    });
  } else {
    console.error("No se encontraron los elementos 'send_text_component' o 'word-count'.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('.text-input input'); // Todos los campos de texto
  const maxChars = 310; // Límite de caracteres
  
  inputs.forEach(input => {
    const charCountDisplay = input.nextElementSibling; // El span de contador de caracteres
    if (input && charCountDisplay) {
      input.addEventListener("input", () => {
        const text = input.value; // Captura el texto del campo
        const charCount = text.length; // Calcula el número de caracteres

        // Actualiza el contador de caracteres
        charCountDisplay.textContent = `${charCount}/${maxChars} Caracteres`;

        // Cambia el estilo si excede el límite
        if (charCount > maxChars) {
          charCountDisplay.classList.add("over-limit"); // Aplica estilo para exceso de caracteres
          input.value = text.slice(0, maxChars); // Limita el número de caracteres
        } else {
          charCountDisplay.classList.remove("over-limit"); // Remueve el estilo si está dentro del límite
        }
      });
    }
  });
});

//Contador de Team
document.addEventListener('DOMContentLoaded', () => {
  const maxLength = 310;

  // Referencias a los elementos de los inputs y los contadores
  const positionInput = document.getElementById('position_team');
  const descriptionInput = document.getElementById('description_team');
  const positionCounter = document.getElementById('word-count-position');
  const descriptionCounter = document.getElementById('word-count-description');

  // Función para actualizar el contador de caracteres
  function updateCharCount(inputElement, counterElement) {
      const currentLength = inputElement.value.length;
      counterElement.textContent = `${currentLength}/${maxLength} Letras`;
  }

  // Añadir eventos de entrada de texto para ambos campos
  positionInput.addEventListener('input', () => updateCharCount(positionInput, positionCounter));
  descriptionInput.addEventListener('input', () => updateCharCount(descriptionInput, descriptionCounter));
});



// desabilitar boton 2 campos de texto 
document.addEventListener("DOMContentLoaded", function () {
  const descLocationInput = document.getElementById("descLocation");
  const locationInput = document.getElementById("location");
  const confirmButton = document.getElementById("arrowLocation");

  // Función para habilitar o deshabilitar el botón
  function toggleConfirmButton() {
      if (descLocationInput.value.trim() !== "" && locationInput.value.trim() !== "") {
          confirmButton.classList.remove("disabled");
          confirmButton.style.pointerEvents = "auto"; // Habilitar clic
          confirmButton.style.opacity = "1"; // Restaurar opacidad
      } else {
          confirmButton.classList.add("disabled");
          confirmButton.style.pointerEvents = "none"; // Deshabilitar clic
          confirmButton.style.opacity = "0.5"; // Reducir opacidad
      }
  }

  // Evitar que el botón funcione si los campos están vacíos
  confirmButton.addEventListener("click", function (event) {
      if (descLocationInput.value.trim() === "" || locationInput.value.trim() === "") {
          event.preventDefault(); // Prevenir la acción predeterminada
          alert("Por favor, complete todos los campos antes de continuar.");
      }
  });

  // Escuchar cambios en los campos
  descLocationInput.addEventListener("input", toggleConfirmButton);
  locationInput.addEventListener("input", toggleConfirmButton);

  // Deshabilitar el botón al cargar la página
  toggleConfirmButton();
});


// desabilitar boton 1 imagen y 2 textos
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("file-upload1");
  const positionInput = document.getElementById("position_team");
  const descriptionInput = document.getElementById("description_team");
  const confirmButton = document.getElementById("arrowTeam");

  // Deshabilita el botón al cargar la página
  confirmButton.style.pointerEvents = "none"; 
  confirmButton.style.opacity = "0.5";

  // Función para verificar si todos los campos están completos
  function checkInputs() {
      const isFileUploaded = fileInput.files.length > 0;
      const isPositionFilled = positionInput.value.trim() !== "";
      const isDescriptionFilled = descriptionInput.value.trim() !== "";

      if (isFileUploaded && isPositionFilled && isDescriptionFilled) {
          confirmButton.style.pointerEvents = "auto"; // Activa el botón
          confirmButton.style.opacity = "1"; 
      } else {
          confirmButton.style.pointerEvents = "none"; // Desactiva el botón
          confirmButton.style.opacity = "0.5"; 
      }
  }

  // Eventos para verificar cambios en los inputs
  fileInput.addEventListener("change", checkInputs);
  positionInput.addEventListener("input", checkInputs);
  descriptionInput.addEventListener("input", checkInputs);
});


// Obtener los elementos del DOM
const fileInpution = document.getElementById('file-upload2');
const nameInput = document.getElementById('name_product');
const priceInput = document.getElementById('price_product');
const descriptionInput = document.getElementById('description_product');
const confirmButton = document.getElementById('arrowProduct');

// Verificar si el input de archivo está correctamente obtenido
if (!fileInpution) {
    console.error("Elemento con ID 'file-upload2' no encontrado.");
}

// Función para validar los campos
function validateInputs() {
    // Verificar si todos los campos están llenos
    const isFileSelected = fileInpution.files.length > 0;
    const isNameFilled = nameInput.value.trim() !== '';
    const isPriceFilled = priceInput.value.trim() !== '';
    const isDescriptionFilled = descriptionInput.value.trim() !== '';

    // Habilitar o deshabilitar el botón de confirmar
    if (isFileSelected && isNameFilled && isPriceFilled && isDescriptionFilled) {
        confirmButton.classList.remove('disabled'); // Remueve la clase "disabled"
        confirmButton.style.cursor = 'pointer'; // Cambiar el cursor a "puntero"
    } else {
        confirmButton.classList.add('disabled'); // Agrega la clase "disabled"
        confirmButton.style.cursor = 'not-allowed'; // Cambiar el cursor a "no permitido"
    }
}

// Agregar eventos para escuchar cambios en los inputs
fileInpution.addEventListener('change', validateInputs);
nameInput.addEventListener('input', validateInputs);
priceInput.addEventListener('input', validateInputs);
descriptionInput.addEventListener('input', validateInputs);


// funcion para una imagen y 4 textos
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#send_text_title, #send_text_description, #send_text_slogan, #send_text_price");
  const imageInput = document.getElementById("file-upload3");
  const confirmButton = document.querySelector("#arrowShop");

  // Función para validar si todos los inputs están llenos
  const validateForm = () => {
      const allInputsFilled = Array.from(inputs).every(input => input.value.trim() !== "");
      const imageSelected = imageInput.files.length > 0;

      // Habilitar o deshabilitar el botón según las validaciones
      confirmButton.style.pointerEvents = (allInputsFilled && imageSelected) ? "auto" : "none";
      confirmButton.style.opacity = (allInputsFilled && imageSelected) ? "1" : "0.5"; // Cambia la opacidad para dar una pista visual
  };

  // Agregar eventos a todos los inputs de texto
  inputs.forEach(input => {
      input.addEventListener("input", validateForm);
  });
});

// boton de desabilitado de solo un texto
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("send_text_component");
  const confirmButton = document.getElementById("idSwitcher");

  // Verificar el contenido del campo al escribir
  inputField.addEventListener("input", function () {
      if (inputField.value.trim() !== "") {
          confirmButton.classList.remove("disabled"); // Elimina la clase que lo deshabilita
          confirmButton.style.pointerEvents = "auto"; // Asegura que sea clickeable
          confirmButton.style.opacity = "1"; // Asegura que sea visible al 100%
      } else {
          confirmButton.classList.add("disabled"); // Agrega la clase que lo deshabilita
          confirmButton.style.pointerEvents = "none"; // Evita clics
          confirmButton.style.opacity = "0.5"; // Cambia la visibilidad
      }
  });
});


// boton desabiltado solo cuando se ingrese una imagen
// Selección de elementos
// Selección de elementos
const fileInputt = document.getElementById('file-upload');
const confirmBtn = document.querySelector('.confirm-btn');
const popUp = document.getElementById('upload_image_id');

// Función para deshabilitar el botón al abrir el pop-up
function initializePopUp() {
    confirmBtn.classList.add('disabled'); // Desactiva el botón
    fileInput.value = ""; // Resetea el input de archivo
}

// Escucha el evento de cambio en el input de archivo
fileInputt.addEventListener('change', () => {
    if (fileInputt.files.length > 0) {
        confirmBtn.classList.remove('disabled'); // Activa el botón si hay archivo
    } else {
        confirmBtn.classList.add('disabled'); // Asegura que permanezca desactivado si no hay archivo
    }
});

// Supongamos que hay un botón o acción para abrir el pop-up
const openPopUpButton = document.querySelector('.open-popup-btn'); // Reemplaza con el selector de tu botón
openPopUpButton.addEventListener('click', initializePopUp);
