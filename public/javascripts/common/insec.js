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

document.getElementById("botonEnviar").addEventListener("click", async function (event) {

    event.preventDefault();

    const email = document.getElementById("nombre").value.trim();
    const contrasena = document.getElementById("password").value.trim();
    const mensajeExito = document.getElementById("mensajeExito");
    const mensajeAdvertencia = document.getElementById("mensajeAdvertencia");

    mensajeExito.style.display = 'none';
    mensajeAdvertencia.style.display = 'none';

    if (email === '' || contrasena === '') {

        mensajeAdvertencia.textContent = 'Por favor, complete todos los campos.';
        mensajeAdvertencia.style.display = 'block';

        setTimeout(() => {

            mensajeAdvertencia.style.display = 'none';

        }, 3000);

        return;

    }

    try {

        const response = await fetch("/login", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, contrasena }),

        });

        const data = await response.json();

        if (data.success) {

            window.location.href = "/cambios_admin";

        } else {

            mensajeAdvertencia.textContent = data.message;
            mensajeAdvertencia.style.display = 'block';
            setTimeout(() => {

                mensajeAdvertencia.style.display = 'none';

            }, 3000);

        }

    } catch (error) {

        mensajeAdvertencia.textContent = "Error al procesar la solicitud.";
        mensajeAdvertencia.style.display = 'block';

    }

});
