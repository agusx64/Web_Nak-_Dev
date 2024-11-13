let insertDBChange;

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

// Fetchs de envio de de cambios a la pagina web
function insertNewDescription(){



}


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

// Configura los botones del menú
inicioBtn.addEventListener('click', function() {
    ocultarSecciones();  // Oculta todas las secciones
    inicioContent.hidden = false;
    
    //Botones del menu
    const button_description = document.getElementById('btn_text_home');
    const button_slogan = document.getElementById('btn_text_home1');
    const button_image = document.getElementById('btn_image_home');
    
    const textConfirmButton = document.getElementById('idSwitcher');  // Botón de confirmación para texto
    const imageConfirmButton = document.getElementById('confirm-btn');  // Botón de confirmación para imágenes

    // Al hacer clic en cada botón, se establece la acción actual
    button_image.addEventListener('click', function() {
      currentAction = 'insert_image';  // Asigna la acción de imagen
    });

    button_slogan.addEventListener('click', function() {
      currentAction = 'insert_slogan';  // Asigna la acción de slogan
    });

    button_description.addEventListener('click', function() {
      currentAction = 'insert_description';  // Asigna la acción de descripción
    });
});

// Evento de clic en el botón de confirmación para imágenes
const imageConfirmButton = document.getElementById('confirm-btn');
imageConfirmButton.addEventListener('click', function() {
  if (currentAction === 'insert_image') {
    const insertImage = document.getElementById('file-upload');
    const form_data = new FormData();
    form_data.append('background_image', insertImage.files[0]);

    // Fetch para insertar imagen
    fetch('/insert_image', {
      method: 'POST',
      body: form_data  // FormData maneja el Content-Type automáticamente
    });
  }
});

// Evento de clic en el botón de confirmación para texto (slogan o descripción)
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

});
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

  button_historia.addEventListener('click', function() {
    currentAction = 'insert_historia';  
  })

  button_image_historia.addEventListener('click', function() {
    currentAction = 'insert_image_historia';  
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
});
// Evento para mostrar la sección de 'testimonios'
testimoniosBtn.addEventListener('click', function() {
    ocultarSecciones();  
  testimoniosContent.hidden = false; 
});
// Evento para mostrar la sección de 'ubicacion'
ubicacionBtn.addEventListener('click', function() {
    ocultarSecciones();  
  ubicacionContent.hidden = false; 
});
// Evento para mostrar la sección de 'recetas'
recetasBtn.addEventListener('click', function() {
  ocultarSecciones();  
recetasContent.hidden = false; 
});
// Evento para mostrar la sección de 'productos'
productosBtn.addEventListener('click', function() {
  ocultarSecciones();  
productosContent.hidden = false; 
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
document.querySelectorAll('.close-btn_image').forEach(btn => {
  btn.addEventListener('click', function() {
    closeModal('upload_image_id');
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
setupModalToggle('btn_text_shop', 'upload_text_id');
setupModalToggle('btn_text_shop1', 'upload_text_id');
setupModalToggle('btn_image_shop', 'upload_image_id');
setupModalToggle('btn_text_shop2', 'upload_text_id');
setupModalToggle('btn_text_shop3', 'upload_text_id');
//US (2)
setupModalToggle('btn_text_us', 'upload_text_id');
setupModalToggle('btn_image_us', 'upload_image_id');
setupModalToggle('btn_text_us1', 'upload_text_id');
setupModalToggle('btn_image_us1', 'upload_image_id');
//History (2)
setupModalToggle('btn_text_hist', 'upload_text_id');
setupModalToggle('btn_image_hist', 'upload_image_id');
//Team (4)
setupModalToggle('btn_image_team', 'upload_image_id');
setupModalToggle('btn_text_team', 'upload_text_id');
setupModalToggle('btn_text_team1', 'upload_text_id');
setupModalToggle('btn_text_team2', 'upload_text_id');
//Testimonials (6)
setupModalToggle('btn_text_testim', 'upload_text_id');
setupModalToggle('btn_image_testim', 'upload_image_id');
setupModalToggle('btn_text_testim1', 'upload_text_id');
setupModalToggle('btn_image_testim1', 'upload_image_id');
setupModalToggle('btn_text_testim2', 'upload_text_id');
setupModalToggle('btn_text_testim3', 'upload_text_id');
//Location (1)
setupModalToggle('btn_text_location', 'upload_text_id');
//Recipes (4)
setupModalToggle('btn_text_recipes', 'upload_text_id');
setupModalToggle('btn_text_recipes1', 'upload_text_id');
setupModalToggle('btn_text_recipes2', 'upload_text_id');
setupModalToggle('btn_image_recipes', 'upload_image_id');
//Products (3)
setupModalToggle('btn_text_product', 'upload_text_id');
setupModalToggle('btn_text_product1', 'upload_text_id');
setupModalToggle('btn_image_product', 'upload_image_id');