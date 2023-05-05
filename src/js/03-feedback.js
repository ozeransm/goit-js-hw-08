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
    let formData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if((form.elements.email.value.trim())&&(form.elements.message.value.trim())){
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
        formData = {};
                
    }else alert("fill in all fields of the form");
    
}

function handleForm(){
    const {elements:{email, message}} = form;
    const val = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(val));
}