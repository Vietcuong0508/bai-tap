let txtFirstName = document.forms['login-form']['firstname'];
let txtLastName = document.forms['login-form']['lastname'];
let selectCountry = document.forms['login-form']['country'];
let btnSubmit = document.forms['login-form']['btnSubmit'];
let Password = document.forms['login-form']['password'];

var isValidFirstName = false;
var isValidLastName = false;
var isValidPassword = false;
txtFirstName.onkeyup = validateFirstName;
txtLastName.onkeyup = validateLastName;
Password.onkeyup = validatePassword;

function validateFirstName() {
    var firstname = this.value;
    var msgError = this.nextElementSibling;
    if (firstname.length < 5 || firstname.length > 20) {
        txtFirstName.className = 'error';
        msgError.innerText = '* First name must be between 5 to 20 characters!';
        msgError.className = 'msg-error'
    } else {
        this.className = 'valid';
        msgError.innerText = '';
        isValidFirstName = true;
    }
}

function validateLastName() {
    var lastname = this.value;
    var msgError = this.nextElementSibling;
    if (lastname.length < 5 || lastname.length > 20) {
        txtLastName.className = 'error';
        msgError.innerText = '* Last name must be between 5 to 20 characters!';
        msgError.className = 'msg-error'
        isValidLastName = true;
    } else {
        this.className = 'valid';
        msgError.innerText = '';
        isValidLastName = true;
    }
}

function validatePassword() {
    var password = this.value;
    var msgError = this.nextElementSibling;
    if (password.length < 8 || password.length > 20) {
        Password.className = 'error';
        msgError.innerText = '* Password must be between 8 to 20 characters!';
        msgError.className = 'msg-error'
        isValidPassword = true;
    } else {
        this.className = 'valid';
        msgError.innerText = '';
        isValidPassword = true;
    }
}

btnSubmit.onclick = function () {
    if (isValidFirstName && isValidLastName) {

    }
}
