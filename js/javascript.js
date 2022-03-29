function isEmpty(formName, field) {
    const form = document.forms[formName];
    return (form[field].value === '' || form[field].value === null || form[field].value === undefined);
}

function validateEmptyInputs() {
    var fields = ['firstname', 'lastname', 'email', 'password']
    fields.forEach(field => {
        var input = document.getElementById(`${field}`).classList;
        var errorClasses = document.getElementsByClassName(`${field}-error`)
        var emptyError = isEmpty('info', field);
        if (emptyError) {
            [].forEach.call(errorClasses, element => element.style.display = 'block');
            input.add('error');
        } else {
            [].forEach.call(errorClasses, element => element.style.display = 'none');
            input.remove('error');
        }
    });
}

function validateEmails() {
    var fields = ['email'];
    fields.forEach(field => {
        var input = document.getElementById(`${field}`).classList;
        var icon = document.getElementById(`${field}-icon`);
        var errorClasses = document.getElementsByClassName(`${field}-invalid`)
        var validError = validEmail('info', field);

        if (!validError && !isEmpty('info', field)) {
            [].forEach.call(errorClasses, element => element.style.display = 'block');
            icon.style.display = 'block';
            input.add('error');
        } else if (isEmpty('info', field)) {
            [].forEach.call(errorClasses, element => element.style.display = 'none');
            icon.style.display = 'block';
            input.add('error');
        } else {
            [].forEach.call(errorClasses, element => element.style.display = 'none');
            icon.style.display = 'none';
        }

    });
}

function validEmail(formName, field) {
    const form = document.forms[formName];
    var email = form[field].value;
    return email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


function validate() {
    validateEmptyInputs();
    validateEmails();
}