function sendMessage() {
    const userInput = document.getElementById("userInput");
    const messageText = userInput.value.trim();

    if (messageText === "") return; 
    
    const chatBox = document.getElementById("chatBox");
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = messageText;
    chatBox.appendChild(userMessage);

   
    userInput.value = "";

    // scroll dentro del chat 
    chatBox.scrollTop = chatBox.scrollHeight;

    // respuesta 
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = "Bienvenido a Nakú. ¿En qué puedo ayudarte?";
        chatBox.appendChild(botMessage);

        // Hacer scrol
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
