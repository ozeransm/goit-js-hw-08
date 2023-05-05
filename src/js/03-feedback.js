const form = document.querySelector('.feedback-form');
const btn = document.querySelector('button');
const throttle = require('lodash.throttle');
form.addEventListener('input', throttle(handleForm, 500));
btn.addEventListener('click', handleBtn);
const FEEDBACK_KEY="feedback-form-state";
updateForm();

function updateForm()
{
    if(localStorage.getItem(FEEDBACK_KEY)){
        const {email:storageEmail, message:strageMessage} = JSON.parse(localStorage.getItem("feedback-form-state"));
        form.elements.email.value = storageEmail;
        form.elements.message.value = strageMessage;
    }
}

function handleBtn(ev){
    ev.preventDefault();
    let formData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    if((form.elements.email.value.trim())&&(form.elements.message.value.trim())){
        console.log(formData);
        localStorage.removeItem(FEEDBACK_KEY);
        form.reset();
        formData = {};
                
    }else {
        updateForm();
        alert("fill in all fields of the form");
    }
    
}

function handleForm(){
    const {elements:{email, message}} = form;
    const val = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(val));
}