document.addEventListener("DOMContentLoaded", () => {

    const passwordInput = document.getElementById("psw");
    const confirmPasswordInput = document.getElementById("c_psw");
    const submitButton = document.getElementById("send_psw");


    const showError = (message) => {

        let errorElement = document.getElementById("password-error");
        if (!errorElement) {

            errorElement = document.createElement("p");
            errorElement.id = "password-error";
            errorElement.style.color = "red";
            errorElement.style.marginTop = "10px";
            document.querySelector(".search_mail_form").appendChild(errorElement);

        }

        errorElement.textContent = message;
        errorElement.style.display = "block";

    };

    // Función para ocultar el mensaje de error
    const hideError = () => {

        const errorElement = document.getElementById("password-error");

        if (errorElement) {

            errorElement.style.display = "none";

        }

    };


    submitButton.addEventListener("click", async () => {

        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();


        if (password !== confirmPassword) {

            showError("Las contraseñas no coinciden. Por favor, verifica.");
            return;

        } else {

            hideError();

        }

        if (!password || !confirmPassword) {

            showError("Por favor, completa ambos campos.");
            return;

        }

        const urlParts = window.location.pathname.split("/");
        const token = urlParts[urlParts.length - 1];

        try {

            const response = await fetch(`/reset_password/${token}`, {

                method: "POST",
                headers: {

                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ password }),

            });

            if (response.ok) {

                alert("¡Contraseña actualizada con éxito!");

            } else {

                const errorData = await response.json();
                showError(errorData.message || "Ocurrió un error al actualizar la contraseña.");

            }

        } catch (error) {

            console.error("Error:", error);
            showError("Error al conectarse con el servidor. Intenta de nuevo.");

        }

    });

});
