const Login = document.getElementById('input_login');
const Password = document.getElementById('input_password');
const entering = document.getElementById('entering');
const registration = document.getElementById('registration');
const RLogin = document.querySelectorAll("#input_login")[1];
const RPassword = document.querySelectorAll("#input_password")[1];



entering.addEventListener("click", function() {
        if(Login.value =="") {
        Login.style.backgroundColor = '#f1e1e4';
    }
    else{
        Login.style.backgroundColor = 'white';
        if(Password.value =="") {
            Password.style.backgroundColor = '#f1e1e4';
        }else{
            Password.style.backgroundColor = 'white';
        }
    }
});
registration.addEventListener("click", function() {
    if(RLogin.value =="") {
    RLogin.style.backgroundColor = '#f1e1e4';
}
else{
    RLogin.style.backgroundColor = 'white';
    if(RPassword.value =="") {
        RPassword.style.backgroundColor = '#f1e1e4';
    }else{
        RPassword.style.backgroundColor = 'white';
    }
}
});