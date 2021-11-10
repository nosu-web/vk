const inputLogin = document.querySelector("input[id=input_login]");
const inputPassword = document.querySelector("input[id=input_password]");

const buttonEnter = document.querySelector("button[id=login_button]")

buttonEnter.addEventListener("click", function() {
    if(inputLogin.value == '') {
        inputLogin.style.backgroundColor = "#ff496c"
    } else {
        inputLogin.style.backgroundColor = "#ffffff"
    }
    if(inputPassword.value == '') {
        inputPassword.style.backgroundColor = "#ff496c"
    } else {
        inputPassword.style.backgroundColor = "#ffffff"
    }
})

