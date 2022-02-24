
const form = document.getElementById('signup-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const submitBtn = document.getElementById('submit-btn');


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
}

function checkEmail (email) {
    // validate email field value
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function setError (input) {
    const container = input.parentElement;
    const errMsg = container.querySelector('.error-msg')
    const inputField = container.querySelector('.input-field');
    
    // add error class to parent container
    container.classList.add('error');
    // add error class/message to small
    errMsg.classList.add('error');
    // add error border to input field
    inputField.classList.add('error');
}


function setSuccess (input) {
    const container = input.parentElement;
    const inputField = container.querySelector('.input-field');

    // add success class to parent container
    container.classList.add('success');
    // add success border to input field
    inputField.classList.add('success');
}