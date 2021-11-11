const inputLogin = document.querySelector("#input_login");
const inputPasswd = document.querySelector("#input_password");
const enterButton = document.querySelector("#form_button");

enterButton.addEventListener("click", function() {
    if(inputLogin.value == "") {
        inputLogin.style.backgroundColor = "#f1e1e1";
    }
    else {
        inputLogin.style.backgroundColor = "#fff";
        if(inputPasswd.value == "") {
            inputPasswd.style.backgroundColor = "#f1e1e1";
        }
        else {
            inputPasswd.style.backgroundColor = "#fff";
        }
    }
});