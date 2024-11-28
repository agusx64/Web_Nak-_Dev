const send_mail_button = document.getElementById('forgot_password');
const input_mail = document.getElementById('input_mail');

send_mail_button.addEventListener('click', async function() {
    const emailValue = input_mail.value.trim();
    console.log('Correo ingresado:', emailValue);

    if (!validateEmail(emailValue)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    const sendMail = { mail: emailValue };
    console.log('Objeto a enviar:', sendMail);

    try {
        await sendEmail(sendMail);
        alert('Email enviado exitosamente!');
        input_mail.value = '';
    } catch (error) {
        alert('Hubo un error al enviar el correo. Por favor, inténtalo nuevamente.');
        console.error(error);
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function sendEmail(mail) {
    console.log('Contenido enviado al servidor:', mail);
    return fetch('/forgot_password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(mail)
    });
}

