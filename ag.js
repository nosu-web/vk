const input__Log = document.querySelector("#input_login"); //переменная поля логина
const input__Password = document.querySelector("#input_password"); //перемнная поля пароля
const enter__Button = document.querySelector("#enter_button"); //кнопка входа
const forma =document.querySelector("form");

function formSubmit(){ // функция для проверки правильности заполнения поле и отправки формы на сервер
    if (input__Log.value=='')
            input__Log.classList.add('red');
        else{
            if (input__Password.value=='')
                input__Password.classList.add('red');
                else
                    forma.submit();
        }
            
}

enter__Button.addEventListener("click", formSubmit) //подсветка полей при нажатии на кнопку входа
 
