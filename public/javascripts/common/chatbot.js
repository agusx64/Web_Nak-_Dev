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

