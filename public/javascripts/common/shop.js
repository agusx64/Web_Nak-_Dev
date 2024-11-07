let btninicio = document.getElementById('botonCasa');
let input_telephone = document.getElementById('telefono');
let input_mail = document.getElementById('email');
let input_nombre = document.getElementById('nombre');
let input_message= document.getElementById('mensaje');
let send_email = document.getElementById('botonEnviar');

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

});
