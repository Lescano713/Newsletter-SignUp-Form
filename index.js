const mainContainer = document.getElementById('main-container');
const inputEmail = document.querySelector('input');
const buttonSubmit = document.querySelector('button[type="submit"]');
const form = document.querySelector('form');
const body = document.body;


buttonSubmit.addEventListener('click', e =>{
    const email = inputEmail.value;
    e.preventDefault();
    if (!(email.includes("@gmail.com")) || email == "" ){
        form.classList.add('error-state');
        console.log(inputEmail.value)
    }else{
        mainContainer.style.display = 'none';
        messageShow(email);
        console.log("enviado")
    }

});

const messageShow =(email) => {
    const headerMessage = document.createElement('header');
    headerMessage.classList.add('success-message');

    const divMessage = document.createElement('div');
    divMessage.classList.add('message');

    const iconSuccess = document.createElement('img');
    iconSuccess.src = './assets/images/icon-success.svg';
    iconSuccess.alt = 'Icon Success';

    const h1 = document.createElement('h1');
    h1.textContent = 'Thanks for subscribing!';

    const p = document.createElement('p');
    p.innerHTML = `A confirmation email has been sent to <b>${email}</b> . Please open it and click the button inside to confirm your subscription.`;

    const button = document.createElement('button');
    button.textContent = "Dismiss message";

    divMessage.append(iconSuccess, h1, p);
    headerMessage.append(divMessage, button);
    body.appendChild(headerMessage);

}
