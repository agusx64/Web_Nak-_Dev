function togglePassword() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";  //    Mostrar
    } else {
        passwordInput.type = "password";  // Ocultar 
    }
}
