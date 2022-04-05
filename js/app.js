
const form = document.getElementById('signup-form');
const formContainer = document.querySelector('.container--form');
const infoContainer = document.querySelector('.container--info');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    // prevent submit default
    e.preventDefault();
    // check input value
    checkInput();
});


function checkInput () {
    // check value of input fields

    // check first name
    if(firstName.value === '') {
    setError(firstName);
    } else {
       setSuccess(firstName);
    }

    // check last name
    if(lastName.value === '') {
        setError(lastName);
        } else {
           setSuccess(lastName);
        }

    // check email
    if(email.value === '') {
        setError(email);
        } else if (!checkEmail(email.value)) {
            setError(email);
        } else {
            setSuccess(email);
        }

    // check password
    if(password.value === '') {
        setError(password);
        } else {
            setSuccess(password);
        }

        // submit();
}

function checkEmail (email) {
    // validate email field value
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function setError (input) {
    const container = input.parentElement;
    const errMsg = container.querySelector('.error-msg')
    const inputField = container.querySelector('.input-field');

    // clear potential previous success 
    container.classList.remove('success');
    inputField.classList.remove('success');

    // add error class to parent container
    container.classList.add('error');
    // add error class/message to small
    errMsg.classList.add('error');
    // add error border to input field
    inputField.classList.add('error');
}


function setSuccess (input) {
    const container = input.parentElement;
    const errMsg = container.querySelector('.error-msg')
    const inputField = container.querySelector('.input-field');

    // clear potential previous error 
    container.classList.remove('error');
    errMsg.classList.remove('error');
    inputField.classList.remove('error');

    // add success class to parent container
    container.classList.add('success');
    // add success border to input field
    inputField.classList.add('success');
}

function submit () {
    if(firstName.classList.contains('success') &&
        lastName.classList.contains('success') &&
        email.classList.contains('success') && 
        password.classList.contains('success')){
            formContainer.style.display = "none";
            
        }
}