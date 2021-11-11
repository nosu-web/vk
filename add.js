const inputLogin = document.getElementById('input_login');
const inputPassword = document.getElementById('input_password');
const formButton = document.getElementById('formButton');

formButton.addEventListener("click", function() {
    if(inputLogin.value =="") {
        inputLogin.style.backgroundColor = '#f1e1e1';
    }
    else{
        inputLogin.style.backgroundColor = 'white';
        if(inputPassword.value =="") {
            inputPassword.style.backgroundColor = '#f1e1e1';
        }
        else{
            inputPassword.style.backgroundColor = 'white';
        }
    }
});
