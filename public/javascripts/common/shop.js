let btninicio = document.getElementById('botonCasa');
let input_telephone = document.getElementById('telefono');
let input_mail = document.getElementById('email');
let input_nombre = document.getElementById('nombre');
let input_message= document.getElementById('mensaje');
let send_email = document.getElementById('botonEnviar');

document.addEventListener('DOMContentLoaded', function(){

    setInterval(getProducts(), 3000);

});



btninicio.addEventListener('click', function() {

    window.location.href = '/'

})

function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

/*----------------------------------------------Button POPUP----------------------------------------------*/
document.getElementById("interro").addEventListener("click", function() {
    document.getElementById("popup1").classList.add("show");
});

document.querySelector(".popup .close").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("popup1").classList.remove("show");
});

send_email.addEventListener('click', function(){


    let userDataJSON = {
    
        telephone: input_telephone.value,
        mail: input_mail.value,
        full_name: input_nombre.value,
        text: input_message.value
    }

    console.log(userDataJSON);

    //Metodo fecth
    fetch('/send_email', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDataJSON)
    
    })
    .then(response => response.json());

    window.location.href = '/celular'

});

function getProducts() {

    fetch('/get_products_changes')
    .then(response => response.json())
    .then(data => {

    let changes = data;

    const title = document.getElementById('mini_box');
    const description = document.getElementById('description_p1');
    const img = document.getElementById('img_p1');
    const slogan = document.getElementById('slogan_p1');
    const precio = document.getElementById('price_p1');

    title.textContent = changes[0].titulo;
    description.textContent = changes[0].descripcion;
    img.src = changes[0].img;
    slogan.textContent = changes[0].slogan;
    precio.textContent = changes[0].precio;
    

    const title2 = document.getElementById('mega_box');
    const description2 = document.getElementById('description_p2');
    const img2 = document.getElementById('img_p2');
    const slogan2 = document.getElementById('slogan_p2');
    const precio2 = document.getElementById('price_p2');

    title2.textContent = changes[1].titulo;
    description2.textContent = changes[1].descripcion;
    img2.src = changes[1].img;
    slogan2.textContent = changes[1].slogan;
    precio2.textContent = changes[1].precio; 
    
    const title3 = document.getElementById('tepexpan');
    const description3 = document.getElementById('description_p3');
    const img3 = document.getElementById('img_p3');
    const slogan3 = document.getElementById('slogan_p3');
    const precio3 = document.getElementById('price_p3');

    title3.textContent = changes[2].titulo;
    description3.textContent = changes[2].descripcion;
    img3.src = changes[2].img;
    slogan3.textContent = changes[2].slogan;
    precio3.textContent = changes[2].precio; 
    
    
    

    const title4 = document.getElementById('mega');
    const description4 = document.getElementById('description_p4');
    const img4 = document.getElementById('img_p4');
    const slogan4 = document.getElementById('slogan_p4');
    const precio4 = document.getElementById('price_p4');

    title4.textContent = changes[3].titulo;
    description4.textContent = changes[3].descripcion;
    img4.src = changes[3].img;
    slogan4.textContent = changes[3].slogan;
    precio4.textContent = changes[3].precio;
    


    console.log(changes);
    })
    .catch(error => {
        console.error('Error al obtener los cambios:', error);
    });

};

