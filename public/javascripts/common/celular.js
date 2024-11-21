const home = document.getElementById('redirect_home');

document.addEventListener('DOMContentLoaded', function(){

    setInterval(getHuevoChanges(), 3000);

});


function toggleInfo(button) {
    var info = button.nextElementSibling;
    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
        info.style.maxHeight = info.scrollHeight + "px"; // Establece la altura máxima para que se deslice
    } else {
        info.classList.add("hidden");
        info.style.maxHeight = null; // Vuelve a colapsar
    }
}

home.addEventListener('click', function() {

    window.location.href = '/'

});

function getHuevoChanges () {

    fetch('/get_huevo_changes')
    .then(response => response.json())
    .then(data => {


        let changes = data;

    const img_Conohuevo = document.getElementById('cono_huevo');
    const nombre_Conohuevo = document.getElementById('name_conoHuevo');
    const price_Conohuevo = document.getElementById('price_conoHuevo');
    const desc_Conohuevo = document.getElementById('desc_conoHuevo');

    img_Conohuevo.src = changes[0].imagen;
    nombre_Conohuevo.textContent = changes[0].nombre;
    price_Conohuevo.textContent = changes[0].precio;
    desc_Conohuevo.textContent = changes[0].descripcion;

    const img_Cajahuevo = document.getElementById('caja_huevo');
    const nombre_Cajahuevo = document.getElementById('name_cajaHuevo');
    const price_Cajahuevo = document.getElementById('price_cajaHuevo');
    const desc_Cajahuevo = document.getElementById('desc_cajaHuevo');

    img_Cajahuevo.src = changes[1].imagen;
    nombre_Cajahuevo.textContent = changes[1].nombre;
    price_Cajahuevo.textContent = changes[1].precio;
    desc_Cajahuevo.textContent = changes[1].descripcion;

    const img_alimento = document.getElementById('alimento');
    const nombre_alimento = document.getElementById('name_alimento');
    const price_alimento  = document.getElementById('price_alimento');
    const desc_alimento  = document.getElementById('desc_alimento');

    img_alimento.src = changes[2].imagen;
    nombre_alimento.textContent = changes[2].nombre;
    price_alimento.textContent = changes[2].precio;
    desc_alimento.textContent = changes[2].descripcion;

    const img_gallina = document.getElementById('gallina');
    const nombre_gallina  = document.getElementById('name_gallina');
    const price_gallina   = document.getElementById('price_gallina');
    const desc_gallina   = document.getElementById('desc_gallina');

    img_gallina.src = changes[3].imagen;
    nombre_gallina.textContent = changes[3].nombre;
    price_gallina.textContent = changes[3].precio;
    desc_gallina.textContent = changes[3].descripcion;

    console.log(changes);
    })

    .catch(error => {
    console.error('Error al obtener los cambios:', error);


    });

};