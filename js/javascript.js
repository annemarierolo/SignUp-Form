// function isEmpty(formName, fieldNames) {
//     const form = document.forms[formName];
//     return fieldNames.some(field => !form[field].value);
// }

// isEmpty(['firstname', 'lastname', 'email', 'password']);

function hasValue() {
    var fnameVal = document.getElementById('fname').value;
    var input = document.getElementById("fname").classList;
    var fNameError = document.getElementById("errors");
    var iconError = document.getElementById("icon");
    if (!fnameVal) {
        input.add('error');
        fNameError.style.visibility = 'visible';
        iconError.style.visibility = 'visible';
    } else {
        input.remove('error');
        fNameError.style.visibility = 'hidden';
        iconError.style.visibility = 'hidden';
    }
}