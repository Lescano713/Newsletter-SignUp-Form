const mainContainer = document.getElementById('main-container');
const form = document.querySelector('form');
const body = document.body;


form.addEventListener('submit', sendForm)
function sendForm(e){
    e.preventDefault();

    const data = {};
    const fields = e.target.querySelectorAll('input', 'select');
    for (const field of fields) {
        if (!(field.value.includes("@gmail.com")) || field.value == "") {
            form.classList.add('error-state');
            console.log("error");
        }else{
            data[field.name] = field.value;
            form.classList.remove('error-state');
            mainContainer.style.display = 'none';
            messageShow(data[field.name]);
            console.log("success");
        }
    }

}


const messageShow =(email) => {
    const existingMessage = document.querySelector('header.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }

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

    const buttonDismiss = document.createElement('button');
    buttonDismiss.textContent = "Dismiss message";
    buttonDismiss.type = "button";

    buttonDismiss.addEventListener("click", e=>{
        headerMessage.remove();
        mainContainer.style.display = "flex";
    })

    divMessage.append(iconSuccess, h1, p);
    headerMessage.append(divMessage, buttonDismiss);
    body.appendChild(headerMessage);

}
