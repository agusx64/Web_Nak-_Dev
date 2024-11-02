// Variables y elementos iniciales
const logoTitleContainerup = document.getElementById('logoTitleContainer');
const logoTitleContainerdown = document.getElementById('subtitle');
const logoTitleContainerdown1 = document.getElementById('text_presentation');


const documentHeight = document.documentElement.scrollHeight;
const windowHeight = window.innerHeight;

// Definimos un valor máximo de margen para evitar que se cree una tercera sección
const maxScrollHeight = documentHeight - windowHeight;

// Evento para manejar el scroll
window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;

    // Limitamos el valor de 'scrollValue' para que no cree un espacio adicional
    if (scrollValue * 1 < maxScrollHeight) {
        // Ajuste del margen basado en el desplazamiento, moviendo el contenedor completo
        logoTitleContainerup.style.transform = `translateY(${scrollValue * 0.8}px)`;
        logoTitleContainerdown.style.transform = `translateY(${-scrollValue * 0.8}px)`;
        logoTitleContainerdown1.style.transform = `translateY(${-scrollValue * 0.8}px)`;


    } else {
        // Limita el desplazamiento al máximo permitido
        logoTitleContainerup.style.transform = `translateY(${maxScrollHeight * 0.8}px)`;
        logoTitleContainerdown.style.transform = `translateY(${-maxScrollHeight * 0.8}px)`;
        logoTitleContainerdown1.style.transform = `translateY(${-scrollValue * 0.8}px)`;


    }
});

// Evento que ejecuta la animación del título al cargar la página
window.addEventListener('load', () => {
    // Se asegura de que el título aparezca con una animación suave de entrada
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)'; // Restablece la posición original con animación
});

// Evento que ejecuta la animación del logo y el título al cargar la página
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo_img');
    const title = document.querySelector('.title_mobile');
    
    if (logo) {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
    }

    if (title) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }
});

// Evento que ejecuta la animación del título al cargar la página
window.addEventListener('load', () => {
    const title = document.querySelector('.logo');
    if (title) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }
});

// Evento que ejecuta la animación del título al cargar la página
window.addEventListener('load', () => {
    const title = document.querySelector('.title_log');
    if (title) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }
});




//-----------------------------Butons Funciones-----------------------------//
const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');
let inactivityTimer;

// Función para restablecer todos los elementos a su estado inicial
function resetToInitialState() {
  textElements.forEach((textElement, index) => {
    textElement.classList.remove('showText'); // Oculta el texto
    buttons[index].textContent = 'Leer más...'; // Restablece el texto del botón
  });
}

// Función para manejar la inactividad y reiniciar el estado
function startInactivityTimer() {
  clearTimeout(inactivityTimer); // Reinicia el temporizador si hay actividad
  inactivityTimer = setTimeout(resetToInitialState, 5000); // 5 segundos de inactividad para restablecer
}

// Añadir evento de clic a los botones
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {length
    const textElement = textElements[index];
    textElement.classList.toggle('showText'); // Muestra u oculta el texto

    // Cambia el texto del botón
    if (textElement.classList.contains('showText')) {
      button.textContent = 'Leer menos...';
    } else {
      button.textContent = 'Leer más...';
    }

    startInactivityTimer(); // Inicia el temporizador de inactividad
  });
});

// Escucha cualquier movimiento o clic en la página para reiniciar el temporizador
window.addEventListener('mousemove', startInactivityTimer);
window.addEventListener('scroll', startInactivityTimer);
window.addEventListener('click', startInactivityTimer);

// Establece el estado inicial al cargar la página
resetToInitialState();
//-----------------------------Butons Funciones-----------------------------//


//-----------------------------Cambio de color objetos Hover-----------------------------//
// Función para cambiar el tema basado en las secciones que están detrás
function changeThemeShop() {
    const sections = document.querySelectorAll('section'); // Seleccionamos todas las secciones
    let isLightTheme = false;

    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect(); // Obtenemos la posición de la sección

        // Verificamos si el SVG está en la misma altura que la sección
        if (sectionRect.top <= window.innerHeight / 2 && sectionRect.bottom >= window.innerHeight / 2) {
            // Aplicamos el tema claro si la sección es clara
            if (section.classList.contains('section_main') || 
                section.classList.contains('section_history') || 
                section.classList.contains('section_location')) {
                
                document.body.classList.add('dark-theme'); // Tema oscuro para el SVG
                document.body.classList.remove('light-theme');
                isLightTheme = false; // Guardamos el estado del tema

            }
            // Aplicamos el tema oscuro si la sección es oscura
            else if (section.classList.contains('section_vm') || 
                     section.classList.contains('section_personal') || 
                     section.classList.contains('section_testimonials')) {
                
                document.body.classList.add('light-theme'); // Tema claro para el SVG
                document.body.classList.remove('dark-theme');
                isLightTheme = true; // Guardamos el estado del tema
            }
        }
    });
}
// Escuchamos el evento de scroll para cambiar el tema en función de la sección visible
window.addEventListener('scroll', changeThemeShop);
// Establecemos el tema inicial
changeThemeShop(); 


function changeThemeEgg() {
    const sections = document.querySelectorAll('section'); // Seleccionamos todas las secciones
    let isLightTheme = false;

    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect(); // Obtenemos la posición de la sección

        // Verificamos si el SVG está en la misma altura que la sección
        if (sectionRect.top <= window.innerHeight / 2 && sectionRect.bottom >= window.innerHeight / 2) {
            // Aplicamos el tema claro si la sección es clara
            if (section.classList.contains('section_ubicacion')) {
                
                document.body.classList.add('dark-theme_e'); // Tema oscuro para el SVG
                document.body.classList.remove('light-theme_e');
                isLightTheme = false; // Guardamos el estado del tema

            }
            // Aplicamos el tema oscuro si la sección es oscura
            else if (section.classList.contains('section_main') ||
                     section.classList.contains('section_history') ||
                     section.classList.contains('section_personal')||
                     section.classList.contains('section_vm')) {
                
                document.body.classList.add('light-theme_e'); // Tema claro para el SVG
                document.body.classList.remove('dark-theme_e');
                isLightTheme = true; // Guardamos el estado del tema
            }
        }
    });
}
// Escuchamos el evento de scroll para cambiar el tema en función de la sección visible
window.addEventListener('scroll', changeThemeEgg);
// Establecemos el tema inicial
changeThemeEgg();


function changeThemeUp() {
    const sections = document.querySelectorAll('section'); // Seleccionamos todas las secciones
    let isLightTheme = false;

    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect(); // Obtenemos la posición de la sección

        // Verificamos si el SVG está en la misma altura que la sección
        if (sectionRect.top <= window.innerHeight / 2 && sectionRect.bottom >= window.innerHeight / 2) {
            // Aplicamos el tema claro si la sección es clara
            if (section.classList.contains('section_vm') || 
                section.classList.contains('section_history') ||  
                section.classList.contains('section_testimonials') ||
                section.classList.contains('section_location')) {
                
                document.body.classList.add('dark-theme_i'); // Tema oscuro para el SVG
                document.body.classList.remove('light-theme_i');
                isLightTheme = false; // Guardamos el estado del tema

            }
            // Aplicamos el tema oscuro si la sección es oscura
            else if (section.classList.contains('section_main') || 
                     section.classList.contains('section_personal')) {
                
                document.body.classList.add('light-theme_i'); // Tema claro para el SVG
                document.body.classList.remove('dark-theme_i');
                isLightTheme = true; // Guardamos el estado del tema
            }
        }
    });
}
// Escuchamos el evento de scroll para cambiar el tema en función de la sección visible
window.addEventListener('scroll', changeThemeUp);
// Establecemos el tema inicial
changeThemeUp();

//Linkear elementos del index para ootros html's
const buttonShop = document.getElementById('button_shop');
const buttonRecipes = document.getElementById('recipe_button');
const enterShopButton = document.getElementById('enter_shop_button');
const shophover = document.getElementById('shop_hover');


// Contracción del menú hamburguesa
document.getElementById('icono-menu').addEventListener('click', function(event) {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active'); // Abre o cierra el menú
});

// Evento para cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const navigation = document.querySelector('.navigation');
    const iconoMenu = document.getElementById('icono-menu');

    // Verifica si el clic fue fuera del menú y del ícono del menú
    if (!navigation.contains(event.target) && !iconoMenu.contains(event.target) && navigation.classList.contains('active')) {
        navigation.classList.remove('active'); // Cierra el menú
    }
});
//
buttonShop.addEventListener('click', function() {
    window.location.href = '/shop_page';
});

buttonRecipes.addEventListener('click', function() {
    window.location.href = '/recetas';
});

enterShopButton.addEventListener('click', function() {
    window.location.href = '/shop_page';
});

shophover.addEventListener('click', function() {
    window.location.href = '/shop_page';
});



// Linkear en el mismo index
function scrollToSection(id, event) {
    if (event) event.preventDefault();  // Previene regresar al inicio por doble click
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Id del elemento -- id del nombre de la sección
document.getElementById('image_main').addEventListener('click', (event) => scrollToSection('sect_main', event));
document.getElementById('us').addEventListener('click', (event) => scrollToSection('sect_vm', event));
document.getElementById('history').addEventListener('click', (event) => scrollToSection('sect_hist', event));
document.getElementById('team').addEventListener('click', (event) => scrollToSection('sect_pers', event));
document.getElementById('testimony').addEventListener('click', (event) => scrollToSection('sect_testim', event));
document.getElementById('location').addEventListener('click', (event) => scrollToSection('sect_loc', event));
document.getElementById('go_up').addEventListener('click', (event) => scrollToSection('sect_main', event));

// Chatbot


// Mostrar el chat al presionar el botón
document.getElementById('chat_bot_hover').addEventListener('click', function() {
    const chatBox = document.getElementById('chatbot');
    chatBox.style.display = 'block'; // Muestra la caja de chat
});

// Ocultar el chat si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const chatBox = document.getElementById('chatbot');
    const chatButton = document.getElementById('chat_bot_hover');

    // Verifica si el clic fue fuera del chat y del botón que lo abre
    if (!chatBox.contains(event.target) && !chatButton.contains(event.target)) {
        chatBox.style.display = 'none'; // Oculta la caja de chat
    }
});

// Conexión API

let clickCount = 0;
const maxClicks = 3;

function sendMessage() {

    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");

    // Verifica si el botón está deshabilitado
    if (sendButton.disabled) return;

    const messageText = userInput.value.trim();

    if (messageText === "") return; 
    
    const chatBox = document.getElementById("chatBox");
    
    // Añadir el mensaje del usuario al chat
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = messageText;
    chatBox.appendChild(userMessage);

    // Hacer scroll hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;

    // Prepara el objeto para enviar a la API
    const sendJSON = {

        api_prompt: userInput.value

    };

    // Realiza la llamada al servidor con el fetch
    fetch('/api_response', {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json',

        },
        body: JSON.stringify(sendJSON)

    })
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {

        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = data.content;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    })
    .catch(error => {

        console.error('Error al obtener la respuesta del servidor:', error);

    });

    clickCount++;

    if (clickCount >= maxClicks) {
        sendButton.disabled = true;
    }

    userInput.value = "";
}

document.getElementById("userInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        event.preventDefault();
        sendMessage();

    }

});

