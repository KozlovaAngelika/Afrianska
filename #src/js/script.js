const checkEmailRegExp = new RegExp('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$');
let fullName = document.querySelector('.input-name');
let yourMessage = document.querySelector('.your-message');
let yourEmail = document.querySelector('.input-email');
let isValidFullName;
let isValidYourEmail;
let isValidYourMessage;

$(document).ready(function () {
    $('.burger').click(function (event) {
        $('body').toggleClass('lock')
        $('.header').toggleClass('active')
    });

    fullName.addEventListener('keyup', function () {
        isValidFullName = checkIsBlank(fullName);
        checkForm();
    });
    yourEmail.addEventListener('keyup', function () {
        isValidYourEmail = checkEmail(yourEmail);
        checkForm();
    });
    yourMessage.addEventListener('keyup', function () {
        isValidYourMessage = checkIsBlank(yourMessage);
        checkForm();
    });
});

let checkForm = function () {
    let btnForm = document.querySelector('.btn-form');
    if (isValidFullName && isValidYourMessage && isValidYourEmail) {
        btnForm.classList.remove('btn-disabled');
        btnForm.removeAttribute('disabled');
    } else {
        btnForm.classList.add('btn-disabled');
        btnForm.setAttribute('disabled', 'disabled');
    }
}

let checkIsBlank = function (param) {
    if (param.value) {
        param.classList.add('is-valid');
        param.classList.remove('is-invalid');
        return true;
    } else {
        param.classList.add('is-invalid');
        param.classList.remove('is-valid');
        return false;
    }
}

let checkEmail = function (param) {
    if (checkEmailRegExp.test(param.value)) {
        param.classList.add('is-valid');
        param.classList.remove('is-invalid');
        return true;
    } else {
        param.classList.add('is-invalid');
        param.classList.remove('is-valid');
        return false;
    }
}