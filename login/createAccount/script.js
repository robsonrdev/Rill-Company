function validarConta() {
    var user = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    if (user === "" || email === "" || senha === "" || confirmarSenha === "") {
        abrirPopup();
        return false;
    }

    if (senha !== confirmarSenha) {
        abrirPopup();
        return false;
    }

    return true;
    location.href('../main.html');

    function abrirPopup() {
        document.getElementById("popupOverlay").style.display = "block";
    }



}

function fecharPopup() {
    document.getElementById("popupOverlay").style.display = "none";
}
