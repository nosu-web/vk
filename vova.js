const TestButton = document.querySelector(".form-button");

TestButton.addEventListener("click", function() {
    const InpLogin = document.querySelector("#authorization_input_login");
    const InpPassword = document.querySelector("#authorization_input_password");
    var login = InpLogin.value;
    var password = InpPassword.value;
    if (login == "") {
        console.log("Нет логина");
        ColorChange("#authorization_input_login");
    } else {
        if (password == "") {
            console.log("Нет пароля");
            ColorChange("#authorization_input_password");
        } 
    }
});

function ColorChange(form) {
    document.querySelector(form).style.backgroundColor = '#f1e1e1';
    var timeId = setTimeout(function() {document.querySelector(form).style.backgroundColor = 'white'}, 1000);
}