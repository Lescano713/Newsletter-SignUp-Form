const mainContainer = document.getElementById('main-container');
const infoContainer = document.querySelector('.info-container');
const inputEmail = document.querySelector('input');
const button = document.querySelector('button[type="submit"]');
const form = document.querySelector('form');


button.addEventListener('click', e =>{
    e.preventDefault();
    if (!inputEmail.value.search("@gmail.com") ) {
        form.classList.add('error-state');
        console.log(inputEmail.value)
    }else{
        mainContainer.style.display = 'none';
        console.log("enviado")
    }

});

// function errorState(){
//     const label = inputEmail.value;
//     if (label == "a") {
//         inputEmail.classList.add('error-state');
//     }else{
//         console.log("no agarra")
//     }
// }
// function show(){
//     form.classList.add('error-state')
//     form.style.backgroundColor = "red";
    
// }