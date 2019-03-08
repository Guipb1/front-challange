$( document ).ready(function() {
    $("#phone").mask("(00) 0000-00009");
} );

function checkPassword() {
        var password = $("#password").val();
        var confirmPassword = $("#repeat").val();

        if (password != confirmPassword)
            alert("As senhas nao conferem");
        else
            alert("As senhas conferem");
    }