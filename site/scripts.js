let currentImage = 1;

const img = document.getElementById('camisa');

// Função para trocar a imagem e adicionar transição
function changeImageOnHover() {
    img.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img.src = 'Fotos/camisa 2.png';
            currentImage = 2;
        } else {
            img.src = 'Fotos/camisa.png';
            currentImage = 1;
        }

        img.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

// Adiciona eventos de mouse
img.addEventListener('mouseover', changeImageOnHover);
img.addEventListener('mouseout', changeImageOnHover);



