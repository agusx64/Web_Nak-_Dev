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


function toggleMenu() {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('nav-open'); // Alterna la clase nav-open para mostrar u ocultar los enlaces
}

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
  button.addEventListener('click', () => {
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
            if (section.classList.contains('section_fullscreen') || 
                section.classList.contains('us') || 
                section.classList.contains('ubicacion')) {
                
                document.body.classList.add('dark-theme'); // Tema oscuro para el SVG
                document.body.classList.remove('light-theme');
                isLightTheme = false; // Guardamos el estado del tema

            }
            // Aplicamos el tema oscuro si la sección es oscura
            else if (section.classList.contains('section_vm') || 
                     section.classList.contains('personal') || 
                     section.classList.contains('testimonios')) {
                
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
            if (section.classList.contains('ubicacion')) {
                
                document.body.classList.add('dark-theme_e'); // Tema oscuro para el SVG
                document.body.classList.remove('light-theme_e');
                isLightTheme = false; // Guardamos el estado del tema

            }
            // Aplicamos el tema oscuro si la sección es oscura
            else if (section.classList.contains('section_fullscreen') ||
                     section.classList.contains('us') ||
                     section.classList.contains('personal')||
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
                section.classList.contains('us') ||  
                section.classList.contains('testimonios') ||
                section.classList.contains('ubicacion')) {
                
                document.body.classList.add('dark-theme_i'); // Tema oscuro para el SVG
                document.body.classList.remove('light-theme_i');
                isLightTheme = false; // Guardamos el estado del tema

            }
            // Aplicamos el tema oscuro si la sección es oscura
            else if (section.classList.contains('section_fullscreen') || 
                     section.classList.contains('personal')) {
                
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


document.getElementById('icono-menu').addEventListener('click', function() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
});