const form = document.querySelector('.feedback-form');
const btn = document.querySelector('button');
const throttle = require('lodash.throttle');
form.addEventListener('input', throttle(handleForm, 500));
btn.addEventListener('click', handleBtn);

if(localStorage.getItem("feedback-form-state")){
    const {email:storageEmail , message:strageMessage} = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.elements.email.value = storageEmail;
    form.elements.message.value = strageMessage;
}

function handleBtn(ev){
    ev.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.clear();
    form.reset();
}

function handleForm(){
    const {elements:{email, message}} = form;
    const val = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(val));
}