$( document ).ready(function() { // Когда документ загружен
    const formLogin = $( ".sidebar__form-login" );
    const submitButton = $( "#form-sign-in" );
    const inputLogin = $( "#input_login" );
    const inputPassword = $( "#input_password" );

    $( submitButton ).click(function(event) {
        event.preventDefault();
        if(!inputLogin.val())
            inputWarning(inputLogin);
        else if (!inputPassword.val())
            inputWarning(inputPassword);
        else
            formLogin.submit();
    });

    function inputWarning(inputElement) {
        inputElement.addClass('input-warning');
        setTimeout(function () {
            inputElement.removeClass("input-warning");
        }, 500);
    }
});