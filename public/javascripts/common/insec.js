function togglePassword() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";  //    Mostrar
    } else {
        passwordInput.type = "password";  // Ocultar 
    }
}
document.getElementById("botonCasa").addEventListener("click", function() {
    this.classList.toggle("show"); // Cambia entre mostrar y ocultar el botón
});


function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}