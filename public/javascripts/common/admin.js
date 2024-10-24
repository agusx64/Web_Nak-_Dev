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
inicioBtn.addEventListener('click', function() {
    ocultarSecciones();  // Oculta todas las secciones
    inicioContent.hidden = false;  // Muestra la sección de 'inicio'
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
});
// Evento para mostrar la sección de 'historia'
historiaBtn.addEventListener('click', function() {
    ocultarSecciones();  
  historiaContent.hidden = false; 
});
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

