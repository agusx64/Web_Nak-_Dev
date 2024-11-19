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

});

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
setupModalToggle('btn_text_location', 'upload_text_id');
//Recipes (4)
setupModalToggle('btn_text_recipes', 'upload_text_id');
setupModalToggle('btn_text_recipes1', 'upload_text_id');
setupModalToggle('btn_text_recipes2', 'upload_text_id');
setupModalToggle('btn_image_recipes', 'upload_image_id');
//Products (4)
setupModalToggle('btn_text_product', 'upload_image_and_text3_id');
setupModalToggle('btn_text_product1', 'upload_image_and_text3_id');
setupModalToggle('btn_text_product2', 'upload_image_and_text3_id');
setupModalToggle('btn_text_product3', 'upload_image_and_text3_id');


function getStartLog() {
  fetch('/start_log')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const tableBody = document.getElementById('table_body');
      tableBody.innerHTML = '';

      data.forEach(row => {

        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
          <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
              </svg>
          </td>
          <td>${row.id}</td>
          <td>${truncateText(row.descripcion, 30)}</td>
          <td><a href="${row.img_producto}">Imagen cargada</a></td>
          <td>${truncateText(row.slogan, 30)}</td>
          <td>${row.created_at}</td>
        `;

        tableBody.appendChild(tableRow);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function  getUsLog() {

  fetch ('/us_log')

  .then(response => response.json())
  .then(data => {

    console.log(data);
    const tableBodyUs = document.getElementById('table_body_us');

    tableBodyUs.innerHTML = '';

    data.forEach(row => {

      const tableRow = document.createElement('tr');

      tableRow.innerHTML = `
      <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
          </svg>
      </td>
      <td>${row.id}</td>
      <td>${truncateText(row.mision, 30)}</td>
      <td><a href="${row.img_mision}">Imagen cargada</a></td>
      <td>${truncateText(row.vision, 30)}</td>
      <td><a href="${row.img_vision}">Imagen cargada</a></td>
      <td>${row.created_at}</td>
    `;

    tableBodyUs.appendChild(tableRow);

    })

  }) 

  .catch(error => {

    console.error(error);

  })

}

function getHistoryLog() {

  fetch('/history_log')
  .then(response => response.json())
  .then(data => {

    console.log(data);

    const tableBodyHistory = document.getElementById('table_body_history');
    tableBodyHistory.innerHTML = '';

    data.forEach(row => {

      const tableRow = document.createElement('tr');

      tableRow.innerHTML = `
      <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
          </svg>
      </td>
      <td>${row.id}</td>
      <td>${truncateText(row.texto_historia, 30)}</td>
      <td><a href="${row.img_carousel_1}">Imagen 1</a></td>
      <td><a href="${row.img_carousel_2}">Imagen 2</a></td>
      <td><a href="${row.img_carousel_3}">Imagen 3</a></td>
      <td>${row.created_at}</td>
    `;
    
    tableBodyHistory.appendChild(tableRow);

    });

  })
  .catch(error => {

    console.error(error);

  });

}

function getProductsChanges() {

  fetch('/get_products_log')

  .then(response => response.json())
  .then(data => {

    console.log(data);
    
    const tableBodyProducts = document.getElementById('table_body_products');
    tableBodyProducts.innerHTML = '';
    
    data.forEach(row => {

      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
      <td><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="13" height="13" rx="4" stroke="#D2D2D2" stroke-width="2" />
          </svg>
      </td>
      <td>${row.id}</td>
      <td>${truncateText(row.titulo, 30)}</td>
      <td>${truncateText(row.descripcion, 30)}</td>
      <td>${truncateText(row.precio, 30)}</td>
      <td><a href="${row.img}">Imagen</a></td>
      <td>${truncateText(row.slogan, 30)}</td>
      <td>${row.created_at}</td>
    `;
    
    tableBodyProducts.appendChild(tableRow);

    })

  })

}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}