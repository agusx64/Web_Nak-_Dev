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


// Función que limita y cuenta la cantidad de caracteres en un input (Global)
function limitCharacters(inputElement, characters) {
  // Verifica si el input ya tiene el listener y el contador
  if (!inputElement.hasAttribute('data-limit-applied')) {
      // Crea el contador si no existe
      let wordCountElement = inputElement.nextElementSibling;
      if (!wordCountElement || !wordCountElement.classList.contains('word-count')) {
          wordCountElement = document.createElement('span');
          wordCountElement.classList.add('word-count');
          inputElement.parentNode.appendChild(wordCountElement);
      }

      // Inicializa el contador con la cantidad de caracteres actuales
      const currentLength = inputElement.value.length;
      wordCountElement.textContent = `${currentLength}/${characters} Caracteres`;

      // Muestra el contador automáticamente
      wordCountElement.style.display = 'inline';

      // Agrega el evento de input para limitar los caracteres y actualizar el contador
      inputElement.addEventListener('input', () => {
          const currentLength = inputElement.value.length;

          // Limita la longitud del valor
          if (currentLength > characters) {
              inputElement.value = inputElement.value.slice(0, characters); // Limita el texto
          }

          // Actualiza el contador de caracteres
          wordCountElement.textContent = `${currentLength}/${characters} Caracteres`;

          // Cambia el estilo del contador cuando se alcanza el límite
          wordCountElement.classList.toggle('at-limit', currentLength === characters);
      });

      // Marca el input como ya procesado
      inputElement.setAttribute('data-limit-applied', 'true');
  }
  else {
      // Si el limitador ya ha sido aplicado, simplemente actualiza el contador
      let wordCountElement = inputElement.nextElementSibling;
      const currentLength = inputElement.value.length;
      wordCountElement.textContent = `${currentLength}/${characters} Caracteres`;

      // Cambia el estilo del contador cuando se alcanza el límite
      wordCountElement.classList.toggle('at-limit', currentLength === characters);
  }
}


//Etiquetas de elemntos diamicos

//Venta de un solo texto
let input_tag_text = document.getElementById('single_input');
let input_placeholder = document.getElementById('send_text_component');

//Venta de 2 textos
let input_tag_text_ubi = document.getElementById('text_change');
let input_placeholder_ubi = document.getElementById('descLocation');
let input_tag_text_ubi1 = document.getElementById('text_change1');
let input_placeholder_ubi1 = document.getElementById('location');

//Venta de 3 textos
let input_name_product = document.getElementById('name_product');
let input_price_product = document.getElementById('price_product');
let input_description_product = document.getElementById('description_product');

//Venta 1imagen y 2 textos
let input_position_team = document.getElementById('position_team');
let input_description_team = document.getElementById('description_team');

//Ventana de una sola imagen
let input_upload_tag = document.getElementById('title_tag_upload');

//Ventana de una imagen y 4 inputs
let label_tag_header = document.getElementById('title_tag_upload');
let label_text_header = document.getElementById('text_title_input');
let label_text_header1 = document.getElementById('text_title_input1');
let label_text_header2 = document.getElementById('text_title_input2');
let label_text_header3 = document.getElementById('text_title_input3');

let placeholder_text_input = document.getElementById('text_title_input'); //Aqui se hizo un cambio por si falla aqui es jaja sólo fue agregado el ";"
let placeholder_text_input1 = document.getElementById('send_text_title');
let placeholder_text_input2 = document.getElementById('send_text_description');
let placeholder_text_input3 = document.getElementById('send_text_slogan');
let placeholder_text_input4 = document.getElementById('send_text_price');


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
  setInterval(getLocation(), 4000);
  

});

// Configura los botones del menú
inicioBtn.addEventListener('click', function () {
  ocultarSecciones();
  inicioContent.hidden = false;

  // Botones del menú
  const button_description = document.getElementById('btn_text_home');
  const button_slogan = document.getElementById('btn_text_home1');
  const button_image = document.getElementById('btn_image_home');

  // Configuración de límites de caracteres
  const characterLimits = {
    insert_description: 110, // Límite para descripción
    insert_slogan: 50,       // Límite para slogan
    insert_image: null,      // Sin límite para imágenes
  };

  // Selecciona el span con clase word-count
  const wordCount = document.querySelector('.word-count');

  // Función para manejar límites de caracteres y contador
  function handleCharacterLimitWithCounter(inputElement, limit) {
    inputElement.addEventListener('input', function () {
      const currentLength = inputElement.value.length;

      // Actualiza el contador en el span .word-count
      wordCount.textContent = `${currentLength}/${limit} Caracteres`;

      // Limita el texto si excede el máximo
      if (currentLength > limit) {
        inputElement.value = inputElement.value.slice(0, limit);
        wordCount.textContent = `${limit}/${limit} Caracteres`;
      }

      // Cambia el estilo del contador si está en el límite
      if (currentLength === limit) {
        wordCount.classList.add('at-limit'); // Estilo opcional para el límite alcanzado
      } else {
        wordCount.classList.remove('at-limit');
      }
    });
  }

  // Acción para subir imagen (sin contador)
  button_image.addEventListener('click', function () {
    currentAction = 'insert_image';
    input_upload_tag.textContent = 'Sube una imagen para el fondo principal';

    // Limpia el contador si no aplica
    wordCount.textContent = '';
  });

  // Acción para slogan
  button_slogan.addEventListener('click', function () {
    currentAction = 'insert_slogan';
    input_tag_text.textContent = 'Escribe un slogan aquí';
    input_placeholder.placeholder = 'Slogan';

    // Actualizar el contador al inicio
    wordCount.textContent = `0/${characterLimits[currentAction]} Caracteres`;

    // Aplicar límite de caracteres
    handleCharacterLimitWithCounter(
      input_placeholder,
      characterLimits[currentAction]
    );
  });

  // Acción para descripción
  button_description.addEventListener('click', function () {
    currentAction = 'insert_description';
    input_tag_text.textContent = 'Escribe una descripción aquí';
    input_placeholder.placeholder = 'Descripción';

    // Actualizar el contador al inicio
    wordCount.textContent = `0/${characterLimits[currentAction]} Caracteres`;

    // Aplicar límite de caracteres
    handleCharacterLimitWithCounter(
      input_placeholder,
      characterLimits[currentAction]
    );
  });
});

const textConfirmButton = document.getElementById('idSwitcher');
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
    showSuccess();

  }
});
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
    showSuccess();


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
    showSuccess();

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

    // Ubicar el nombre del input del pop up (Id)
    const shop_text_pop = document.getElementById('send_text_title');
    limitCharacters(shop_text_pop, 12); // Aplica el límite de caracteres
  
    const shop_title_pop = document.getElementById('send_text_description');
    limitCharacters(shop_title_pop, 20); // Aplica el límite de caracteres

    // Ubicar el nombre del input del pop up (Id)
    const shop_slogan_pop = document.getElementById('send_text_slogan');
    limitCharacters(shop_slogan_pop, 35); // Aplica el límite de caracteres
     
    const shop_price_pop = document.getElementById('send_text_price');
    limitCharacters(shop_price_pop, 12); // Aplica el límite de caracteres
     

    button_product_1.addEventListener('click', function() {
      currentAction = 'insert_product_1';  // Asigna la acción de producto 1
      text_label_popup_4.innerHTML = 'Producto 1<br>Inserte una imagen';  //Cambiar cosas
      text_title_input.textContent = 'Título'; 
      text_title_input1.textContent = 'Pequeña descripción'; 
      text_title_input2.textContent = 'Eslogan'; 
      text_title_input3.textContent = 'Precio'; 
      placeholder_text_input1.placeholder = 'Ingresar título';
      placeholder_text_input2.placeholder = 'Ingresar descripción';
      placeholder_text_input3.placeholder = 'Ingresar eslogan';
      placeholder_text_input4.placeholder = 'Ingresar precio';
    });
  
    button_product_2.addEventListener('click', function() {
      currentAction = 'insert_product_2';  // Asigna la acción de producto 2
      text_label_popup_4.innerHTML = 'Producto 2<br>Inserte una imagen';
      text_title_input.textContent = 'Título'; 
      text_title_input1.textContent = 'Pequeña descripción'; 
      text_title_input2.textContent = 'Eslogan'; 
      text_title_input3.textContent = 'Precio';
      placeholder_text_input1.placeholder = 'Ingresar título';
      placeholder_text_input2.placeholder = 'Ingresar descripción';
      placeholder_text_input3.placeholder = 'Ingresar eslogan';
      placeholder_text_input4.placeholder = 'Ingresar precio';
    });

    button_product_3.addEventListener('click', function() {
      currentAction = 'insert_product_3';  // Asigna la acción de producto 3
      text_label_popup_4.innerHTML = 'Producto 3<br>Inserte una imagen';
      text_title_input.textContent = 'Título'; 
      text_title_input1.textContent = 'Descripcion pequepña'; 
      text_title_input2.textContent = 'Eslogan '; 
      text_title_input3.textContent = 'Precio';
      placeholder_text_input1.placeholder = 'Ingresar título';
      placeholder_text_input2.placeholder = 'Ingresar descripción';
      placeholder_text_input3.placeholder = 'Ingresar eslogan';
      placeholder_text_input4.placeholder = 'Ingresar precio';
    });
    
    button_product_4.addEventListener('click', function() {
      currentAction = 'insert_product_4';  // Asigna la acción de producto 4
      text_label_popup_4.innerHTML = 'Producto 4<br>Inserte una imagen';
      text_title_input.textContent = 'Título'; 
      text_title_input1.textContent = 'Descripción pequeña'; 
      text_title_input2.textContent = 'Eslogan'; 
      text_title_input3.textContent = 'Precio';
      placeholder_text_input1.placeholder = 'Ingresar título';
      placeholder_text_input2.placeholder = 'Ingresar descripción';
      placeholder_text_input3.placeholder = 'Ingresar eslogan';
      placeholder_text_input4.placeholder = 'Ingresar precio';
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

    showSuccess();

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

    showSuccess();

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

    showSuccess();

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

    showSuccess();

  }

})

// Evento para mostrar la sección de 'nosotros'
nosotrosBtn.addEventListener('click', function() {
  ocultarSecciones();  
  nosotrosContent.hidden = false;  

  // Botones de la sección "Nosotros"
  const button_mision = document.getElementById('btn_text_us');
  const button_imgMision = document.getElementById('btn_image_us');
  const button_vision = document.getElementById('btn_text_us1');
  const button_imgVision = document.getElementById('btn_image_us1');


  const nosotrospop = document.getElementById('send_text_component');
  
  // Agregar eventos a cada botón para aplicar el límite correspondiente
  button_mision.addEventListener('click', function () {
  limitCharacters(nosotrospop, 275); // Aplica el límite de 18 caracteres
  });
  
  button_vision.addEventListener('click', function () {
  limitCharacters(nosotrospop, 275); // Aplica el límite de 95 caracteres
  });
 
  // Acción para la misión
  button_mision.addEventListener('click', function() {
      currentAction = 'insert_mision';  // Asigna la acción de misión
      input_tag_text.textContent = 'Escribe la misión aquí';
      input_placeholder.placeholder = 'Misión';
  });

  // Acción para imagen de misión (sin contador)
  button_imgMision.addEventListener('click', function() {
      currentAction = 'insert_image_mision';  // Asigna la acción de imagen de misión
      input_upload_tag.textContent = 'Sube una imagen para la misión';

  });

  // Acción para la visión
  button_vision.addEventListener('click', function() {
      currentAction = 'insert_vision';  // Asigna la acción de visión
      input_tag_text.textContent = 'Escribe la visión aquí';
      input_placeholder.placeholder = 'Visión';

  });

  // Acción para imagen de visión (sin contador)
  button_imgVision.addEventListener('click', function() {
      currentAction = 'insert_image_vision';  // Asigna la acción de imagen de visión
      input_upload_tag.textContent = 'Sube una imagen para la visión';
  });
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

    showSuccess();

  } else if (currentAction === 'insert_image_vision'){

    const insertImage = document.getElementById('file-upload');
    const form_data = new FormData();
    form_data.append('image', insertImage.files[0]);
    
    fetch('/insert_image_vision', {
      method: 'POST',
      body: form_data  // FormData maneja el Content-Type automáticamente
    });

    showSuccess();

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

    showSuccess();

  } else if (currentAction === 'insert_vision'){
    const insertVision = document.getElementById('send_text_component');

    let vision = { vision: insertVision.value };

    // Fetch para insertar slogan
    fetch('/insert_vision', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vision)
    });

    showSuccess();

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

  //Ref del nombre de la nueva variable en relación con la entrada del pop up
  const historypop = document.getElementById('send_text_component'); // send_text_component = pop up de 1 texto

// Agregar eventos a cada botón para aplicar el límite correspondiente
button_historia.addEventListener('click', function () {
limitCharacters(historypop, 310); // Aplica el límite de 275 caracteres
});

  // Acción para Historia
  button_historia.addEventListener('click', function() {
    currentAction = 'insert_historia';  // Asigna la acción de historia
    input_tag_text.textContent = 'Escribe la historia aquí';
    input_placeholder.placeholder = 'Historia';

  });

  // Acción para Imagen de Historia (sin contador)
  button_image_historia.addEventListener('click', function() {
    currentAction = 'insert_image_historia';  // Asigna la acción de imagen historia
    input_upload_tag.textContent = 'Sube una imagen para la historia';
  });

  // Acción para Imagen de Historia 1 (sin contador)
  button_image_historia1.addEventListener('click', function() {
    currentAction = 'insert_image_historia1';  // Asigna la acción de imagen historia1
    input_upload_tag.textContent = 'Sube una imagen adicional para la historia';
  });

  // Acción para Imagen de Historia 2 (sin contador)
  button_image_historia2.addEventListener('click', function() {
    currentAction = 'insert_image_historia2';  // Asigna la acción de imagen historia2
    input_upload_tag.textContent = 'Sube una segunda imagen adicional para la historia';
  });

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

    showSuccess();

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

    showSuccess();

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

    showSuccess();

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

    showSuccess();

  }

})

// Evento para mostrar la sección de 'equipo'

equipoBtn.addEventListener('click', function() {
  ocultarSecciones();  
  equipoContent.hidden = false;

const button_perfil_1 = document.getElementById('btn_image_team');
const button_perfil_2 = document.getElementById('btn_image_team1');
const button_perfil_3 = document.getElementById('btn_image_team2');

  // Ubicar el nombre del input del pop up (Id)
  const teampop = document.getElementById('position_team');
  limitCharacters(teampop, 18); // Aplica el límite de caracteres

  const teampop1 = document.getElementById('description_team');
  limitCharacters(teampop1, 95); // Aplica el límite de caracteres


 // Acción para perfil
button_perfil_1.addEventListener('click', function() {
  currentAction = 'insert_team_image1'; 
  upload_image.innerHTML = 'Perfil 1<br>Inserte una imagen';
  text1.textContent = 'Ingrese el texto que desea cambiar'; 
  text2.textContent = 'Ingrese el texto que desea cambiar'; 

});

button_perfil_2.addEventListener('click', function() {
  currentAction = 'insert_team_image2'; 
  upload_image.innerHTML = 'Perfil 2<br>Inserte una imagen';
  text1.textContent = 'Ingrese el texto que desea cambiar'; 
  text2.textContent = 'Ingrese el texto que desea cambiar';

});

button_perfil_3.addEventListener('click', function() {
  currentAction = 'insert_team_image3'; 
  upload_image.innerHTML = 'Perfil 3<br>Inserte una imagen';
  text1.textContent = 'Ingrese el texto que desea cambiar'; 
  text2.textContent = 'Ingrese el texto que desea cambiar';

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

      showSuccess();


  }else if (currentAction === 'insert_team_image2') {

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

      showSuccess();

  } else if (currentAction === 'insert_team_image3'){

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

      showSuccess();

  }
  
});


// Función para configurar la acción actual y actualizar textos
testimoniosBtn.addEventListener('click', function () {
  ocultarSecciones();
  testimoniosContent.hidden = false;

  // Límite de caracteres para los inputs
  const testimon = document.getElementById('position_team');
  limitCharacters(testimon, 14);

  const testimon1 = document.getElementById('description_team');
  limitCharacters(testimon1, 120);

  const desctestimon = document.getElementById('send_text_component');
  limitCharacters(desctestimon, 150);

  // Eventos para los botones de testimonios
  const button_testimony1 = document.getElementById('btn_image_testim');
  const button_testimony2 = document.getElementById('btn_image_testim1');
  const button_testimony3 = document.getElementById('btn_image_testim2');
  const button_description_testimony = document.getElementById('btn_text_testim'); // Botón específico para la descripción 


  
    // Acción para testimonios
    button_description_testimony.addEventListener('click', function() {
      currentAction = 'insert_description_testimony';  // Asigna la acción de historia
      input_tag_text.textContent = 'Escribe la descripción aquí';
      input_placeholder.placeholder = 'Descripción';
  
    });

  button_testimony1.addEventListener('click', function() {
    currentAction = 'insert_testimony1'; 
    upload_image.innerHTML = 'Perfil 1<br>Inserte una imagen';
    text1.textContent = 'Ingrese el nombre'; 
    text2.textContent = 'Ingrese el testimonio'; 
    input_position_team.placeholder = 'Escriba el nombre'; 
    input_description_team.placeholder = 'Escriba el testimonio'; 
  
  });

  button_testimony2.addEventListener('click', function() {
    currentAction = 'insert_testimony2'; 
    upload_image.innerHTML = 'Perfil 2<br>Inserte una imagen';
    text1.textContent = 'Ingrese el nombre'; 
    text2.textContent = 'Ingrese el testimonio'; 
    input_position_team.placeholder = 'Escriba el nombre'; 
    input_description_team.placeholder = 'Escriba el testimonio'; 
  
  });

  button_testimony3.addEventListener('click', function() {
    currentAction = 'insert_testimony3'; 
    upload_image.innerHTML = 'Perfil 3<br>Inserte una imagen';
    text1.textContent = 'Ingrese el nombre'; 
    text2.textContent = 'Ingrese el testimonio'; 
    input_position_team.placeholder = 'Escriba el nombre'; 
    input_description_team.placeholder = 'Escriba el testimonio'; 
  });

});





// Confirmación para descripción de testimonios
textConfirmButton.addEventListener('click', function () {
  if (currentAction === 'insert_description_testimony') {
    const insertDescriptionTestimony = document.getElementById('send_text_component');

    if (insertDescriptionTestimony) {
      const descriptionTestimony = { descriptionTestimony: insertDescriptionTestimony.value };

      fetch('/insert_description_testimony', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(descriptionTestimony),

      });

    }

    showSuccess();

  }

});

// Insertar testimonios con imágenes
const button_insert_testimony = document.getElementById('arrowTeam');
button_insert_testimony.addEventListener('click', function () {
  const image_testimony = document.getElementById('file-upload1');
  const name_testimony = document.getElementById('position_team');
  const description_testimony = document.getElementById('description_team');

  if (image_testimony && name_testimony && description_testimony) {
    const valueName = name_testimony.value;
    const valueDescriptionTestimony = description_testimony.value;

    let formData = new FormData();
    formData.append('imagen', image_testimony.files[0]);
    formData.append('nombre', valueName);
    formData.append('testimonio', valueDescriptionTestimony);

    let endpoint = '';
    if (currentAction === 'insert_testimony1') {

      showSuccess();
      endpoint = '/insert_testimony1';

    } else if (currentAction === 'insert_testimony2') {

      endpoint = '/insert_testimony2';
      showSuccess();

    } else if (currentAction === 'insert_testimony3') {

      endpoint = '/insert_testimony3';
      showSuccess();

    }

    if (endpoint) {

      fetch(endpoint, {

        method: 'POST',
        body: formData

      });

    }

  }

});



// Evento para mostrar la sección de 'ubicacion'
ubicacionBtn.addEventListener('click', function () {
  ocultarSecciones();
  ubicacionContent.hidden = false;
   // Ubicar el nombre del input del pop up (Id)
   const locationpop = document.getElementById('descLocation');
   limitCharacters(locationpop, 120); // Aplica el límite de caracteres
 
   const locationframepop = document.getElementById('location');
   limitCharacters(locationframepop, 450); // Aplica el límite de caracteres
 
});



const button_location = document.getElementById('btn_text_location');
button_location.addEventListener('click', function () {
    currentAction = 'insert_location';
    input_tag_text_ubi.textContent = 'Describa la ubicación';
    input_placeholder_ubi.placeholder = 'Descripción';
    input_tag_text_ubi1.textContent = 'Inserte el liveframe aquí';
    input_placeholder_ubi1.placeholder = 'Liveframe';

});

const button_insert_location = document.getElementById('arrowLocation');

button_insert_location.addEventListener('click', function () {
    if (currentAction === 'insert_location') {

        const descLocation = document.getElementById('descLocation'); // Seleccionamos el input directamente
        const location = document.getElementById('location').value;

        const data = {

            descripcion: descLocation.value, // Ahora usamos el valor del input
            ubicacion: location

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
            .catch((error) => {

              console.error('Error:', error)
              showError();

            });


        showSuccess();

    }

});




// Evento para mostrar la sección de 'recetas'
recetasBtn.addEventListener('click', function() {
  ocultarSecciones();  
recetasContent.hidden = false; 

const button_recipe = document.getElementById('btn_images_recipes'); //No hay inyección para la db
const button_lunch = document.getElementById('btn_text_recipes1');
const button_dessert = document.getElementById('btn_text_recipes2');
const button_breakfast = document.getElementById('btn_text_recipes3');


   // Ubicar el nombre del input del pop up (Id)
   const shop_text_pop = document.getElementById('send_text_title');
   limitCharacters(shop_text_pop, 20); // Aplica el límite de caracteres
 
   const shop_title_pop = document.getElementById('send_text_description');
   limitCharacters(shop_title_pop, 50); // Aplica el límite de caracteres

   // Ubicar el nombre del input del pop up (Id)
   const shop_slogan_pop = document.getElementById('send_text_slogan');
   limitCharacters(shop_slogan_pop, 100); // Aplica el límite de caracteres
    
   const shop_price_pop = document.getElementById('send_text_price');
   limitCharacters(shop_price_pop, 750); // Aplica el límite de caracteres
    
   button_breakfast.addEventListener('click', function() {
    currentAction = 'insert_desayunos';  
    text_label_popup_4.innerHTML = 'Desayunos<br>Inserte una imagen';  //Cambiar cosas
    text_title_input.textContent = 'Titulo '; 
    text_title_input1.textContent = 'Descripción'; 
    text_title_input2.textContent = 'Ingredientes ';  
    text_title_input3.textContent = 'Preparación'; 

    placeholder_text_input1.placeholder = 'Ingresar título';
    placeholder_text_input2.placeholder = 'Ingresar descripción'; 
    placeholder_text_input3.placeholder = 'Ingresar ingredientes';
    placeholder_text_input4.placeholder = 'Ingresar preparación';
  });

  button_lunch.addEventListener('click', function() {
    currentAction = 'insert_comidas';  
     text_label_popup_4.innerHTML = 'Comida<br>Inserte una imagen';  //Cambiar cosas
     text_title_input.textContent = 'Título '; 
     text_title_input1.textContent = 'Descripción'; 
     text_title_input2.textContent = 'Ingredientes'; 
     text_title_input3.textContent = 'Preparación'; 

     placeholder_text_input1.placeholder = 'Ingresar título';
     placeholder_text_input2.placeholder = 'Ingresar descripción';
     placeholder_text_input3.placeholder = 'Ingresar ingredientes';
     placeholder_text_input4.placeholder = 'Ingresar preparación';
   });

    button_dessert.addEventListener('click', function() {
    currentAction = 'insert_postres';  
    text_label_popup_4.innerHTML = 'Postre<br>Inserte una imagen';  //Cambiar cosas
    text_title_input.textContent = 'Título '; 
    text_title_input1.textContent = 'Descripción'; 
    text_title_input2.textContent = 'Ingredientes'; 
    text_title_input3.textContent = 'Preparación'; 

    placeholder_text_input1.placeholder = 'Ingresar título';
    placeholder_text_input2.placeholder = 'Ingresar descripción';
    placeholder_text_input3.placeholder = 'Ingresar ingredientes';
    placeholder_text_input4.placeholder = 'Ingresar preparación';
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

    showSuccess();

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

    showSuccess();

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

    showSuccess();

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


 // Ubicar el nombre del input del pop up (Id)
 const shop_text_pop = document.getElementById('name_product');
 limitCharacters(shop_text_pop, 12); // Aplica el límite de caracteres

 const shop_title_pop = document.getElementById('price_product');
 limitCharacters(shop_title_pop, 12); // Aplica el límite de caracteres

 // Ubicar el nombre del input del pop up (Id)
 const shop_slogan_pop = document.getElementById('description_product');
 limitCharacters(shop_slogan_pop, 105); // Aplica el límite de caracteres

 
 button_producto1.addEventListener('click', function() {
  currentAction = 'insert_product1';
  products_image.innerHTML = 'Producto 1<br>Inserte una imagen';  //Cambiar cosas
  products_p1.textContent = 'Titulo '; 
  products_p2.textContent = 'Pequeña descripción'; 
  products_p3.textContent = 'Descrición de principales caracteristicas'; 

  input_name_product.placeholder = 'Ingresar título';
  input_price_product.placeholder = 'Ingresar descripción';
  input_description_product.placeholder = 'Ingresar descripción';
});

button_producto2.addEventListener('click', function() {
  currentAction = 'insert_product2';
  products_image.innerHTML = 'Producto 2<br>Inserte una imagen';  //Cambiar cosas
  products_p1.textContent = 'Título'; 
  products_p2.textContent = 'Pequeña descripción'; 
  products_p3.textContent = 'Descrición de principales caracteristicas'; 

  input_name_product.placeholder = 'Ingresar título';
  input_price_product.placeholder = 'Ingresar descripción';
  input_description_product.placeholder = 'Ingresar descripción';
});

button_producto3.addEventListener('click', function() {
  currentAction = 'insert_product3';
  products_image.innerHTML = 'Producto 3<br>Inserte una imagen';  //Cambiar cosas
  products_p1.textContent = 'Título'; 
  products_p2.textContent = 'Descripción'; 
  products_p3.textContent = 'Descrición de principales caracteristicas'; 

  input_name_product.placeholder = 'Ingresar título';
  input_price_product.placeholder = 'Ingresar descripción';
  input_description_product.placeholder = 'Ingresar descripción'

});

button_producto4.addEventListener('click', function() {
  currentAction = 'insert_product4';
  products_image.innerHTML = 'Producto 4<br>Inserte una imagen';  //Cambiar cosas
  products_p1.textContent = 'Título'; 
  products_p2.textContent = 'Descripción'; 
  products_p3.textContent = 'Descripción de principales características'; 

  input_name_product.placeholder = 'Ingresar título';
  input_price_product.placeholder = 'Ingresar descripción';
  input_description_product.placeholder = 'Ingresar descripción detallada';
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
    
    showSuccess();
  
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
    
    showSuccess();

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
    
    showSuccess();

    
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

    showSuccess();
    
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
            <a href="${img}" class="preview-link-img" data-img="${img}">Imagen cargada</a>
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
      showError();
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
      <td><a href="${img}" class="preview-link-img" data-img="${img}">Imagen</a></td>
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
            <a href="${img_vision}" class="preview-link-img" data-img="${img_vision}">Imagen cargada</a>
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
      showError();
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
            <a href="${img_carousel_3}" class="preview-link-img" data-img="${img_carousel_3}">Imagen 3</a>
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
      showError();
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

      <td><a href="${img}" class="preview-link-img" data-img="${img}">Imagen</a></td>

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
      <td><a href="${img}" class="preview-link-img" target="_blank" data-img="${img}">Imagen</a></td>
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
      <td><a href="${img}" class="preview-link-img" target="_blank" data-img="${img}">Imagen</a></td>
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
      <td><a href="${img}" class="preview-link-img" target="_blank" data-img="${img}">Imagen</a></td>
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
  fetch('/get_location_log')
    .then(response => response.json())
    .then(data => {
      
      console.log(data);
      const tableBodyTest = document.getElementById('table_log_ubicacion');
      tableBodyTest.innerHTML = ''; // Limpiar la tabla antes de insertar datos
  
      data.forEach(row => {
        const id = row.id || 'N/A';
        const descripcion = row.desc_ubicacion || 'Sin descripción';
        const mapa = row.ubicacion || 'Sin mapa disponible';
        const createdAt = row.created_at || 'Fecha no disponible';

        // Extraer el enlace del iframe (si existe)
        let link = '#';
        if (mapa.includes('<iframe')) {
          const srcMatch = mapa.match(/src="([^"]+)"/);
          link = srcMatch ? srcMatch[1] : '#';
        }

        // Crear la fila de la tabla
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
          <td>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
            </svg>
          </td>
          <td>${id}</td>
          <td>${truncateText(descripcion, 30)}</td>
          <td>
            <a class="preview-link-iframe" href="#" data-iframe="${link}" target="_blank">Ver ubicación</a>
          </td>
          <td>${createdAt}</td>
        `;

        // Agregar la fila a la tabla
        tableBodyTest.appendChild(tableRow);
      });
      
      // Agrega los eventos para la previsualización
      handleIframePreview(); // Llamar a la función que maneja el hover y muestra el iframe flotante
      
    })
    .catch(error => console.error('Error al obtener la ubicación:', error));
}




//Elementos de la tabla fin
function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

//Previsualiza el iframe
function handleIframePreview() {
  const previewLinksIframe = document.querySelectorAll('.preview-link-iframe');
  const previewContainerIframe = document.getElementById('iframe-preview-container'); // Contenedor de iframes

  previewLinksIframe.forEach(link => {
    link.addEventListener('mouseenter', event => {
      const iframeSrc = event.target.dataset.iframe;

      if (iframeSrc && iframeSrc !== '#') {
        previewContainerIframe.innerHTML = `<iframe src="${iframeSrc}" width="300" height="200" frameborder="0"></iframe>`;
        previewContainerIframe.style.display = 'block';
      } else {
        previewContainerIframe.innerHTML = '<p>Mapa no disponible</p>';
        previewContainerIframe.style.display = 'block';
      }
    });

    link.addEventListener('mousemove', event => {
      previewContainerIframe.style.top = `${event.pageY + 10}px`;
      previewContainerIframe.style.left = `${event.pageX + 10}px`;
    });

    link.addEventListener('mouseleave', () => {
      previewContainerIframe.style.display = 'none';
      previewContainerIframe.innerHTML = '';
    });
  });
}




//Previsualiza las imagenes de las tablas
function addPreviewEvents() {
  const previewLinksImg = document.querySelectorAll('.preview-link-img');
  const previewContainerImg = document.getElementById('preview-container'); // Contenedor de imágenes

  previewLinksImg.forEach(link => {
    link.addEventListener('mouseenter', event => {
      const imgSrc = event.target.dataset.img;

      if (imgSrc && imgSrc !== '#') {
        previewContainerImg.style.backgroundImage = `url(${imgSrc})`;
        previewContainerImg.style.display = 'block';
        previewContainerImg.innerHTML = ''; // Limpiar mensaje
      } else {
        previewContainerImg.innerHTML = '<p>Imagen no disponible</p>';
        previewContainerImg.style.backgroundImage = '';
        previewContainerImg.style.display = 'block';
      }
    });

    link.addEventListener('mousemove', event => {
      previewContainerImg.style.top = `${event.pageY + 10}px`;
      previewContainerImg.style.left = `${event.pageX + 10}px`;
    });

    link.addEventListener('mouseleave', () => {
      previewContainerImg.style.display = 'none';
      previewContainerImg.style.backgroundImage = '';
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




 


// // Sección de uborrar un texto y que se habilite el boton para cuando se ingrese el input
// un texto 
document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('send_text_component');
  const confirmButton = document.getElementById('idSwitcher');
  const resetButton = document.getElementById('reset_inputs');

  // Función para habilitar o deshabilitar el botón de confirmación
  const toggleButtonState = () => {
    const inputValue = inputField.value.trim();
    console.log('Input value:', inputValue);
    if (inputValue.length > 0) {
      confirmButton.classList.remove('disabled');
      confirmButton.style.pointerEvents = 'auto';
      confirmButton.style.opacity = '1';
      console.log('Botón habilitado');
    } else {
      confirmButton.classList.add('disabled');
      confirmButton.style.pointerEvents = 'none';
      confirmButton.style.opacity = '0.5';
      console.log('Botón deshabilitado');
    }
  };
  
  inputField.addEventListener('input', toggleButtonState);

  resetButton.addEventListener('click', function() {
    inputField.value = ''; // Borra el texto
    toggleButtonState(); // Llama a la función para actualizar el estado del botón
  });

  // Inicializar el estado del botón al cargar la página
  toggleButtonState();
});

// dos textos
document.addEventListener('DOMContentLoaded', () => {
  const inputDescLocation = document.getElementById('descLocation');
  const inputLocation = document.getElementById('location');
  const confirmButton = document.getElementById('arrowLocation');
  const resetButton = document.getElementById('reset_inputs2');

  // Función para habilitar o deshabilitar el botón de confirmación
  const toggleButtonState = () => {
    const inputDescValue = inputDescLocation.value.trim();
    const inputLocationValue = inputLocation.value.trim();
    console.log('Input descLocation value:', inputDescValue); // Verifica el contenido del campo
    console.log('Input location value:', inputLocationValue);

    // Si ambos campos tienen texto, habilitar el botón de confirmación
    if (inputDescValue.length > 0 && inputLocationValue.length > 0) {
      confirmButton.classList.remove('disabled');
      confirmButton.style.pointerEvents = 'auto';
      confirmButton.style.opacity = '1';
      console.log('Botón habilitado');
    } else {
      confirmButton.classList.add('disabled');
      confirmButton.style.pointerEvents = 'none';
      confirmButton.style.opacity = '0.5';
      console.log('Botón deshabilitado');
    }
  };

  // Escuchar eventos de entrada en los campos de texto para habilitar/deshabilitar el botón
  inputDescLocation.addEventListener('input', toggleButtonState);
  inputLocation.addEventListener('input', toggleButtonState);

  // Escuchar el evento de reset (cuando se hace clic en el botón de cancelar)
  resetButton.addEventListener('click', function() {
    inputDescLocation.value = ''; // Borra el texto
    inputLocation.value = ''; // Borra el texto
    toggleButtonState(); // Llama a la función para actualizar el estado del botón
  });

  // Inicializar el estado del botón al cargar la página
  toggleButtonState();
});


// // funcion para borrar imagen y dos textos
document.addEventListener('DOMContentLoaded', () => {
  const inputField1 = document.getElementById('position_team');
  const inputField2 = document.getElementById('description_team');
  const confirmButton = document.getElementById('arrowTeam');
  const resetButton = document.getElementById('reset_inputs3');
  const fileInput = document.getElementById('file-upload1');
  
  // Función para habilitar o deshabilitar el botón de confirmación
  const toggleButtonState = () => {
      const inputValue1 = inputField1.value.trim();
      const inputValue2 = inputField2.value.trim();
      const isImageSelected = fileInput.files.length > 0;

      // Verificar si ambos campos de texto tienen contenido y si se ha seleccionado una imagen
      if (inputValue1.length > 0 && inputValue2.length > 0 && isImageSelected) {
          confirmButton.classList.remove('disabled');
          confirmButton.style.pointerEvents = 'auto';
          confirmButton.style.opacity = '1';
      } else {
          confirmButton.classList.add('disabled');
          confirmButton.style.pointerEvents = 'none';
          confirmButton.style.opacity = '0.5';
      }
  };

  // Escuchar eventos de entrada en los campos de texto y en la carga de archivos
  inputField1.addEventListener('input', toggleButtonState);
  inputField2.addEventListener('input', toggleButtonState);
  fileInput.addEventListener('change', toggleButtonState);

  // Escuchar el evento de reset (cuando se hace clic en el botón de cancelar)
  resetButton.addEventListener('click', function() {
      inputField1.value = ''; // Borra el texto del primer campo
      inputField2.value = ''; // Borra el texto del segundo campo
      fileInput.value = ''; // Borra la imagen seleccionada
      toggleButtonState(); // Actualiza el estado del botón
  });

  // Inicializar el estado del botón al cargar la página
  toggleButtonState();
});

// uma imagen 3 textos
document.addEventListener('DOMContentLoaded', () => {
  const inputField1 = document.getElementById('name_product');
  const inputField2 = document.getElementById('price_product');
  const inputField3 = document.getElementById('description_product');
  let confirmButton = document.getElementById('arrowProduct');
  const resetButton = document.getElementById('reset_inputs4');
  let fileInput = document.getElementById('file-upload2');

  // Función para habilitar o deshabilitar el botón de confirmación
  const toggleButtonState = () => {
      const inputValue1 = inputField1.value.trim();
      const inputValue2 = inputField2.value.trim();
      const inputValue3 = inputField3.value.trim();
      const isImageSelected = fileInput.files.length > 0;

      // Verificar si ambos campos de texto tienen contenido y si se ha seleccionado una imagen
      if (inputValue1.length > 0 && inputValue2.length > 0 && inputValue3.length > 0 && isImageSelected) {
          confirmButton.classList.remove('disabled');
          confirmButton.style.pointerEvents = 'auto';
          confirmButton.style.opacity = '1';
      } else {
          confirmButton.classList.add('disabled');
          confirmButton.style.pointerEvents = 'none';
          confirmButton.style.opacity = '0.5';
      }
  };

  // Escuchar eventos de entrada en los campos de texto y en la carga de archivos
  inputField1.addEventListener('input', toggleButtonState);
  inputField2.addEventListener('input', toggleButtonState);
  inputField3.addEventListener('input', toggleButtonState);
  fileInput.addEventListener('change', toggleButtonState);

  // Escuchar el evento de reset (cuando se hace clic en el botón de cancelar)
  resetButton.addEventListener('click', function() {
      // Borrar los campos de texto
      inputField1.value = ''; 
      inputField2.value = ''; 
      inputField3.value = ''; 

      // Borrar la imagen seleccionada
      fileInput.value = ''; 

      // Reemplazar el input de archivo para eliminar cualquier estado previo
      const fileInputClone = fileInput.cloneNode(true);
      fileInput.parentNode.replaceChild(fileInputClone, fileInput);

      // Volver a asignar la referencia para seguir usándolo
      fileInput = fileInputClone;

      // Desactivar el botón de confirmación
      confirmButton.classList.add('disabled');
      confirmButton.style.pointerEvents = 'none';
      confirmButton.style.opacity = '0.5';

      toggleButtonState(); // Actualizar el estado del botón de confirmación
  });

  // Inicializar el estado del botón al cargar la página
  toggleButtonState();
});
// una imagen y tres textos:
document.addEventListener('DOMContentLoaded', () => {
  const inputFields = [
      document.getElementById('send_text_title'),
      document.getElementById('send_text_description'),
      document.getElementById('send_text_slogan'),
      document.getElementById('send_text_price')
  ];
  let fileInput = document.getElementById('file-upload3');
  const confirmButton = document.getElementById('arrowShop');
  const resetButton = document.getElementById('reset_inputs5');

  // Función para habilitar o deshabilitar el botón de confirmación
  const toggleButtonState = () => {
      const allFieldsFilled = inputFields.every(input => input.value.trim().length > 0);
      const isImageSelected = fileInput.files.length > 0;

      if (allFieldsFilled && isImageSelected) {
          confirmButton.classList.remove('disabled');
          confirmButton.style.pointerEvents = 'auto';
          confirmButton.style.opacity = '1';
      } else {
          confirmButton.classList.add('disabled');
          confirmButton.style.pointerEvents = 'none';
          confirmButton.style.opacity = '0.5';
      }
  };

  // Escuchar eventos en los campos de texto y en el input de archivo
  inputFields.forEach(input => input.addEventListener('input', toggleButtonState));
  fileInput.addEventListener('change', toggleButtonState);

  // Función para reiniciar los campos y el estado del botón
  const resetForm = () => {
      inputFields.forEach(input => (input.value = ''));
      fileInput.value = '';

      // Clonar y reemplazar el input de archivo para eliminar cualquier estado previo
      const fileInputClone = fileInput.cloneNode(true);
      fileInput.parentNode.replaceChild(fileInputClone, fileInput);
      fileInput = fileInputClone;

      // Reasignar eventos al nuevo input
      fileInput.addEventListener('change', toggleButtonState);

      // Desactivar el botón de confirmación
      confirmButton.classList.add('disabled');
      confirmButton.style.pointerEvents = 'none';
      confirmButton.style.opacity = '0.5';

      toggleButtonState();
  };

  // Escuchar el evento de reset
  resetButton.addEventListener('click', resetForm);

  // Inicializar el estado del botón al cargar la página
  toggleButtonState();
});
// cargar imagen
// Seleccionar los elementos necesarios
const cancelButton = document.querySelector('.cancel-btn');
const fileInputon = document.querySelector('#file-upload');
const confirmButton = document.querySelector('.confirm-btn');
const uploadSection = document.querySelector('#upload_image_id');

// Habilitar el botón de confirmar al seleccionar una imagen
fileInputon.addEventListener('change', () => {
    if (fileInputon.files.length > 0) {
        confirmButton.classList.remove('disabled');
    } else {
        confirmButton.classList.add('disabled');
    }
});

// Agregar un evento al botón de cancelar
cancelButton.addEventListener('click', () => {
    // Limpiar el campo de imagen
    fileInputon.value = '';

    // Restaurar el botón de confirmar a su estado original
    confirmButton.classList.add('disabled');

    // Ocultar la sección en lugar de cerrar la pestaña
    uploadSection.style.display = 'none';
});


//---------------------------------------------------------------------------Show and hide Success Button// Función para mostrar la tarjeta de éxito y confeti
let confettiAnimationFrame; // Variable para detener la animación

// Función para mostrar tarjeta de éxito
function showSuccess() {
    const card = document.getElementById('successCard');
    const confettiCanvas = document.getElementById('confettiCanvas');

    card.style.display = 'block';
    confettiCanvas.style.display = 'block';
    confettiCanvas.style.opacity = 1;

    createConfetti(confettiCanvas);
}

// Función para mostrar tarjeta de error
function showError() {
    const card = document.getElementById('errorCard');
    const confettiCanvas = document.getElementById('errorConfettiCanvas');

    card.style.display = 'block';
    confettiCanvas.style.display = 'block';
    confettiCanvas.style.opacity = 1;

    createConfetti(confettiCanvas);
}

// Función para cerrar cualquier tarjeta
function closeCard(cardId, canvasId) {
    const card = document.getElementById(cardId);
    const confettiCanvas = document.getElementById(canvasId);

    card.style.display = 'none';

    setTimeout(() => {
        confettiCanvas.style.opacity = 0;
        setTimeout(() => {
            confettiCanvas.style.display = 'none';
            cancelAnimationFrame(confettiAnimationFrame); // Detener animación
        }, 5000);
    }, 200);
}

// Lógica de confeti reutilizable
function createConfetti(canvas) {
    const confettiCtx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiColors = ['#4caf50', '#73dd76', '#ffffff'];
    const confettiPieces = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 8 + 2,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        speed: Math.random() * 3 + 1,
        angle: Math.random() * Math.PI * 2,
    }));

    function drawConfetti() {
        confettiCtx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach((piece) => {
            piece.y += piece.speed;
            piece.x += Math.sin(piece.angle);
            piece.angle += 0.01;

            if (piece.y > canvas.height) {
                piece.y = 0;
                piece.x = Math.random() * canvas.width;
            }

            confettiCtx.beginPath();
            confettiCtx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
            confettiCtx.fillStyle = piece.color;
            confettiCtx.fill();
        });

        confettiAnimationFrame = requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
