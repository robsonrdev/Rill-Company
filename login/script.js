function abrirPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

function enviarCodigo() {
    var email = document.getElementById("emailRecuperacao").value.trim();

    if (email === "") {
        alert("Por favor, insira seu e-mail.");
        return;
    }

    // Simulação de envio (apenas interface)
    document.getElementById("mensagemSucesso").style.display = "block";
    
    // Simular um fechamento do popup após 2 segundos
    setTimeout(fecharPopup, 2000);
}
