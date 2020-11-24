var txtFirstName = document.forms['login-form']['firstname'];
var txtLastName = document.forms['login-form']['lastname'];
var selectCountry = document.forms['login-form']['country'];
var btnSubmit = document.forms['login-form']['btnSubmit'];

var isValidFirstName = false;
var isValidLastName = false;
txtFirstName.onkeyup = validateFirstName;
txtLastName.onkeyup = validateLastName;

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
btnSubmit.onclick = function () {
    if(isValidFirstName && isValidLastName) {

    }
}